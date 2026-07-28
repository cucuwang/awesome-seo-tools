export type AwesomeSeoTool = {
  id: string
  name: string
  url: string
  pricingUrl: string
  description: string
  startingPrice: string
  billing: string
  freePlan: string
  verifiedAt: string
}

export type AwesomeSeoToolCategory = {
  title: string
  slug: string
  description: string
  toolIds: string[]
}

type AwesomeSeoToolCategoryDefinition = Omit<
  AwesomeSeoToolCategory,
  'toolIds'
> & {
  tools: AwesomeSeoTool[]
  additionalToolIds?: string[]
}

type ResearchedToolDefinition = AwesomeSeoTool & {
  categorySlugs: string[]
}

const pricingVerifiedAt = '2026-07-21'

function tool(
  name: string,
  url: string,
  pricingUrl: string,
  description: string,
  startingPrice: string,
  billing: string,
  freePlan: string,
): AwesomeSeoTool {
  return {
    id: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, ''),
    name,
    url,
    pricingUrl,
    description,
    startingPrice,
    billing,
    freePlan,
    verifiedAt: pricingVerifiedAt,
  }
}

function researchedTool(
  name: string,
  url: string,
  description: string,
  categorySlugs: string[],
): ResearchedToolDefinition {
  return {
    ...tool(name, url, url, description, 'See website', 'varies', 'Check website'),
    categorySlugs,
  }
}

const awesomeSeoToolCategoryDefinitions: AwesomeSeoToolCategoryDefinition[] = [
  {
    title: 'All-in-one SEO platforms',
    slug: 'all-in-one-seo-platforms',
    description: 'Broad SEO suites for research, auditing, rank tracking, content, and reporting.',
    tools: [
      tool('Screpy', 'https://screpy.com/', 'https://screpy.com/pricing/', 'Website audit, rank tracking, monitoring, and SEO reporting.', '$16/mo', 'annual billing', 'Free trial'),
      tool('Semrush', 'https://www.semrush.com/', 'https://www.semrush.com/pricing/', 'SEO, PPC, content, competitive research, and reporting suite.', '$139/mo', 'monthly', 'Free account with limited tools'),
      tool('Ahrefs', 'https://ahrefs.com/', 'https://ahrefs.com/pricing', 'Keyword, backlink, content, and technical SEO platform.', '$129/mo', 'monthly', 'Free Webmaster Tools'),
      tool('Moz Pro', 'https://moz.com/', 'https://moz.com/products/pro/pricing', 'Rank tracking, keyword research, site crawls, and links.', '$79/mo', 'annual billing', '30-day free trial'),
      tool('SE Ranking', 'https://seranking.com/', 'https://seranking.com/pricing.html', 'SEO suite for agencies, tracking, audits, and reporting.', '$103.20/mo', 'annual billing', '14-day free trial'),
      tool('Serpstat', 'https://serpstat.com/', 'https://serpstat.com/pricing/', 'Keyword, rank, backlink, and site audit toolkit.', 'See website', 'varies', 'See pricing page'),
      tool('Mangools', 'https://mangools.com/', 'https://mangools.com/pricing', 'Keyword research, SERP analysis, backlinks, and tracking.', 'See website', 'varies', 'See pricing page'),
      tool('WebCEO', 'https://www.webceo.com/', 'https://www.webceo.com/pricing', 'White-label SEO platform for agencies and teams.', 'See website', 'varies', 'See pricing page'),
      tool('Raven Tools', 'https://raventools.com/', 'https://raventools.com/plans/', 'SEO research, audit, reporting, and campaign platform.', '$39/mo', 'monthly', '7-day free trial'),
      tool('Similarweb', 'https://www.similarweb.com/', 'https://www.similarweb.com/pricing/', 'Digital market intelligence, traffic research, and keyword data.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Keyword research and clustering',
    slug: 'keyword-research-and-clustering',
    description: 'Find demand, questions, keyword groups, and search-intent opportunities.',
    additionalToolIds: ['screpy', 'semrush', 'ahrefs', 'se-ranking', 'serpstat', 'mangools'],
    tools: [
      tool('Keyword Tool', 'https://keywordtool.io/', 'https://keywordtool.io/pricing', 'Keyword ideas from Google, YouTube, Amazon, and more.', 'See website', 'varies', 'See pricing page'),
      tool('AnswerThePublic', 'https://answerthepublic.com/', 'https://answerthepublic.com/pricing', 'Search questions, comparisons, and autocomplete visualisations.', 'See website', 'varies', 'See pricing page'),
      tool('AlsoAsked', 'https://alsoasked.com/', 'https://alsoasked.com/pricing', 'People Also Ask research and question-tree discovery.', '$15/mo', 'monthly', 'Free searches with limits'),
      tool('LowFruits', 'https://lowfruits.io/', 'https://lowfruits.io/pricing', 'Low-competition keyword discovery and SERP analysis.', '$29.90/mo', 'monthly', 'Pay-as-you-go credits available'),
      tool('Keyword Insights', 'https://www.keywordinsights.ai/', 'https://www.keywordinsights.ai/pricing', 'Keyword clustering, intent classification, and content briefs.', 'See website', 'varies', 'See pricing page'),
      tool('Keysearch', 'https://www.keysearch.co/', 'https://www.keysearch.co/pricing', 'Budget keyword research, SERPs, and rank tracking.', 'See website', 'varies', 'See pricing page'),
      tool('Keyword Chef', 'https://keywordchef.com/', 'https://keywordchef.com/pricing/', 'Buy-once keyword research focused on long-tail opportunities.', 'See website', 'varies', 'See pricing page'),
      tool('Keywords Everywhere', 'https://keywordseverywhere.com/', 'https://keywordseverywhere.com/pricing.html', 'Browser keyword metrics and related-query research.', 'See website', 'varies', 'See pricing page'),
      tool('TopicRanker', 'https://www.topicranker.com/', 'https://www.topicranker.com/pricing', 'Keyword opportunities based on weak ranking pages.', 'See website', 'varies', 'See pricing page'),
      tool('KParser', 'https://kparser.com/', 'https://kparser.com/pricing', 'Keyword suggestions from search engines and marketplaces.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Rank tracking and SERP intelligence',
    slug: 'rank-tracking-and-serp-intelligence',
    description: 'Track organic positions, local results, SERP features, and competitors.',
    additionalToolIds: ['screpy', 'semrush', 'ahrefs', 'se-ranking', 'serpstat', 'mangools'],
    tools: [
      tool('AccuRanker', 'https://www.accuranker.com/', 'https://www.accuranker.com/pricing', 'Fast daily rank tracking with segmentation and reporting.', '$224/mo', 'monthly', '14-day free trial'),
      tool('Advanced Web Ranking', 'https://www.advancedwebranking.com/', 'https://www.advancedwebranking.com/pricing', 'Enterprise rank tracking across search engines and locations.', '$139/mo', 'monthly', '30-day free trial'),
      tool('ProRankTracker', 'https://proranktracker.com/', 'https://proranktracker.com/pricing/', 'Daily position tracking, mobile rankings, and reports.', 'See website', 'varies', 'See pricing page'),
      tool('Nightwatch', 'https://www.nightwatch.io/', 'https://www.nightwatch.io/pricing', 'Rank tracking with local visibility and reporting.', 'See website', 'varies', 'See pricing page'),
      tool('Rank Ranger', 'https://www.rankranger.com/', 'https://www.rankranger.com/pricing', 'Rank tracking, SERP features, dashboards, and API access.', 'See website', 'varies', 'See pricing page'),
      tool('Wincher', 'https://www.wincher.com/', 'https://www.wincher.com/pricing', 'Keyword tracking and on-page optimisation for teams.', 'See website', 'varies', 'See pricing page'),
      tool('SerpWatch', 'https://serpwatch.io/', 'https://serpwatch.io/pricing', 'Rank tracking, alerts, and white-label reporting.', '$50/mo', 'monthly', '14-day free trial'),
      tool('Zutrix', 'https://zutrix.com/', 'https://zutrix.com/pricing', 'AI-assisted rank tracking and keyword monitoring.', 'See website', 'varies', 'See pricing page'),
      tool('Nozzle', 'https://nozzle.ai/', 'https://nozzle.ai/pricing', 'SERP-level visibility data and rank tracking at scale.', '$399/mo', 'monthly', '14-day free trial'),
      tool('RankTracker.com', 'https://www.ranktracker.com/', 'https://www.ranktracker.com/pricing', 'Keyword positions, SERPs, and competitor research.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Technical SEO crawlers and audits',
    slug: 'technical-seo-crawlers-and-audits',
    description: 'Crawl sites, find technical defects, and monitor indexability at scale.',
    additionalToolIds: ['screpy', 'semrush', 'ahrefs'],
    tools: [
      tool('Screaming Frog SEO Spider', 'https://www.screamingfrog.co.uk/seo-spider/', 'https://www.screamingfrog.co.uk/seo-spider/pricing/', 'Desktop crawler for site audits, redirects, metadata, and sitemaps.', '£199/year', 'annual licence', 'Free crawl up to 500 URLs'),
      tool('Sitebulb', 'https://sitebulb.com/', 'https://sitebulb.com/pricing/', 'Desktop and cloud auditing with prioritised recommendations.', '£95/year', 'annual licence', '14-day free trial'),
      tool('Lumar', 'https://www.lumar.io/', 'https://www.lumar.io/pricing/', 'Enterprise technical SEO, crawling, and website intelligence.', 'Custom', 'quote-based', 'Demo available'),
      tool('Botify', 'https://www.botify.com/', 'https://www.botify.com/pricing/', 'Enterprise crawl, log, and search performance platform.', 'Custom', 'quote-based', 'Demo available'),
      tool('Oncrawl', 'https://www.oncrawl.com/', 'https://www.oncrawl.com/pricing/', 'Technical SEO, log analysis, and data-driven crawling.', 'Custom', 'quote-based', 'Free trial or demo'),
      tool('JetOctopus', 'https://jetoctopus.com/', 'https://jetoctopus.com/pricing/', 'Cloud crawler, log analyser, and SEO dashboard.', 'See website', 'varies', 'See pricing page'),
      tool('ContentKing', 'https://www.contentkingapp.com/', 'https://www.contentkingapp.com/pricing/', 'Real-time SEO monitoring and change detection.', 'See website', 'varies', 'See pricing page'),
      tool('Spotibo', 'https://www.spotibo.com/', 'https://www.spotibo.com/pricing', 'Cloud SEO crawler for agencies and technical audits.', 'See website', 'varies', 'See pricing page'),
      tool('Netpeak Spider', 'https://netpeaksoftware.com/spider', 'https://netpeaksoftware.com/prices', 'Desktop crawler for SEO audits and website scraping.', 'See website', 'varies', 'See pricing page'),
      tool('Hexometer', 'https://hexometer.com/', 'https://hexometer.com/pricing', 'Website monitoring for technical, performance, and SEO issues.', '$9/mo', 'monthly', 'Free plan'),
    ],
  },
  {
    title: 'On-page SEO and content optimisation',
    slug: 'on-page-seo-and-content-optimisation',
    description: 'Improve pages, briefs, entities, topical coverage, and content quality.',
    additionalToolIds: ['screpy', 'semrush', 'screaming-frog-seo-spider'],
    tools: [
      tool('Surfer', 'https://surferseo.com/', 'https://surferseo.com/pricing/', 'Content editor and optimisation workflows based on SERPs.', '$99/mo', 'monthly', '7-day money-back guarantee'),
      tool('Clearscope', 'https://www.clearscope.io/', 'https://www.clearscope.io/pricing', 'Premium content optimisation and topical relevance scoring.', '$129/mo', 'monthly', 'Demo available'),
      tool('Frase', 'https://www.frase.io/', 'https://www.frase.io/pricing', 'SERP research, content briefs, writing, and optimisation.', 'See website', 'varies', 'See pricing page'),
      tool('MarketMuse', 'https://www.marketmuse.com/', 'https://www.marketmuse.com/pricing/', 'Content inventory, topical modelling, and planning.', 'See website', 'varies', 'See pricing page'),
      tool('NeuronWriter', 'https://neuronwriter.com/', 'https://neuronwriter.com/pricing', 'Content editor, NLP recommendations, and planning.', '$23/mo', 'monthly', 'Free trial'),
      tool('Page Optimizer Pro', 'https://pageoptimizer.pro/', 'https://pageoptimizer.pro/pricing/', 'On-page recommendations based on ranking-page analysis.', 'See website', 'varies', 'See pricing page'),
      tool('Dashword', 'https://www.dashword.com/', 'https://www.dashword.com/pricing', 'Content briefs, optimisation reports, and monitoring.', '$99/mo', 'monthly', 'Free trial'),
      tool('Content Harmony', 'https://www.contentharmony.com/', 'https://www.contentharmony.com/pricing/', 'Research workflows and content briefs for SEO teams.', 'See website', 'varies', 'See pricing page'),
      tool('SEObase', 'https://seobase.com/', 'https://seobase.com/pricing', 'On-page analysis, keyword research, and content tools.', 'See website', 'varies', 'See pricing page'),
      tool('SEOTesting', 'https://seotesting.com/', 'https://seotesting.com/pricing/', 'SEO split tests, annotation, and Search Console insights.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'AI SEO and content creation',
    slug: 'ai-seo-and-content-creation',
    description: 'Generate, refresh, optimise, and scale SEO content with editorial control.',
    additionalToolIds: ['screpy'],
    tools: [
      tool('Jasper', 'https://www.jasper.ai/', 'https://www.jasper.ai/pricing', 'AI content platform for marketing teams and workflows.', '$69/mo', 'monthly', '7-day free trial'),
      tool('Writesonic', 'https://writesonic.com/', 'https://writesonic.com/pricing', 'AI writing, SEO articles, and content research tools.', '$79/mo', 'monthly', 'Free plan'),
      tool('Copy.ai', 'https://www.copy.ai/', 'https://www.copy.ai/pricing', 'AI copywriting and workflow automation for teams.', '$29/mo', 'monthly', 'Free plan'),
      tool('Scalenut', 'https://www.scalenut.com/', 'https://www.scalenut.com/pricing', 'AI content planning, writing, and optimisation suite.', '$59/mo', 'monthly', '7-day free trial'),
      tool('Outranking', 'https://www.outranking.io/', 'https://www.outranking.io/pricing', 'AI SEO strategy, briefs, and content optimisation.', 'See website', 'varies', 'See pricing page'),
      tool('Koala', 'https://koala.sh/', 'https://koala.sh/pricing', 'AI writing and chatbot tools for publishers.', '$9/mo', 'monthly', 'Free trial'),
      tool('SEOWriting.ai', 'https://seowriting.ai/', 'https://seowriting.ai/pricing', 'SEO-focused AI articles and image generation.', 'See website', 'varies', 'See pricing page'),
      tool('Content at Scale', 'https://contentatscale.ai/', 'https://contentatscale.ai/pricing/', 'Long-form AI writing and content optimisation workflows.', 'See website', 'varies', 'See pricing page'),
      tool('RankIQ', 'https://www.rankiq.com/', 'https://www.rankiq.com/pricing', 'Keyword libraries and AI content optimisation for bloggers.', '$49/mo', 'monthly', 'Free trial'),
      tool('Anyword', 'https://anyword.com/', 'https://anyword.com/pricing/', 'AI copywriting with performance prediction.', '$49/mo', 'monthly', '7-day free trial'),
    ],
  },
  {
    title: 'Backlink research and link building',
    slug: 'backlink-research-and-link-building',
    description: 'Analyse backlink profiles, discover prospects, and manage link campaigns.',
    additionalToolIds: ['semrush', 'ahrefs', 'serpstat'],
    tools: [
      tool('Majestic', 'https://majestic.com/', 'https://majestic.com/plans', 'Backlink index, link metrics, and competitor research.', 'See website', 'varies', 'See pricing page'),
      tool('cognitiveSEO', 'https://cognitiveseo.com/', 'https://cognitiveseo.com/pricing/', 'Backlink analysis, unnatural link detection, and tracking.', 'See website', 'varies', 'See pricing page'),
      tool('LinkResearchTools', 'https://www.linkresearchtools.com/', 'https://www.linkresearchtools.com/pricing/', 'Enterprise backlink analysis and link-risk workflows.', 'See website', 'varies', 'See pricing page'),
      tool('Monitor Backlinks', 'https://monitorbacklinks.com/', 'https://monitorbacklinks.com/pricing', 'Backlink monitoring, competitor links, and disavow support.', '$29/mo', 'monthly', '30-day free trial'),
      tool('Linkody', 'https://www.linkody.com/', 'https://www.linkody.com/pricing', 'Backlink tracking, competitor monitoring, and reporting.', 'See website', 'varies', 'See pricing page'),
      tool('BuzzStream', 'https://www.buzzstream.com/', 'https://www.buzzstream.com/pricing', 'Link prospecting, outreach, and digital PR relationship management.', 'See website', 'varies', 'See pricing page'),
      tool('Pitchbox', 'https://pitchbox.com/', 'https://pitchbox.com/pricing/', 'Enterprise outreach, prospecting, and campaign automation.', 'See website', 'varies', 'See pricing page'),
      tool('Respona', 'https://respona.com/', 'https://respona.com/pricing/', 'AI-assisted link-building and PR outreach campaigns.', 'See website', 'varies', 'See pricing page'),
      tool('Postaga', 'https://postaga.co/', 'https://postaga.co/pricing/', 'Outreach automation and link-building campaign ideas.', 'See website', 'varies', 'See pricing page'),
      tool('HARO Connectively', 'https://www.connectively.us/', 'https://www.connectively.us/pricing', 'Source-journalist matching for earned media opportunities.', 'Free', 'free plan', 'Free plan'),
    ],
  },
  {
    title: 'Digital PR and outreach',
    slug: 'digital-pr-and-outreach',
    description: 'Find journalists, distribute stories, and run scalable outreach campaigns.',
    tools: [
      tool('Snov.io', 'https://snov.io/', 'https://snov.io/pricing', 'Prospecting, email verification, and outreach sequences.', '$39/mo', 'monthly', 'Free plan'),
      tool('lemlist', 'https://www.lemlist.com/', 'https://www.lemlist.com/pricing', 'Personalised cold email and multichannel outreach.', '$69/mo', 'monthly', '14-day free trial'),
      tool('Mailshake', 'https://mailshake.com/', 'https://mailshake.com/pricing', 'Sales and PR email outreach with automation.', '$29/mo', 'annual billing', '30-day money-back guarantee'),
      tool('NinjaOutreach', 'https://ninjaoutreach.com/', 'https://ninjaoutreach.com/pricing/', 'Influencer discovery, prospecting, and outreach.', 'See website', 'varies', 'See pricing page'),
      tool('JustReachOut', 'https://justreachout.io/', 'https://justreachout.io/pricing/', 'PR pitching, media prospecting, and backlink outreach.', '$98/mo', 'annual billing', 'Free trial'),
      tool('Prowly', 'https://prowly.com/', 'https://prowly.com/pricing/', 'PR CRM, media database, newsroom, and distribution.', 'See website', 'varies', 'See pricing page'),
      tool('Muck Rack', 'https://muckrack.com/', 'https://muckrack.com/pricing', 'Media relations platform and journalist database.', 'Custom', 'quote-based', 'Demo available'),
      tool('Cision', 'https://www.cision.com/', 'https://www.cision.com/pricing/', 'PR distribution, monitoring, and media intelligence.', 'Custom', 'quote-based', 'Demo available'),
      tool('Meltwater', 'https://www.meltwater.com/', 'https://www.meltwater.com/pricing', 'Media monitoring, social intelligence, and PR workflows.', 'Custom', 'quote-based', 'Demo available'),
      tool('Prezly', 'https://www.prezly.com/', 'https://www.prezly.com/pricing/', 'PR CRM, newsroom, and story publishing platform.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Local SEO and map visibility',
    slug: 'local-seo-and-map-visibility',
    description: 'Manage listings, monitor map packs, and improve local search presence.',
    additionalToolIds: ['screpy'],
    tools: [
      tool('BrightLocal', 'https://www.brightlocal.com/', 'https://www.brightlocal.com/pricing/', 'Local rank tracking, citations, audits, and reputation management.', 'Custom', 'quote-based', 'Free trial'),
      tool('Whitespark', 'https://whitespark.ca/', 'https://whitespark.ca/pricing/', 'Local SEO, citation building, rank tracking, and review tools.', '$20/mo', 'monthly', 'Free trial'),
      tool('Local Falcon', 'https://www.localfalcon.com/', 'https://www.localfalcon.com/pricing/', 'Google Maps grid ranking and local competitor visibility.', '$24.99/mo', 'monthly', 'Free trial'),
      tool('Local Viking', 'https://localviking.com/', 'https://localviking.com/pricing/', 'Google Business Profile management and map rank grids.', 'See website', 'varies', 'See pricing page'),
      tool('GeoRanker', 'https://georanker.com/', 'https://georanker.com/pricing', 'Local rank tracking, SERP data, and citation research.', '$99/mo', 'monthly', 'Free trial'),
      tool('Places Scout', 'https://placesscout.com/', 'https://placesscout.com/pricing/', 'Local rank tracking, citation analysis, and reporting.', 'See website', 'varies', 'See pricing page'),
      tool('Yext', 'https://www.yext.com/', 'https://www.yext.com/pricing/', 'Listings, knowledge management, reviews, and local pages.', 'Custom', 'quote-based', 'Demo available'),
      tool('Uberall', 'https://uberall.com/', 'https://uberall.com/pricing/', 'Location marketing, listings, reputation, and local engagement.', 'Custom', 'quote-based', 'Demo available'),
      tool('Moz Local', 'https://moz.com/products/local', 'https://moz.com/products/local/pricing', 'Business listing distribution and local presence management.', '$20/mo', 'monthly', 'Free trial'),
      tool('Grid My Business', 'https://gridmybusiness.com/', 'https://gridmybusiness.com/pricing/', 'Local map grid scans and Google Business Profile tracking.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Schema and structured data',
    slug: 'schema-and-structured-data',
    description: 'Create, validate, manage, and monitor rich-result markup.',
    additionalToolIds: ['screpy'],
    tools: [
      tool('Schema App', 'https://www.schemaapp.com/', 'https://www.schemaapp.com/pricing/', 'Enterprise schema markup management and analytics.', 'Custom', 'quote-based', 'Demo available'),
      tool('WordLift', 'https://wordlift.io/', 'https://wordlift.io/pricing/', 'AI-powered schema, knowledge graph, and semantic SEO.', 'See website', 'varies', 'See pricing page'),
      tool('Rank Math Pro', 'https://rankmath.com/', 'https://rankmath.com/pricing/', 'WordPress SEO plugin with schema and content features.', '$6.99/mo', 'annual billing', 'Free version'),
      tool('Yoast SEO Premium', 'https://yoast.com/', 'https://yoast.com/wordpress/plugins/seo/', 'WordPress SEO plugin with structured data controls.', 'See website', 'varies', 'See pricing page'),
      tool('Schema Pro', 'https://wpschema.com/', 'https://wpschema.com/pricing/', 'WordPress schema markup plugin and templates.', '$6.58/mo', 'annual billing', 'Free trial'),
      tool('All in One SEO', 'https://aioseo.com/', 'https://aioseo.com/pricing/', 'WordPress SEO suite with schema, sitemaps, and audits.', 'See website', 'varies', 'See pricing page'),
      tool('Merkle Schema Markup Generator', 'https://www.merkle.com/', 'https://technicalseo.com/tools/schema-markup-generator/', 'Generate common JSON-LD schema markup.', 'Free', 'free tool', 'Free tool'),
      tool('Google Rich Results Test', 'https://search.google.com/test/rich-results', 'https://search.google.com/test/rich-results', 'Test pages and code for Google rich-result eligibility.', 'Free', 'free tool', 'Free tool'),
      tool('Schema.org Validator', 'https://validator.schema.org/', 'https://validator.schema.org/', 'Validate Schema.org vocabulary and structured-data syntax.', 'Free', 'free tool', 'Free tool'),
      tool('Hall Analysis Schema Markup Validator', 'https://www.hallanalysis.com/', 'https://www.hallanalysis.com/json-ld-generator/', 'Generate and inspect JSON-LD markup.', 'Free', 'free tool', 'Free tool'),
    ],
  },
  {
    title: 'Core Web Vitals and site speed',
    slug: 'core-web-vitals-and-site-speed',
    description: 'Measure field and lab performance, regressions, and user experience.',
    additionalToolIds: ['screpy'],
    tools: [
      tool('DebugBear', 'https://www.debugbear.com/', 'https://www.debugbear.com/pricing', 'Continuous Lighthouse, Core Web Vitals, and RUM monitoring.', 'See website', 'varies', 'See pricing page'),
      tool('SpeedCurve', 'https://speedcurve.com/', 'https://speedcurve.com/pricing/', 'Performance budgets, synthetic tests, and real user monitoring.', '$90/mo', 'monthly', 'Free trial'),
      tool('Calibre', 'https://calibreapp.com/', 'https://calibreapp.com/pricing', 'Website performance monitoring and deployment alerts.', '$75/mo', 'monthly', 'Free trial'),
      tool('Treo Site Speed', 'https://treo.sh/', 'https://treo.sh/pricing', 'Performance monitoring, RUM, and SEO reporting.', '$75/mo', 'annual billing', 'Free plan'),
      tool('RUMvision', 'https://www.rumvision.com/', 'https://www.rumvision.com/pricing/', 'Core Web Vitals monitoring from real-user data.', 'See website', 'varies', 'See pricing page'),
      tool('GTmetrix', 'https://gtmetrix.com/', 'https://gtmetrix.com/pricing.html', 'Lab performance testing, historical tracking, and alerts.', 'See website', 'varies', 'See pricing page'),
      tool('WebPageTest', 'https://www.webpagetest.org/', 'https://www.webpagetest.org/', 'Advanced browser performance testing and visual waterfalls.', 'Free', 'free tool', 'Free tool'),
      tool('PageSpeed Insights', 'https://pagespeed.web.dev/', 'https://pagespeed.web.dev/', 'Google lab and field Core Web Vitals diagnostics.', 'Free', 'free tool', 'Free tool'),
      tool('Lighthouse', 'https://developer.chrome.com/docs/lighthouse/', 'https://developer.chrome.com/docs/lighthouse/', 'Open-source audits for performance, accessibility, and SEO.', 'Free', 'open source', 'Free tool'),
      tool('Chrome UX Report', 'https://developer.chrome.com/docs/crux/', 'https://developer.chrome.com/docs/crux/', 'Google field data for real-user web experience.', 'Free', 'free dataset', 'Free tool'),
    ],
  },
  {
    title: 'Web analytics and search data',
    slug: 'web-analytics-and-search-data',
    description: 'Understand organic traffic, search demand, visitor behaviour, and conversions.',
    tools: [
      tool('Google Search Console', 'https://search.google.com/search-console/', 'https://search.google.com/search-console/', 'Google search performance, indexing, and enhancement reports.', 'Free', 'free tool', 'Free tool'),
      tool('Google Analytics', 'https://analytics.google.com/', 'https://marketingplatform.google.com/about/analytics/', 'Website traffic, conversion, and audience analytics.', 'Free', 'free plan', 'Free standard plan'),
      tool('Bing Webmaster Tools', 'https://www.bing.com/webmasters/', 'https://www.bing.com/webmasters/', 'Bing search performance, indexing, and SEO reports.', 'Free', 'free tool', 'Free tool'),
      tool('Microsoft Clarity', 'https://clarity.microsoft.com/', 'https://clarity.microsoft.com/', 'Session recordings, heatmaps, and behavioural insights.', 'Free', 'free tool', 'Free tool'),
      tool('Plausible', 'https://plausible.io/', 'https://plausible.io/pricing', 'Privacy-friendly, lightweight web analytics.', 'See website', 'varies', 'See pricing page'),
      tool('Fathom Analytics', 'https://usefathom.com/', 'https://usefathom.com/pricing', 'Simple privacy-focused website analytics.', '$15/mo', 'monthly', '30-day free trial'),
      tool('Matomo', 'https://matomo.org/', 'https://matomo.org/pricing/', 'Open-source or hosted privacy analytics platform.', 'See website', 'varies', 'See pricing page'),
      tool('Clicky', 'https://clicky.com/', 'https://clicky.com/pricing', 'Real-time web analytics and heatmaps.', 'See website', 'varies', 'See pricing page'),
      tool('Simple Analytics', 'https://www.simpleanalytics.com/', 'https://www.simpleanalytics.com/pricing', 'Privacy-first website analytics and event tracking.', '$20/mo', 'monthly', '14-day free trial'),
      tool('Statcounter', 'https://statcounter.com/', 'https://statcounter.com/pricing/', 'Website traffic statistics and visitor behaviour analytics.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Log analysis and observability',
    slug: 'log-analysis-and-observability',
    description: 'Inspect crawler behaviour, server events, errors, and log data at scale.',
    tools: [
      tool('Screaming Frog Log File Analyser', 'https://www.screamingfrog.co.uk/log-file-analyser/', 'https://www.screamingfrog.co.uk/log-file-analyser/pricing/', 'Desktop log-file analysis for Googlebot and server activity.', '£259/year', 'annual licence', 'Free trial'),
      tool('Elastic Cloud', 'https://www.elastic.co/cloud/', 'https://www.elastic.co/pricing/', 'Hosted search, log analytics, and observability stack.', 'See website', 'varies', 'See pricing page'),
      tool('Sematext Logs', 'https://sematext.com/logs/', 'https://sematext.com/pricing/', 'Cloud log management and searchable operational dashboards.', 'See website', 'varies', 'See pricing page'),
      tool('Logz.io', 'https://logz.io/', 'https://logz.io/pricing/', 'Observability platform for logs, metrics, and traces.', 'See website', 'varies', 'See pricing page'),
      tool('Splunk Cloud', 'https://www.splunk.com/', 'https://www.splunk.com/en_us/products/pricing.html', 'Enterprise log search, security, and observability.', 'See website', 'varies', 'See pricing page'),
      tool('Papertrail', 'https://www.papertrail.com/', 'https://www.papertrail.com/plans', 'Hosted log aggregation and search.', '$5/mo', 'monthly', 'Free plan'),
      tool('Coralogix', 'https://coralogix.com/', 'https://coralogix.com/pricing/', 'Cloud observability for logs, metrics, traces, and security.', 'Usage-based', 'usage-based', 'Free tier'),
      tool('Loggly', 'https://www.loggly.com/', 'https://www.loggly.com/pricing/', 'Cloud log management and analysis.', 'See website', 'varies', 'See pricing page'),
      tool('Graylog', 'https://graylog.org/', 'https://graylog.org/pricing/', 'Centralised log management and security analytics.', 'See website', 'varies', 'See pricing page'),
      tool('Better Stack', 'https://betterstack.com/', 'https://betterstack.com/pricing', 'Logs, uptime monitoring, incident response, and dashboards.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'SEO reporting and dashboards',
    slug: 'seo-reporting-and-dashboards',
    description: 'Turn SEO, paid, and analytics data into client-ready dashboards and reports.',
    additionalToolIds: ['screpy', 'se-ranking'],
    tools: [
      tool('Looker Studio', 'https://lookerstudio.google.com/', 'https://lookerstudio.google.com/', 'Free Google dashboards for Search Console, Analytics, and more.', 'Free', 'free tool', 'Free tool'),
      tool('AgencyAnalytics', 'https://agencyanalytics.com/', 'https://agencyanalytics.com/pricing', 'Agency dashboards, client portals, and automated reports.', 'See website', 'varies', 'See pricing page'),
      tool('DashThis', 'https://dashthis.com/', 'https://dashthis.com/pricing/', 'Automated marketing dashboards and client reports.', '$44/mo', 'annual billing', '15-day free trial'),
      tool('ReportGarden', 'https://reportgarden.com/', 'https://reportgarden.com/pricing/', 'Marketing reporting, client management, and proposals.', '$75/mo', 'monthly', '14-day free trial'),
      tool('Swydo', 'https://www.swydo.com/', 'https://www.swydo.com/pricing/', 'Automated marketing reports and dashboards.', '$69/mo', 'monthly', '14-day free trial'),
      tool('Whatagraph', 'https://www.whatagraph.com/', 'https://www.whatagraph.com/pricing', 'Cross-channel marketing reporting and data automation.', 'See website', 'varies', 'See pricing page'),
      tool('Databox', 'https://databox.com/', 'https://databox.com/pricing', 'Business dashboards, metrics, and performance alerts.', '$64/mo', 'monthly', 'Free plan'),
      tool('Klipfolio', 'https://www.klipfolio.com/', 'https://www.klipfolio.com/pricing', 'Custom KPI dashboards and data visualisation.', '$120/mo', 'monthly', '14-day free trial'),
      tool('Supermetrics', 'https://supermetrics.com/', 'https://supermetrics.com/pricing', 'Marketing data connectors and reporting automation.', 'See website', 'varies', 'See pricing page'),
      tool('Oviond', 'https://www.oviond.com/', 'https://www.oviond.com/pricing', 'White-label marketing dashboards and reporting.', '$39/mo', 'monthly', '14-day free trial'),
    ],
  },
  {
    title: 'E-commerce and marketplace SEO',
    slug: 'e-commerce-and-marketplace-seo',
    description: 'Research marketplace demand, improve product listings, and monitor commerce search.',
    tools: [
      tool('Helium 10', 'https://www.helium10.com/', 'https://www.helium10.com/pricing/', 'Amazon keyword research, listing optimisation, and operations.', '$100/mo', 'monthly', 'Free plan'),
      tool('Jungle Scout', 'https://www.junglescout.com/', 'https://www.junglescout.com/pricing/', 'Amazon product research, keywords, and listing optimisation.', '$49/mo', 'monthly', '7-day money-back guarantee'),
      tool('DataHawk', 'https://datahawk.co/', 'https://datahawk.co/pricing', 'Marketplace analytics and SEO for Amazon and Walmart.', 'See website', 'varies', 'See pricing page'),
      tool('SellerApp', 'https://www.sellerapp.com/', 'https://www.sellerapp.com/pricing/', 'Amazon intelligence, PPC, and listing optimisation.', '$29/mo', 'monthly', 'Free plan'),
      tool('AMZScout', 'https://amzscout.net/', 'https://amzscout.net/pricing/', 'Amazon product research, keyword tools, and extensions.', 'See website', 'varies', 'See pricing page'),
      tool('SellerSprite', 'https://www.sellersprite.com/', 'https://www.sellersprite.com/pricing', 'Amazon research, keyword tracking, and product intelligence.', 'See website', 'varies', 'See pricing page'),
      tool('MerchantWords', 'https://www.merchantwords.com/', 'https://www.merchantwords.com/pricing', 'Amazon shopper keyword research and search volume data.', 'See website', 'varies', 'See pricing page'),
      tool('eRank', 'https://erank.com/', 'https://erank.com/pricing', 'Etsy keyword, listing, and shop SEO research.', '$5.99/mo', 'monthly', 'Free plan'),
      tool('Marmalead', 'https://marmalead.com/', 'https://marmalead.com/pricing/', 'Etsy SEO, keyword research, and listing insights.', '$19/mo', 'monthly', 'Free trial'),
      tool('EverBee', 'https://everbee.io/', 'https://everbee.io/pricing', 'Etsy product research, analytics, and keyword tools.', '$19.99/mo', 'monthly', 'Free plan'),
    ],
  },
  {
    title: 'International SEO and localisation',
    slug: 'international-seo-and-localisation',
    description: 'Translate, localise, and manage multilingual websites for international search.',
    tools: [
      tool('Weglot', 'https://weglot.com/', 'https://weglot.com/pricing/', 'Website translation and multilingual SEO delivery.', '$17/mo', 'monthly', '10-day free trial'),
      tool('Lokalise', 'https://lokalise.com/', 'https://lokalise.com/pricing/', 'Translation management for product and website teams.', '$144/mo', 'monthly', 'Free trial'),
      tool('Crowdin', 'https://crowdin.com/', 'https://crowdin.com/pricing', 'Localisation platform for software, content, and websites.', 'See website', 'varies', 'See pricing page'),
      tool('Transifex', 'https://www.transifex.com/', 'https://www.transifex.com/pricing/', 'Translation management and multilingual content workflows.', 'See website', 'varies', 'See pricing page'),
      tool('Smartling', 'https://www.smartling.com/', 'https://www.smartling.com/pricing/', 'Enterprise translation and localisation automation.', 'Custom', 'quote-based', 'Demo available'),
      tool('Phrase', 'https://phrase.com/', 'https://phrase.com/pricing/', 'Localisation platform, translation memory, and automation.', 'See website', 'varies', 'See pricing page'),
      tool('TranslatePress', 'https://translatepress.com/', 'https://translatepress.com/pricing/', 'WordPress translation plugin with multilingual SEO controls.', 'See website', 'varies', 'See pricing page'),
      tool('WPML', 'https://wpml.org/', 'https://wpml.org/purchase/', 'WordPress multilingual content and translation plugin.', '€39/year', 'annual licence', 'No free plan'),
      tool('ConveyThis', 'https://www.conveythis.com/', 'https://www.conveythis.com/pricing/', 'No-code website translation and language management.', '$12/mo', 'monthly', 'Free plan'),
      tool('DeepL', 'https://www.deepl.com/', 'https://www.deepl.com/pro', 'AI translation for multilingual content workflows.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Image and video SEO',
    slug: 'image-and-video-seo',
    description: 'Optimise media performance, discoverability, metadata, and platform search.',
    additionalToolIds: ['screpy'],
    tools: [
      tool('Cloudinary', 'https://cloudinary.com/', 'https://cloudinary.com/pricing', 'Image and video optimisation, delivery, and media management.', '$99/mo', 'monthly', 'Free plan'),
      tool('ShortPixel', 'https://shortpixel.com/', 'https://shortpixel.com/pricing', 'Image compression, WebP delivery, and WordPress optimisation.', 'See website', 'varies', 'See pricing page'),
      tool('Imagify', 'https://imagify.io/', 'https://imagify.io/pricing/', 'Image optimisation and next-gen format conversion.', '$5/mo', 'monthly', 'Free plan'),
      tool('TinyPNG', 'https://tinypng.com/', 'https://tinypng.com/developers', 'PNG, JPEG, and WebP compression for fast pages.', 'See website', 'varies', 'See pricing page'),
      tool('ImageOptim', 'https://imageoptim.com/', 'https://imageoptim.com/api', 'Mac image compression app and optimisation API.', 'Free', 'open source', 'Free desktop app'),
      tool('Squoosh', 'https://squoosh.app/', 'https://squoosh.app/', 'Browser-based image compression and format conversion.', 'Free', 'open source', 'Free tool'),
      tool('TubeBuddy', 'https://www.tubebuddy.com/', 'https://www.tubebuddy.com/pricing', 'YouTube keyword research, metadata, and channel optimisation.', 'See website', 'varies', 'See pricing page'),
      tool('vidIQ', 'https://vidiq.com/', 'https://vidiq.com/pricing/', 'YouTube keyword, competitor, and content research.', '$39/mo', 'monthly', 'Free plan'),
      tool('Morningfame', 'https://morningfa.me/', 'https://morningfa.me/pricing', 'YouTube SEO guidance, keywords, and channel analytics.', 'See website', 'varies', 'See pricing page'),
      tool('Canva', 'https://www.canva.com/', 'https://www.canva.com/pricing/', 'Visual content production for images, video, and social search.', 'See website', 'varies', 'See pricing page'),
    ],
  },
  {
    title: 'Free search-engine tools',
    slug: 'free-search-engine-tools',
    description: 'Use first-party tools and free utilities directly from major search platforms.',
    tools: [
      tool('Google Trends', 'https://trends.google.com/', 'https://trends.google.com/', 'Compare search interest, seasonality, and related topics.', 'Free', 'free tool', 'Free tool'),
      tool('Google Keyword Planner', 'https://ads.google.com/home/tools/keyword-planner/', 'https://ads.google.com/home/tools/keyword-planner/', 'Google Ads keyword ideas and demand estimates.', 'Free', 'free tool', 'Free with Google Ads account'),
      tool('Google Ads Preview Tool', 'https://ads.google.com/', 'https://support.google.com/google-ads/answer/148778', 'Preview Google results without influencing ad impressions.', 'Free', 'free tool', 'Free with Google Ads account'),
      tool('Google Merchant Center', 'https://merchants.google.com/', 'https://support.google.com/merchants/answer/188924', 'Manage product data for Google Shopping and free listings.', 'Free', 'free tool', 'Free standard account'),
      tool('Google Search Status Dashboard', 'https://status.search.google.com/', 'https://status.search.google.com/', 'Check known Google Search indexing and serving incidents.', 'Free', 'free tool', 'Free tool'),
      tool('Google Indexing API', 'https://developers.google.com/search/apis/indexing-api/v3/quickstart', 'https://developers.google.com/search/apis/indexing-api/v3/quickstart', 'Notify Google about eligible job-posting and livestream URLs.', 'Free', 'API', 'Free API for eligible content'),
      tool('Bing Keyword Research', 'https://www.bing.com/webmasters/', 'https://www.bing.com/webmasters/help/keyword-research-628070b7', 'Find keyword demand and suggestions from Bing data.', 'Free', 'free tool', 'Free Bing Webmaster Tools account'),
      tool('Yandex Webmaster', 'https://webmaster.yandex.com/', 'https://yandex.com/support/webmaster/', 'Monitor Yandex indexing, search traffic, and site quality.', 'Free', 'free tool', 'Free tool'),
      tool('Baidu Webmaster Platform', 'https://ziyuan.baidu.com/', 'https://ziyuan.baidu.com/', 'Submit and monitor sites for Baidu search.', 'Free', 'free tool', 'Free tool'),
      tool('Ahrefs Webmaster Tools', 'https://ahrefs.com/webmaster-tools', 'https://ahrefs.com/webmaster-tools', 'Free verified-site audits, backlinks, and organic keyword data.', 'Free', 'free tool', 'Free for verified sites'),
    ],
  },
  {
    title: 'Uptime and website monitoring',
    slug: 'uptime-and-website-monitoring',
    description: 'Track availability, outages, page changes, and critical website health signals.',
    tools: [],
    additionalToolIds: ['screpy', 'contentking', 'hexometer', 'better-stack'],
  },
  {
    title: 'SEO browser extensions',
    slug: 'seo-browser-extensions',
    description: 'Run quick on-page checks, inspect SERPs, and research keywords directly in the browser.',
    tools: [],
    additionalToolIds: ['screpy', 'ahrefs', 'moz-pro', 'similarweb', 'lighthouse'],
  },
  {
    title: 'SEO validators and checkers',
    slug: 'seo-validators-and-checkers',
    description: 'Validate sitemaps, structured data, redirects, metadata, and technical SEO signals.',
    tools: [],
    additionalToolIds: ['screpy', 'screaming-frog-seo-spider', 'google-rich-results-test', 'schema-org-validator', 'lighthouse'],
  },
  {
    title: 'Social media and Open Graph',
    slug: 'social-media-and-open-graph',
    description: 'Preview, validate, and improve social metadata that supports content distribution.',
    tools: [],
  },
]

const researchedToolDefinitions: ResearchedToolDefinition[] = [
  researchedTool('Seodity', 'https://seodity.com/', 'Complete SEO toolkit for growing organic visibility.', ['all-in-one-seo-platforms', 'keyword-research-and-clustering', 'rank-tracking-and-serp-intelligence', 'technical-seo-crawlers-and-audits']),
  researchedTool('Ubersuggest', 'https://neilpatel.com/ubersuggest/', 'SEO suite for keyword ideas, traffic, and competitive research.', ['all-in-one-seo-platforms', 'keyword-research-and-clustering', 'rank-tracking-and-serp-intelligence']),
  researchedTool('SEO PowerSuite', 'https://www.link-assistant.com/', 'Desktop SEO suite for rankings, on-page work, backlinks, and reports.', ['all-in-one-seo-platforms', 'rank-tracking-and-serp-intelligence', 'on-page-seo-and-content-optimisation', 'backlink-research-and-link-building', 'seo-reporting-and-dashboards']),
  researchedTool('SpyFu', 'https://www.spyfu.com/', 'SEO and PPC competitive intelligence with keywords and historical data.', ['all-in-one-seo-platforms', 'keyword-research-and-clustering', 'rank-tracking-and-serp-intelligence', 'backlink-research-and-link-building']),
  researchedTool('BrightEdge', 'https://www.brightedge.com/', 'Enterprise platform for SEO, content optimisation, and competitive analysis.', ['all-in-one-seo-platforms', 'on-page-seo-and-content-optimisation', 'seo-reporting-and-dashboards']),
  researchedTool('Clicks.so', 'https://www.clicks.so/', 'Beginner-friendly SEO research and optimisation platform.', ['all-in-one-seo-platforms', 'keyword-research-and-clustering']),
  researchedTool('SEO Utils', 'https://seoutils.app/', 'Cross-platform desktop application for SEO workflows.', ['all-in-one-seo-platforms', 'technical-seo-crawlers-and-audits']),
  researchedTool('Spexia', 'https://getspexia.com/', 'Content creation and optimisation toolkit for informational and e-commerce sites.', ['all-in-one-seo-platforms', 'on-page-seo-and-content-optimisation', 'e-commerce-and-marketplace-seo']),
  researchedTool('DiagnoSEO', 'https://diagnoseo.com/', 'AI-powered SEO and content marketing tools with a WordPress plugin.', ['all-in-one-seo-platforms', 'on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('Telescope', 'https://withtelescope.com/', 'SEO toolkit for research, audits, rank tracking, and internal-link opportunities.', ['all-in-one-seo-platforms', 'keyword-research-and-clustering', 'rank-tracking-and-serp-intelligence', 'technical-seo-crawlers-and-audits']),
  researchedTool('DAXRM', 'https://www.daxrm.com/', 'Agency CRM for SEO, PPC, reporting, and team collaboration.', ['all-in-one-seo-platforms', 'rank-tracking-and-serp-intelligence', 'seo-reporting-and-dashboards']),
  researchedTool('SEO Toolbox', 'https://seotoolbox.site', 'Page analysis, AI insights, and in-depth SEO report generation.', ['all-in-one-seo-platforms', 'technical-seo-crawlers-and-audits', 'seo-reporting-and-dashboards']),
  researchedTool('Bishopi.io', 'https://www.bishopi.io/', 'Enterprise-grade SEO and domain intelligence platform.', ['all-in-one-seo-platforms', 'keyword-research-and-clustering', 'backlink-research-and-link-building']),
  researchedTool('KeySearch LSI Keyword', 'https://www.keysearch.co/tools/lsi-keywords-generator', 'Generate semantically related keyword ideas for content planning.', ['keyword-research-and-clustering', 'on-page-seo-and-content-optimisation']),
  researchedTool('WordStream', 'https://www.wordstream.com/keywords', 'Discover and prioritise keyword opportunities.', ['keyword-research-and-clustering']),
  researchedTool('Seoformulas', 'https://www.seoformulas.com', 'Find untapped keywords and build SEO research formulas.', ['keyword-research-and-clustering']),
  researchedTool('Serp Miner', 'https://serpminer.com/free-seo-tools', 'Find long-tail keywords from autocomplete and bulk volume data.', ['keyword-research-and-clustering']),
  researchedTool('kwrds.ai', 'https://www.kwrds.ai', 'Find keyword ideas and questions people ask.', ['keyword-research-and-clustering']),
  researchedTool('Keywordideas.xyz', 'https://keywordideas.xyz/', 'Generate keyword suggestions from URLs and Google search data.', ['keyword-research-and-clustering']),
  researchedTool('Long Tail Pro', 'https://longtailpro.com/', 'Keyword research platform focused on long-tail opportunities.', ['keyword-research-and-clustering']),
  researchedTool('BacklinkGPT', 'https://www.backlinkgpt.com/', 'AI-assisted backlink prospecting and personalised outreach.', ['backlink-research-and-link-building', 'digital-pr-and-outreach']),
  researchedTool('YouLinker', 'https://youlinker.pro/', 'Submit products to multiple directories for link acquisition.', ['backlink-research-and-link-building', 'digital-pr-and-outreach']),
  researchedTool('BacklinkScan', 'https://backlinkscan.com/', 'Simple backlink checker for link-profile research.', ['backlink-research-and-link-building']),
  researchedTool('SerpBear', 'https://docs.serpbear.com/', 'Open-source search-engine position tracker.', ['rank-tracking-and-serp-intelligence']),
  researchedTool('SERPWatcher', 'https://serpwatch.io/', 'Rank tracking for marketers and agencies.', ['rank-tracking-and-serp-intelligence']),
  researchedTool("That's Rank!", 'https://www.thatisrank.com/', 'Instant Google keyword-rank monitoring.', ['rank-tracking-and-serp-intelligence']),
  researchedTool('ContentSwift', 'https://github.com/hilmanski/contentswift', 'Open-source content research and optimisation tool for SEO.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('GrowthBar', 'https://www.growthbarseo.com/', 'AI writing and optimisation for SEO-friendly content.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('LSIGraph', 'https://lsigraph.com/', 'Content optimisation with semantic keyword recommendations.', ['on-page-seo-and-content-optimisation']),
  researchedTool('SearchSocket', 'https://searchsocket.com/', 'Free AI suggestions for content aligned with Google guidance.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('BlogBud AI', 'https://blogbud.ai', 'Generate SEO articles and export them to popular CMS platforms.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('GrackerAI', 'https://gracker.ai/', 'AI editorial and programmatic SEO for B2B cybersecurity teams.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('TailorTask', 'https://www.tailortask.ai/solutions/for-seo', 'AI agents for internal linking, outreach, and blog creation.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation', 'digital-pr-and-outreach']),
  researchedTool('SearchAttention', 'https://searchattention.com', 'Optimise content for Google AI Overviews, Perplexity, and SearchGPT.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('AltTextLab', 'https://www.alttextlab.com/', 'Generate accessible, SEO-oriented image alt text with AI.', ['on-page-seo-and-content-optimisation', 'image-and-video-seo', 'ai-seo-and-content-creation']),
  researchedTool('SERPrecon', 'https://www.serprecon.com/', 'Content optimisation from semantic competitive analysis and AI share of voice.', ['on-page-seo-and-content-optimisation', 'rank-tracking-and-serp-intelligence']),
  researchedTool('Hypertxt', 'https://hypertxt.ai', 'Generate deeply researched SEO and GEO content.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('TuxSEO', 'https://tuxseo.com/', 'Automated SEO blog creation for businesses.', ['on-page-seo-and-content-optimisation', 'ai-seo-and-content-creation']),
  researchedTool('SiteAnalyzer', 'https://site-analyzer.pro/', 'Scan websites and inspect detailed page-level SEO data.', ['technical-seo-crawlers-and-audits']),
  researchedTool('Moz On-Page Grader', 'https://moz.com/tools/onpage-grader', 'Analyse individual-page optimisation opportunities.', ['technical-seo-crawlers-and-audits', 'on-page-seo-and-content-optimisation']),
  researchedTool('BROWSEO', 'https://www.browseo.net', 'View a page through a search-engine-style text rendering.', ['technical-seo-crawlers-and-audits', 'on-page-seo-and-content-optimisation']),
  researchedTool('linkok.com', 'https://linkok.com', 'Modern broken-link checker.', ['technical-seo-crawlers-and-audits', 'seo-validators-and-checkers']),
  researchedTool('PressProxy', 'https://pressproxy.io/', 'Serve a blog under a primary domain path with Cloudflare Workers.', ['technical-seo-crawlers-and-audits']),
  researchedTool('Wizardstool', 'https://wizardstool.com/', 'Check sites for broken links.', ['technical-seo-crawlers-and-audits', 'seo-validators-and-checkers']),
  researchedTool('SEOnaut', 'https://seonaut.org', 'Open-source technical SEO auditing tool.', ['technical-seo-crawlers-and-audits']),
  researchedTool('Siteliner', 'https://www.siteliner.com/', 'Find duplicate content, broken links, and quality issues.', ['technical-seo-crawlers-and-audits', 'seo-validators-and-checkers']),
  researchedTool('Black SEO Analyzer', 'https://github.com/sethblack/black-seo-analyzer', 'Command-line SEO analysis for search and AI discovery.', ['technical-seo-crawlers-and-audits']),
  researchedTool('Python SEO Analyzer', 'https://github.com/sethblack/python-seo-analyzer', 'Open-source crawler and technical SEO analyser.', ['technical-seo-crawlers-and-audits']),
  researchedTool('Server-side Rendering Checker', 'https://www.crawlably.com/ssr-checker/', 'Compare server-rendered and browser-rendered page output.', ['technical-seo-crawlers-and-audits', 'seo-validators-and-checkers']),
  researchedTool('LibreCrawl', 'https://librecrawl.com/', 'Open-source crawler with JavaScript rendering and unlimited URL crawling.', ['technical-seo-crawlers-and-audits']),
  researchedTool('SEO Gets', 'https://seogets.com/', 'Privacy-focused search analytics for agencies and affiliates.', ['web-analytics-and-search-data', 'seo-reporting-and-dashboards']),
  researchedTool('SEO Minion', 'https://chrome.google.com/webstore/detail/seo-minion/giihipjfimkajhlcilipnjeohabimjhi', 'Browser tools for on-page analysis, links, and SERP previews.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation', 'seo-validators-and-checkers']),
  researchedTool('SEOquake', 'https://www.seoquake.com/index.html', 'Browser SEO toolbox with page and SERP metrics.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation']),
  researchedTool('Woorank', 'https://www.woorank.com/', 'Website review platform for practical SEO improvements.', ['seo-browser-extensions', 'technical-seo-crawlers-and-audits']),
  researchedTool('Keyword Surfer', 'https://surferseo.com/keyword-surfer-extension/', 'Chrome keyword and content research extension.', ['seo-browser-extensions', 'keyword-research-and-clustering']),
  researchedTool('MozBar', 'https://moz.com/products/pro/seo-toolbar', 'Browser toolbar for instant page and SERP metrics.', ['seo-browser-extensions', 'rank-tracking-and-serp-intelligence']),
  researchedTool('Ahrefs SEO Toolbar', 'https://chrome.google.com/webstore/detail/ahrefs-seo-toolbar-on-pag/hgmoccdbjhknikckedaaebbpdeebhiei', 'Extension for on-page reports, links, redirects, and country SERPs.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation', 'seo-validators-and-checkers']),
  researchedTool('Redirect Path', 'https://chrome.google.com/webstore/detail/redirect-path/aomidfkchockcldhbkggjokdkkebmdll', 'Browser redirect and HTTP-header checker.', ['seo-browser-extensions', 'seo-validators-and-checkers']),
  researchedTool('META SEO Inspector', 'https://chrome.google.com/webstore/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef', 'Inspect page metadata and surface SEO issues.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation', 'seo-validators-and-checkers']),
  researchedTool('MST SERP Counter', 'https://chrome.google.com/webstore/detail/mst-serp-counter-seo-free/dgpekiojagcbjhgfpmmngnkchekcfifn', 'Show position numbers directly in Google search results.', ['seo-browser-extensions', 'rank-tracking-and-serp-intelligence']),
  researchedTool('TextOptimizer', 'https://chrome.google.com/webstore/detail/textoptimizer/fdbbkmpdjmpnebmdgbhcodhlafiicnkd', 'Extract relevant terms and intent cues from search results.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation']),
  researchedTool('SEO Search Simulator', 'https://chrome.google.com/webstore/detail/seo-search-simulator-by-n/edfjfgjklednkencfhnokmkajbgfhpon', 'Emulate Google searches by location and check top-100 rankings.', ['seo-browser-extensions', 'rank-tracking-and-serp-intelligence']),
  researchedTool('BuzzSumo', 'https://buzzsumo.com/', 'Content research, link analysis, and social media intelligence.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation', 'digital-pr-and-outreach', 'social-media-and-open-graph']),
  researchedTool('Checkbot', 'https://www.checkbot.io/', 'Browser crawler for common SEO, speed, and security checks.', ['seo-browser-extensions', 'technical-seo-crawlers-and-audits', 'seo-validators-and-checkers']),
  researchedTool('SEO Sidebar', 'https://chromewebstore.google.com/detail/seo-sidebar/gmmiickdcmghfpliaiefhjafccapgmpp', 'Persistent browser side panel with real-time on-page SEO data.', ['seo-browser-extensions', 'on-page-seo-and-content-optimisation']),
  researchedTool('Broken Link Checker', 'https://www.brokenlinkcheck.com/', 'Find and report broken links on a website.', ['seo-validators-and-checkers', 'technical-seo-crawlers-and-audits']),
  researchedTool('Robots.txt Checker', 'https://support.google.com/webmasters/answer/6062598', 'Check robots.txt syntax and rules.', ['seo-validators-and-checkers', 'technical-seo-crawlers-and-audits']),
  researchedTool('XML Sitemap Checker', 'https://www.xml-sitemaps.com/validate-xml-sitemap.html', 'Validate XML sitemaps for errors.', ['seo-validators-and-checkers', 'technical-seo-crawlers-and-audits']),
  researchedTool('ShotOG', 'https://github.com/nicepkg/shotog', 'Open-source edge-native Open Graph image generation API.', ['social-media-and-open-graph']),
  researchedTool('ogimg.xyz', 'https://ogimg.xyz/', 'Generate branded Open Graph images programmatically.', ['social-media-and-open-graph']),
  researchedTool('Pingdom', 'https://tools.pingdom.com/', 'Test page load time and performance.', ['core-web-vitals-and-site-speed', 'uptime-and-website-monitoring']),
  researchedTool('GEO/AEO Tracker', 'https://github.com/danishashko/geo-aeo-tracker', 'Open-source dashboard for AI visibility, citations, and competitors.', ['rank-tracking-and-serp-intelligence', 'ai-seo-and-content-creation']),
  researchedTool('Seobility', 'https://www.seobility.net/en/', 'SEO software with crawling, rank tracking, backlinks, and reporting.', ['all-in-one-seo-platforms', 'technical-seo-crawlers-and-audits', 'rank-tracking-and-serp-intelligence', 'backlink-research-and-link-building', 'seo-reporting-and-dashboards']),
  researchedTool('OptimalUX', 'https://optimalux.com/seo-patching', 'Real-time SEO patching and A/B testing.', ['technical-seo-crawlers-and-audits', 'on-page-seo-and-content-optimisation']),
  researchedTool('ContentStudio', 'https://app.contentstudio.io', 'Discover niche content and publish it across social channels.', ['on-page-seo-and-content-optimisation', 'social-media-and-open-graph']),
  researchedTool('Loader.io', 'https://loader.io/', 'Cloud-based load testing for site performance.', ['core-web-vitals-and-site-speed', 'uptime-and-website-monitoring']),
  researchedTool('FAQ Schema Generator', 'https://foxmaya.com/tools/faq-schema-generator', 'Generate FAQ structured-data markup.', ['schema-and-structured-data', 'seo-validators-and-checkers']),
  researchedTool('JSON-LD Schema Markup Generator', 'https://www.jamesdflynn.com/json-ld-schema-generator/', 'Build JSON-LD structured data markup.', ['schema-and-structured-data', 'seo-validators-and-checkers']),
  researchedTool('Open Graph Debugger', 'https://developers.facebook.com/tools/debug/', 'Debug Open Graph metadata before sharing.', ['social-media-and-open-graph', 'seo-validators-and-checkers']),
]

const researchedToolIdsByCategory = new Map<string, string[]>()

for (const researchedToolDefinition of researchedToolDefinitions) {
  for (const categorySlug of researchedToolDefinition.categorySlugs) {
    const toolIds = researchedToolIdsByCategory.get(categorySlug) ?? []
    toolIds.push(researchedToolDefinition.id)
    researchedToolIdsByCategory.set(categorySlug, toolIds)
  }
}

export const awesomeSeoTools = [
  ...new Map(
    awesomeSeoToolCategoryDefinitions
      .flatMap((category) => category.tools)
      .concat(researchedToolDefinitions)
      .map((tool) => [tool.id, tool]),
  ).values(),
]

const toolById = new Map(awesomeSeoTools.map((tool) => [tool.id, tool]))

export const awesomeSeoToolCategories: AwesomeSeoToolCategory[] =
  awesomeSeoToolCategoryDefinitions.map(
    ({ tools, additionalToolIds = [], ...category }) => {
      const toolIds = [
        ...new Set([
          ...tools.map((tool) => tool.id),
          ...additionalToolIds,
          ...(researchedToolIdsByCategory.get(category.slug) ?? []),
        ]),
      ]
      const unknownToolId = toolIds.find((toolId) => !toolById.has(toolId))

      if (unknownToolId) {
        throw new Error(`Unknown awesome SEO tool: ${unknownToolId}`)
      }

      return { ...category, toolIds }
    },
  )

export function getAwesomeSeoToolsForCategory(category: AwesomeSeoToolCategory) {
  return category.toolIds.map((toolId) => toolById.get(toolId)!)
}

export const awesomeSeoToolCount = awesomeSeoTools.length

export { pricingVerifiedAt }
