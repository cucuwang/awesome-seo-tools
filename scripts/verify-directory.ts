import {
  awesomeSeoTools,
  awesomeSeoToolCategories,
  getAwesomeSeoToolsForCategory,
} from '../data/awesomeSeoTools'

const readme = await Bun.file(new URL('../README.md', import.meta.url)).text()
const uniqueIds = new Set(awesomeSeoTools.map((tool) => tool.id))
const renderedRows = awesomeSeoToolCategories.reduce(
  (total, category) => total + getAwesomeSeoToolsForCategory(category).length,
  0,
)
const missingTools = awesomeSeoToolCategories.flatMap((category) =>
  getAwesomeSeoToolsForCategory(category).filter(
    (tool) => !readme.includes(`](${tool.url})`),
  ),
)
const missingSections = awesomeSeoToolCategories.filter(
  (category) => !readme.includes(`## ${category.title}`),
)
const nonHttpsUrls = awesomeSeoTools.filter(
  (tool) => !tool.url.startsWith('https://') || !tool.pricingUrl.startsWith('https://'),
)

if (uniqueIds.size !== awesomeSeoTools.length) {
  throw new Error(`Expected unique tool IDs; found ${uniqueIds.size}/${awesomeSeoTools.length}.`)
}

if (missingTools.length > 0 || missingSections.length > 0) {
  throw new Error(
    `README is incomplete: ${missingTools.length} missing tool links, ${missingSections.length} missing sections.`,
  )
}

if (nonHttpsUrls.length > 0) {
  throw new Error(`Expected HTTPS vendor links; found ${nonHttpsUrls.length} invalid entries.`)
}

console.log(
  `Verified ${awesomeSeoTools.length} unique tools in ${awesomeSeoToolCategories.length} categories (${renderedRows} rendered rows).`,
)
