// Central content registry. Update this file to change public-facing content,
// contact details, market copy, tools, and media without touching components.
export const company = {
  shortName: 'CEP',
  name: 'CEP Construction Estimation Partner LLC',
  email: 'cepestimationllc@gmail.com',
  phone: '+1 5056449848',
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM (multiple time zones supported)',
  markets: ['United States', 'Canada', 'Australia'],
}

export const siteMedia = {
  heroVideo: 'https://cdn.coverr.co/videos/coverr-construction-site-aerial-4632/1080p.mp4',
  heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=85&w=1800&auto=format&fit=crop',
  portfolioImages: {
    residential: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1100&auto=format&fit=crop',
    commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1100&auto=format&fit=crop',
    industrial: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=85&w=1100&auto=format&fit=crop',
    renovation: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1100&auto=format&fit=crop',
  },
}

export const softwareTools = [
  { name: 'Bluebeam Revu', description: 'Digital plan review and markups' },
  { name: 'PlanSwift', description: 'Trade-aware quantity takeoffs' },
  { name: 'Microsoft Excel', description: 'Transparent estimate workbooks' },
  { name: 'PDF Plan Sets', description: 'Structured drawing review workflows' },
]

export const estimateCalculatorRates = {
  'New Construction': { low: 145, high: 280 },
  Renovation: { low: 95, high: 230 },
  Addition: { low: 130, high: 260 },
  'Tenant Improvement': { low: 85, high: 190 },
  Other: { low: 100, high: 220 },
}
