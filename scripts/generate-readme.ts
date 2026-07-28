import {
  awesomeSeoToolCategories,
  awesomeSeoToolCount,
  getAwesomeSeoToolsForCategory,
  pricingVerifiedAt,
} from '../data/awesomeSeoTools'

const websiteUrl = 'https://screpy.com/awesome-seo-tools/'

function escapeCell(value: string) {
  return value.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`))
}

const categoryLinks = awesomeSeoToolCategories
  .map((category, index) => {
    const count = getAwesomeSeoToolsForCategory(category).length
    return `${String(index + 1).padStart(2, '0')}. [${category.title}](#${category.slug}) (${count})`
  })
  .join('\n')

const sections = awesomeSeoToolCategories
  .map((category) => {
    const tools = getAwesomeSeoToolsForCategory(category).toSorted((left, right) =>
      left.name.localeCompare(right.name),
    )
    const rows = tools
      .map(
        (tool) =>
          `| [${escapeCell(tool.name)}](${tool.url}) | ${escapeCell(tool.description)} | [${escapeCell(tool.startingPrice)}](${tool.pricingUrl}) | ${escapeCell(tool.billing)} | ${escapeCell(tool.freePlan)} |`,
      )
      .join('\n')

    return `## ${category.title}\n\n${category.description}\n\n| Tool | Best for | Starting price | Billing | Free plan or trial |\n| --- | --- | --- | --- | --- |\n${rows}`
  })
  .join('\n\n')

const readme = `# Awesome SEO Tools\n\n> A practical, category-based directory of established SEO tools. Compare what each product does, its official starting price, billing basis, and free-plan or trial availability before choosing your stack.\n\n[Browse the live directory](${websiteUrl}) · [Contributing](CONTRIBUTING.md)\n\n## Contents\n\n${categoryLinks}\n\n## About\n\n- **${awesomeSeoToolCount} unique tools** across **${awesomeSeoToolCategories.length} SEO workflows**.
- Direct vendor links only; no affiliate links or sponsored ordering.
- Listings are alphabetical within each category.
- Pricing last reviewed: **${formatDate(pricingVerifiedAt)}**. Prices can change; always confirm on the vendor website before buying.
- **Disclosure:** Screpy is maintained by the project owner and appears where relevant.\n\n${sections}\n\n## Maintain this list\n\nThe source of truth is [data/awesomeSeoTools.ts](data/awesomeSeoTools.ts). After any change, run:\n\n\`\`\`bash\nbun run generate:readme\nbun run verify\n\`\`\`\n\nSee [CONTRIBUTING.md](CONTRIBUTING.md) for listing and verification rules. Product names and trademarks belong to their respective owners; a listing does not imply endorsement.\n`

await Bun.write(new URL('../README.md', import.meta.url), readme)
