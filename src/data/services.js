// Edit this file to change service names, descriptions, or add new services.
// "slug" is used in the URL (/services#slug) and must stay unique + URL-safe.

export const coreServices = [
  {
    slug: 'construction-estimating',
    title: 'Construction Estimating',
    icon: 'calculator',
    summary: 'Full project cost estimates covering materials, labor, equipment and overhead.',
    included: [
      'Trade-by-trade cost breakdown',
      'Material and labor pricing',
      'Overhead and markup structure',
      'Bid-ready summary sheet',
    ],
    benefits: [
      'Faster, more confident bidding',
      'Fewer missed line items',
      'Estimates formatted for your workflow',
    ],
  },
  {
    slug: 'quantity-takeoff',
    title: 'Quantity Takeoff',
    icon: 'ruler',
    summary: 'Precise measurement of materials and quantities directly from your plans.',
    included: [
      'Digital takeoff from PDF/CAD plans',
      'Quantities organized by trade and area',
      'Cross-checked for accuracy',
      'Exportable spreadsheet format',
    ],
    benefits: [
      'Reduces over- and under-ordering',
      'Clear audit trail for every quantity',
      'Works with your existing plan set',
    ],
  },
  {
    slug: 'material-takeoff',
    title: 'Material Takeoff',
    icon: 'layers',
    summary: 'Detailed material lists broken down by category and phase of construction.',
    included: [
      'Itemized material lists',
      'Waste factor allowances',
      'Phase-by-phase breakdown',
      'Supplier-ready format',
    ],
    benefits: [
      'Tighter procurement planning',
      'Less material waste',
      'Easier supplier comparisons',
    ],
  },
  {
    slug: 'cost-estimation',
    title: 'Cost Estimation',
    icon: 'chart',
    summary: 'Realistic, current cost projections to support budgeting and bidding decisions.',
    included: [
      'Regional pricing considerations',
      'Contingency recommendations',
      'Summary and detailed views',
      'Editable estimate file',
    ],
    benefits: [
      'Budgets grounded in real numbers',
      'Stronger negotiating position',
      'Clear cost visibility for stakeholders',
    ],
  },
  {
    slug: 'labor-estimation',
    title: 'Labor Estimation',
    icon: 'hardhat',
    summary: 'Labor hour and cost projections based on scope, trade and project complexity.',
    included: [
      'Trade-specific labor hours',
      'Crew size assumptions',
      'Productivity rate notes',
      'Labor cost summary',
    ],
    benefits: [
      'More accurate scheduling input',
      'Better crew and cost planning',
      'Fewer labor-cost surprises mid-project',
    ],
  },
  {
    slug: 'bid-preparation',
    title: 'Bid Preparation',
    icon: 'document',
    summary: 'Organized, professional bid packages ready to submit with confidence.',
    included: [
      'Formatted bid summary',
      'Supporting takeoff documentation',
      'Scope clarifications included',
      'Delivered in your preferred format',
    ],
    benefits: [
      'Cleaner, more professional submissions',
      'Less last-minute assembly work',
      'Consistent bid formatting across projects',
    ],
  },
]

// Extended trade-specific services shown on the Services page.
export const tradeServices = [
  { slug: 'concrete-estimating', title: 'Concrete Estimating', summary: 'Footings, foundations, slabs and flatwork quantities and costs.' },
  { slug: 'masonry-estimating', title: 'Masonry Estimating', summary: 'Block, brick and stone takeoffs with labor and material pricing.' },
  { slug: 'roofing-estimating', title: 'Roofing Estimating', summary: 'Roofing materials, underlayment and labor for residential and commercial roofs.' },
  { slug: 'flooring-estimating', title: 'Flooring Estimating', summary: 'Flooring materials and installation quantities across all major surface types.' },
  { slug: 'drywall-estimating', title: 'Drywall Estimating', summary: 'Drywall, framing and finishing quantities by room and level.' },
  { slug: 'painting-estimating', title: 'Painting Estimating', summary: 'Interior and exterior paint area takeoffs and material estimates.' },
  { slug: 'electrical-estimating', title: 'Electrical Estimating', summary: 'Electrical rough-in and finish quantities and labor estimates.' },
  { slug: 'plumbing-estimating', title: 'Plumbing Estimating', summary: 'Plumbing fixture counts, piping runs and labor cost projections.' },
  { slug: 'hvac-estimating', title: 'HVAC Estimating', summary: 'HVAC equipment, ductwork and installation cost estimates.' },
  { slug: 'structural-estimating', title: 'Structural Estimating', summary: 'Structural steel, framing and load-bearing element takeoffs.' },
  { slug: 'residential-estimating', title: 'Residential Estimating', summary: 'Whole-project estimates for single- and multi-family residential builds.' },
  { slug: 'commercial-estimating', title: 'Commercial Estimating', summary: 'Estimating support for commercial and mixed-use construction projects.' },
  { slug: 'industrial-estimating', title: 'Industrial Estimating', summary: 'Cost and quantity estimates for industrial and warehouse facilities.' },
  { slug: 'bid-preparation-2', title: 'Bid Preparation', summary: 'End-to-end bid package preparation, ready for submission.' },
]

export const industries = [
  { slug: 'general-contractors', title: 'General Contractors', summary: 'Full-scope estimates and takeoffs to support multi-trade bids.' },
  { slug: 'subcontractors', title: 'Subcontractors', summary: 'Trade-specific takeoffs sized to your scope of work.' },
  { slug: 'home-builders', title: 'Home Builders', summary: 'Repeatable estimating support for single- and multi-family builds.' },
  { slug: 'commercial-contractors', title: 'Commercial Contractors', summary: 'Estimating for retail, office, hospitality and mixed-use projects.' },
  { slug: 'residential-contractors', title: 'Residential Contractors', summary: 'Accurate takeoffs for renovations, additions and new residential builds.' },
  { slug: 'developers', title: 'Developers', summary: 'Early-stage cost visibility to support project feasibility decisions.' },
]

export const whyChoose = [
  { title: 'Accuracy', summary: 'Quantities and costs are checked before delivery, not left for you to catch.' },
  { title: 'Detailed Reports', summary: 'Estimates arrive organized and documented, not a rough single number.' },
  { title: 'Fast Turnaround', summary: 'Clear timelines set upfront so you can plan your bid around them.' },
  { title: 'Experienced Estimating', summary: 'Estimators familiar with USA, Canadian and Australian project conventions.' },
  { title: 'Competitive Pricing', summary: 'Estimating support priced to make sense for the size of your project.' },
  { title: 'Confidentiality', summary: 'Your plans and project details are handled under strict confidentiality.' },
]

export const processSteps = [
  { title: 'Submit Project', summary: 'Send your plans and project details through our quote form or by email.' },
  { title: 'Project Review', summary: 'Our team reviews scope, trades involved and any special requirements.' },
  { title: 'Takeoff & Scope', summary: 'Quantities are measured and organized directly from your plan set.' },
  { title: 'Estimate & Quality Check', summary: 'Costs are applied and the estimate is reviewed for accuracy.' },
  { title: 'Final Delivery', summary: 'You receive a completed, bid-ready estimate in your preferred format.' },
]
