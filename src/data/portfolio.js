// import { siteMedia } from './siteContent.js'

// // Sample portfolio entries — replace details and images with client-approved projects.
// export const portfolio = [
//   {
//     id: 1,
//     slug: 'austin-single-family-residence',
//     category: 'Residential',
//     type: 'Single-Family Residence',
//     location: 'Austin, Texas, USA',
//     scope: 'Full quantity takeoff and cost estimate',
//     description: 'Ground-up estimating support covering concrete, framing, roofing and finishes for a new single-family home.',
//     image: siteMedia.portfolioImages.residential,
//     challenge: 'Coordinate quantities across a multi-trade drawing package under a competitive bid deadline.',
//     solution: 'Created a structured takeoff workbook with trade-level quantities, assumptions and a review-ready summary.',
//     deliverables: ['Trade-by-trade quantity takeoff', 'Material and labor estimate framework', 'Scope assumptions register'],
//   },
//   {
//     id: 2,
//     slug: 'toronto-retail-fit-out',
//     category: 'Commercial',
//     type: 'Retail Fit-Out',
//     location: 'Toronto, Ontario, Canada',
//     scope: 'Material takeoff and labor estimation',
//     description: 'Interior fit-out estimating support for a multi-unit retail space, including electrical and HVAC scope.',
//     image: siteMedia.portfolioImages.commercial,
//     challenge: 'Align architectural finishes with building-services work across several tenant areas.',
//     solution: 'Organized measured scope by zone and trade to make review and supplier pricing more efficient.',
//     deliverables: ['Interior finishes takeoff', 'MEP scope quantities', 'Bid review summary'],
//   },
//   {
//     id: 3,
//     slug: 'brisbane-warehouse-facility',
//     category: 'Industrial',
//     type: 'Warehouse Facility',
//     location: 'Brisbane, Queensland, Australia',
//     scope: 'Structural and site estimate',
//     description: 'Structural steel and sitework quantity takeoff supporting a design-build bid.',
//     image: siteMedia.portfolioImages.industrial,
//     challenge: 'Bring civil, structural and enclosure quantities into one clear bid structure.',
//     solution: 'Separated the estimate into bid packages with traceable quantity summaries and qualification notes.',
//     deliverables: ['Sitework quantity schedule', 'Structural takeoff', 'Bid-package cost summary'],
//   },
//   {
//     id: 4,
//     slug: 'vancouver-multifamily-renovation',
//     category: 'Renovation',
//     type: 'Multi-Family Renovation',
//     location: 'Vancouver, British Columbia, Canada',
//     scope: 'Phase-by-phase cost estimate',
//     description: 'Renovation estimating for flooring, drywall and mechanical upgrades across 24 units.',
//     image: siteMedia.portfolioImages.renovation,
//     challenge: 'Account for occupied-building sequencing and unit-by-unit scope variation.',
//     solution: 'Developed phased quantity schedules to help the contractor assess labor and material needs by unit.',
//     deliverables: ['Unit-by-unit takeoff', 'Phasing assumptions', 'Renovation cost summary'],
//   },
//   {
//     id: 5,
//     slug: 'chicago-office-build-out',
//     category: 'Commercial',
//     type: 'Office Build-Out',
//     location: 'Chicago, Illinois, USA',
//     scope: 'Bid preparation package',
//     description: 'A complete bid-support package with takeoff documentation for a corporate office build-out.',
//     image: siteMedia.portfolioImages.commercial,
//     challenge: 'Convert a detailed interior drawing set into a concise bid-ready scope package.',
//     solution: 'Prepared organized takeoff, inclusions and clarification notes that supported a cleaner submission.',
//     deliverables: ['Quantity workbook', 'Bid inclusions list', 'Clarifications summary'],
//   },
//   {
//     id: 6,
//     slug: 'perth-custom-home-addition',
//     category: 'Residential',
//     type: 'Custom Home Addition',
//     location: 'Perth, Western Australia',
//     scope: 'Quantity takeoff and material list',
//     description: 'Addition estimating support for framing, roofing and finishing materials with supplier-ready lists.',
//     image: siteMedia.portfolioImages.residential,
//     challenge: 'Separate new addition quantities from tie-in and renovation scope.',
//     solution: 'Measured each area independently and documented assumptions for existing-condition interfaces.',
//     deliverables: ['Framing and roofing takeoff', 'Finish-material schedule', 'Supplier-ready material list'],
//   },
// ]

// export const portfolioCategories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation']

// export function getProjectBySlug(slug) {
//   return portfolio.find((project) => project.slug === slug)
// }



export const portfolioCategories = ['All', 'Commercial', 'Residential', 'Industrial', 'Specialty'];

export const portfolio = [
  {
    id: 1,
    slug: 'commercial-office-tower',
    category: 'Commercial',
    type: 'Commercial Office Tower',
    location: 'Austin, Texas, USA',
    scope: 'Full Structural & Architectural Takeoff',
    timeline: '5 Business Days',
    accuracy: '99.4%',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive cost estimation and structural quantity takeoff for a 15-story modern commercial office building featuring core-and-shell as well as tenant fitout preparation.',
    challenge: 'Tight 5-day bidding window with complex multi-phase concrete pours and high-tonnage structural steel specifications across varying floor plates.',
    solution: 'Deployed dual senior estimators working in shifts to cross-verify material quantities, ensuring zero omission on rebar, formwork, and framing packages.',
    deliverables: [
      'Detailed Concrete & Foundation Takeoff',
      'Structural Steel Tonnage Breakdown',
      'Drywall, Insulation & Framing Estimates',
      'Ready-to-Import Subcontractor Bid Packages',
      'Comprehensive Excel Workbook with Regional Pricing'
    ],
    clientFeedback: "CEP's quantity takeoff was incredibly accurate. It helped us secure this multi-million commercial bid without a single material shortage hiccup."
  },
  {
    id: 2,
    slug: 'luxury-residential-subdivision',
    category: 'Residential',
    type: 'Luxury Residential Subdivision',
    location: 'Calgary, Alberta, Canada',
    scope: 'Foundation to Finishes Estimation',
    timeline: '4 Business Days',
    accuracy: '98.9%',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Detailed trade-by-trade takeoffs for a 20-home luxury residential development, focusing heavily on custom millwork, complex roofing lines, and high-end exterior finishes.',
    challenge: 'Rapidly fluctuating Canadian lumber pricing and highly custom architectural finish specifications unique to high-end suburban builds.',
    solution: 'Integrated real-time regional supplier rate cards from Alberta to project accurate localized material contingencies and labor allocations.',
    deliverables: [
      'Lumber & Framing Linear Foot Takeoff',
      'Roofing, Shingles & Siding Quantities',
      'Interior Finishes & Millwork Costing',
      'Subcontractor Labor Hour Projections'
    ],
    clientFeedback: "Their team understands local Canadian pricing structures and framing specs perfectly. Saved our team weeks of manual calculation."
  },
  {
    id: 3,
    slug: 'industrial-logistics-warehouse',
    category: 'Industrial',
    type: 'Industrial Logistics Warehouse',
    location: 'Sydney, New South Wales, Australia',
    scope: 'Electrical & MEP Takeoff',
    timeline: '6 Business Days',
    accuracy: '99.1%',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Large-scale distribution warehouse facility estimation covering heavy-duty industrial flooring, high-voltage electrical distribution, complex HVAC ducting, and automated fire safety networks.',
    challenge: 'Meeting stringent Australian Building Codes (NCC) while managing a massive 250,000 sq. ft. floor layout.',
    solution: 'Divided the facility into discrete digital zones using professional takeoff software, enabling parallel calculation streams for MEP and civil works.',
    deliverables: [
      'HVAC Ductwork & Equipment Schedule',
      'High-Voltage Wiring & Conduit Lengths',
      'Fire Suppression & Safety System Costing',
      'Heavy Equipment Rental & Site Logistics Schedule'
    ],
    clientFeedback: "The structural and MEP estimating reports were exact. Our engineers were thoroughly impressed by the organization."
  },
  {
    id: 4,
    slug: 'retail-mall-renovation',
    category: 'Commercial',
    type: 'Retail Mall Interior Renovation',
    location: 'Toronto, Ontario, Canada',
    scope: 'Tenant Improvement & Finishes',
    timeline: '3 Business Days',
    accuracy: '99.5%',
    image: 'https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Multi-store indoor retail mall renovation focusing on premium flooring, architectural glass storefront partitions, and specialized retail track lighting systems.',
    challenge: 'Strict night-shift labor constraints and strictly phased handover schedules across active retail corridors.',
    solution: 'Structured the cost workbooks into distinct chronological phases so the contractor could align material staging with night-time access windows.',
    deliverables: [
      'Flooring, Tile & Carpeting Takeoff',
      'Glass Partition & Storefront Glazing Breakdown',
      'Specialized Fixture Installation Costing',
      'Phased Labor & Overtime Multiplier Estimates'
    ],
    clientFeedback: "Fast turnaround and crystal-clear itemization. Made our phased bidding process completely stress-free."
  },
  {
    id: 5,
    slug: 'multifamily-apartment-complex',
    category: 'Residential',
    type: 'Multifamily Apartment Complex',
    location: 'Seattle, Washington, USA',
    scope: 'Complete Quantity Takeoff & Costing',
    timeline: '7 Business Days',
    accuracy: '99.2%',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Five-story wood-frame over concrete podium apartment building featuring 80 residential units, subterranean parking garage, and landscaped rooftop communal spaces.',
    challenge: 'Complex podium deck concrete calculations, post-tension cable tracking, and strict acoustic insulation assembly requirements.',
    solution: 'Applied rigorous structural engineering formulas to separate concrete formwork, rebar weights, and framing timber modules cleanly.',
    deliverables: [
      'Podium Slab Concrete & Formwork Takeoff',
      'Reinforcing Steel (Rebar) Weight Schedule',
      'Acoustic Wall & Floor Assembly Specs',
      'Exterior Envelope & Window Schedule'
    ],
    clientFeedback: "An absolute lifesaver for our pre-construction division. The podium calculations matched our site structural engineer's notes to the decimal."
  },
  {
    id: 6,
    slug: 'manufacturing-plant-expansion',
    category: 'Industrial',
    type: 'Manufacturing Plant Expansion',
    location: 'Melbourne, Victoria, Australia',
    scope: 'Civil Works & Structural Steel',
    timeline: '6 Business Days',
    accuracy: '98.8%',
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Heavy industrial facility expansion requiring massive foundation excavation, heavy equipment pads, and extensive structural steel portal frames.',
    challenge: 'Remote regional site location with specialized heavy-load foundation depth requirements.',
    solution: 'Factored localized transport surcharges, crane mobilization expenses, and specialized earthmoving machinery rates into the final workbook.',
    deliverables: [
      'Earthwork & Excavation Volume Calculations',
      'Heavy-Load Foundation Concrete Breakdown',
      'Structural Steel Portal Frame Tonnage',
      'External Yard Utility & Drainage Takeoff'
    ],
    clientFeedback: "Their breakdown of structural steel and site civil earthworks gave us a massive competitive edge in winning the tender."
  },
  {
    id: 7,
    slug: 'boutique-hotel-fitout',
    category: 'Commercial',
    type: 'Boutique Hotel Fitout',
    location: 'Miami, Florida, USA',
    scope: 'Interior Finishes & MEP Estimation',
    timeline: '5 Business Days',
    accuracy: '99.3%',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'High-end interior fitout estimation for a 60-room coastal boutique hotel, featuring custom architectural millwork, bespoke bathroom fixtures, and smart lighting automation.',
    challenge: 'Exacting architectural designer standards and high-tier imported Italian marble and woodwork specifications.',
    solution: 'Created tiered pricing schedules allowing the client to review luxury vs. alternative material cost variants instantly.',
    deliverables: [
      'Custom Millwork & Joinery Quantities',
      'Luxury Plumbing Fixture Schedule',
      'Smart Lighting & Low-Voltage Takeoff',
      'Comprehensive Interior Finishes Master Sheet'
    ],
    clientFeedback: "The level of detail in the millwork and finish schedules was incredible. Exactly what our design-build firm needed."
  },
  {
    id: 8,
    slug: 'custom-coastal-villa',
    category: 'Residential',
    type: 'Custom Coastal Villa',
    location: 'Gold Coast, Queensland, Australia',
    scope: 'Full Architectural Estimating',
    timeline: '4 Business Days',
    accuracy: '99.0%',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Multi-level luxury residential coastal villa designed to withstand severe cyclonic wind ratings while maintaining expansive glass wall aesthetics.',
    challenge: 'Corrosion-resistant marine-grade material specifications and complex cantilevered structural framing elements.',
    solution: 'Collaborated via review notes to ensure all structural engineering wind-bracing hardware was fully accounted for in the bill of quantities.',
    deliverables: [
      'Marine-Grade Coastal Framing Takeoff',
      'Cyclonic Roof & Structural Tie-Down Schedule',
      'Frameless Glass Balustrade & Glazing Takeoff',
      'Waterproofing & Membrane Estimating'
    ],
    clientFeedback: "Precise takeoffs that accounted for every single coastal building code requirement without missing a beat."
  },
  {
    id: 9,
    slug: 'solar-farm-infrastructure',
    category: 'Specialty',
    type: 'Solar Farm Infrastructure',
    location: 'Nevada Desert, USA',
    scope: 'Civil Site Prep & Cabling Takeoff',
    timeline: '8 Business Days',
    accuracy: '99.6%',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Utility-scale renewable energy solar farm infrastructure estimation covering large-scale trenching, steel pile driving coordinates, and DC collector cabling.',
    challenge: 'Vast multi-acre geographic scope and meticulous tracking of thousands of linear feet of underground conduit and cabling.',
    solution: 'Segmented the site into macro grid zones using linear takeoff software to guarantee zero omission across sprawling acreage.',
    deliverables: [
      'Site Trenching & Grading Earthwork Volume',
      'Steel Pile Driving & Racking Quantities',
      'DC & AC Collector Cabling Linear Takeoff',
      'Substation Civil & Foundation Works'
    ],
    clientFeedback: "Utility-scale green energy projects require absolute precision. CEP delivered a flawless estimate on an aggressive timeline."
  },
  {
    id: 10,
    slug: 'healthcare-hospital-wing',
    category: 'Commercial',
    type: 'Advanced Healthcare Hospital Wing',
    location: 'Boston, Massachusetts, USA',
    scope: 'Medical Gas, MEP & Framing Estimating',
    timeline: '7 Business Days',
    accuracy: '99.8%',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Specialized hospital wing expansion project focusing on sterile surgical suites, medical gas pipeline networks, and heavy radiation shielding partitions.',
    challenge: 'Intricate medical infrastructure integration and strict healthcare regulatory standards compliance.',
    solution: 'Partnered with specialized MEP consultants to accurately estimate medical-grade conduits, emergency backup systems, and sterile finishes.',
    deliverables: [
      'Medical Gas Pipeline Takeoff',
      'Sterile Cleanroom Finishes Estimating',
      'Emergency Power Distribution Breakdown',
      'Radiation Shielding Wall Quantities'
    ],
    clientFeedback: "Healthcare estimating demands absolute perfection. CEP's medical gas and MEP takeoffs were spot-on."
  },
  {
    id: 11,
    slug: 'highway-bridge-overpass',
    category: 'Industrial',
    type: 'Highway Bridge Overpass',
    location: 'Denver, Colorado, USA',
    scope: 'Civil Earthworks & Precast Girder Takeoff',
    timeline: '9 Business Days',
    accuracy: '98.7%',
    image: 'https://images.pexels.com/photos/1687107/pexels-photo-1687107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Heavy civil infrastructure project involving multi-span precast concrete girders, abutment foundation earthwork, and highway barrier wall installation.',
    challenge: 'Complex load-bearing structural calculations and rigorous state department of transportation (DOT) specifications.',
    solution: 'Applied civil engineering takeoff software to calculate exact cubic yards of concrete and steel tensioning requirements.',
    deliverables: [
      'Abutment & Pier Concrete Volume',
      'Precast Girder Scheduling & Rigging Costs',
      'Highway Barrier Wall Linear Takeoff',
      'Traffic Control & Safety Phasing Estimates'
    ],
    clientFeedback: "State DOT bids require granular civil breakdowns. This workbook gave our estimating department total confidence."
  },
  {
    id: 12,
    slug: 'k12-educational-campus',
    category: 'Commercial',
    type: 'K-12 Educational Campus & Gymnasium',
    location: 'Vancouver, British Columbia, Canada',
    scope: 'Full Architectural & Structural Takeoff',
    timeline: '6 Business Days',
    accuracy: '99.2%',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Modern two-story educational facility including multi-purpose athletic gymnasiums, science laboratories, and administrative administrative blocks.',
    challenge: 'Tight school district construction calendar with strict completion deadlines prior to the academic year kickoff.',
    solution: 'Organized material workbooks by building sector to streamline subcontractor bidding across structural steel and masonry.',
    deliverables: [
      'Gymnasium Long-Span Steel Joist Takeoff',
      'Science Lab Specialized Casework Estimates',
      'Masonry & Brickwork Material Quantities',
      'Acoustic Ceiling & Flooring Schedule'
    ],
    clientFeedback: "We met our district tender deadline comfortably thanks to CEP's fast and exceptionally structured estimate."
  }
];

export const getProjectBySlug = (slug) => {
  return portfolio.find((p) => p.slug === slug);
};