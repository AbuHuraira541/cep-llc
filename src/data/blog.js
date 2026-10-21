// // Content-managed construction insights. Replace authors/images and copy as needed.
// export const blogCategories = ['All', 'Estimating', 'Bidding', 'Takeoffs', 'Project Planning']

// export const posts = [
//   {
//     slug: 'how-to-read-a-construction-takeoff',
//     category: 'Takeoffs',
//     title: 'How to Read a Construction Takeoff Before You Price It',
//     excerpt: 'A practical checklist for turning measured quantities into a scope you can confidently price and defend.',
//     date: 'September 10, 2025',
//     readTime: '6 min read',
//     author: 'CEP Estimating Team',
//     image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1400&auto=format&fit=crop',
//     body: [
//       'A takeoff is most useful when its quantities can be traced back to a clear scope. Before pricing, confirm drawing revisions, inclusions, exclusions and the units used in each measurement.',
//       'Review the quantity summary trade by trade. Look for items that may be counted in more than one area, allowances that need supplier input, and scope notes that affect labor or access.',
//       'Finally, connect every major quantity to your bid assumptions. A documented takeoff gives your team a stronger starting point for procurement, planning and bid clarification.'
//     ],
//   },
//   {
//     slug: 'five-bid-scope-gaps-to-watch',
//     category: 'Bidding',
//     title: 'Five Bid-Scope Gaps That Can Erode Margin',
//     excerpt: 'Where drawings, specifications and field conditions can quietly introduce risk into an otherwise solid bid.',
//     date: 'August 26, 2025',
//     readTime: '5 min read',
//     author: 'CEP Estimating Team',
//     image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1400&auto=format&fit=crop',
//     body: [
//       'Margin is often lost in the handoff between the drawings and the written scope. Start by comparing the architectural, structural and MEP sheets for conflicting conditions.',
//       'Temporary works, access constraints, demolition boundaries, closeout requirements and permit-related responsibilities should be clarified before the bid is submitted.',
//       'Use a short exclusions and clarifications list to communicate assumptions. This creates a clean record and helps your client compare bids on a more consistent basis.'
//     ],
//   },
//   {
//     slug: 'building-a-repeatable-estimating-workflow',
//     category: 'Estimating',
//     title: 'Building a Repeatable Estimating Workflow for Busy Teams',
//     excerpt: 'A lightweight process for reviewing plans, assigning takeoffs and quality-checking estimates under deadline.',
//     date: 'August 8, 2025',
//     readTime: '7 min read',
//     author: 'CEP Estimating Team',
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=1400&auto=format&fit=crop',
//     body: [
//       'A repeatable workflow does not mean every project receives the same estimate. It means the review, measurement, pricing and quality-control checkpoints are consistent.',
//       'Create a short intake checklist, organize files in a standard structure and define who reviews scope changes before final pricing. These steps reduce last-minute searching and prevent missed inputs.',
//       'Keep a lessons-learned log after bid outcomes. Over time, this helps a team refine assumptions and build a better estimating library.'
//     ],
//   },
//   {
//     slug: 'early-budgeting-without-false-precision',
//     category: 'Project Planning',
//     title: 'Early Budgeting Without False Precision',
//     excerpt: 'How to communicate an early project budget range while being transparent about assumptions and unknowns.',
//     date: 'July 21, 2025',
//     readTime: '4 min read',
//     author: 'CEP Estimating Team',
//     image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=85&w=1400&auto=format&fit=crop',
//     body: [
//       'Early budgets are decision tools, not final bid numbers. They should explain what is included, what is still unknown and which assumptions most influence the range.',
//       'Use broad cost bands for incomplete design stages, then narrow the range as trade scopes and quantities become clearer.',
//       'A well-documented preliminary estimate lets owners and contractors make practical next-step decisions without treating a conceptual number as a contract price.'
//     ],
//   },
// ]

// export function getPostBySlug(slug) {
//   return posts.find((post) => post.slug === slug)
// }



export const blogCategories = ['All', 'Takeoff Strategies', 'Cost Estimation', 'Subcontractor Bids', 'Pre-Construction'];

export const posts = [
  {
    id: 1,
    slug: 'avoiding-omissions-in-quantity-takeoffs',
    category: 'Takeoff Strategies',
    title: 'How to Eliminate Costly Omissions in Construction Quantity Takeoffs',
    excerpt: 'Discover why standard manual counts miss critical scope items and how digital zoning protocols protect your contractor bidding margins.',
    author: 'CEP Estimating Team',
    date: 'May 14, 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4394163/pexels-photo-4394163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Quantity takeoff errors are among the leading causes of budget overruns and lost tender margins for commercial and residential contractors alike. When estimating teams rush through blueprint reviews under tight submission deadlines, critical elements—such as flashing details, specialized wall anchors, or linear MEP accessories—frequently get overlooked.',
      'To combat this, professional estimators rely on structured digital zoning. By dividing complex architectural sheets into manageable quadrants and cross-referencing structural specifications against architectural schedules, human oversight is magnified.',
      'Furthermore, integrating dual-layer cross-verification processes ensures that no line item is left isolated. Whether you are bidding on a multi-story commercial tower or a trade-specific subcontractor package, investing time in systematic takeoff structuring guarantees cleaner bids and higher profitability.'
    ]
  },
  {
    id: 2,
    slug: 'navigating-regional-material-cost-fluctuations',
    category: 'Cost Estimation',
    title: 'Navigating Regional Material Price Volatility in North America & Australia',
    excerpt: 'An inside look at how localized supplier indices and shipping surcharges impact steel, lumber, and concrete cost forecasts.',
    author: 'Market Research Division',
    date: 'June 02, 2026',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Material cost stability is a rare commodity in modern construction. Contractors operating across the USA, Canada, and Australia often face stark regional variances driven by local supply chain bottlenecks, import tariffs, and fluctuating fuel surcharges.',
      'For instance, timber pricing in Western Canada reacts differently to localized mill output compared to lumber markets in the Pacific Northwest. Similarly, concrete batch plant proximities in metropolitan Sydney heavily sway structural pouring estimates.',
      'Successful bidding requires more than generic national database averages. Estimators must plug localized rate cards directly into their takeoffs to maintain accurate contingencies without inflating bids out of competitiveness.'
    ]
  },
  {
    id: 3,
    slug: 'subcontractor-bidding-best-practices',
    category: 'Subcontractor Bids',
    title: 'The Subcontractor Advantage: Winning Bids Without Scope Overlap',
    excerpt: 'How trade-specific contractors can isolate their precise work packages to avoid scope gaps and secure high-margin project awards.',
    author: 'Pre-Construction Advisors',
    date: 'June 18, 2026',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/8308921/pexels-photo-8308921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Updated unique image for Post 3 (Subcontractor & Trade Bidding)
    body: [
      'Subcontractors often struggle with full-scope general contractor estimates that bundle unrelated line items together, making trade-specific bidding unnecessarily complex.',
      'By isolating exact trade scopes—whether electrical rough-ins, drywall partitions, or structural framing—subcontractors can submit laser-focused bids that general contractors prefer to review.',
      'Clear, standalone takeoffs eliminate ambiguity during subcontractor negotiations, establishing trust and opening doors for recurring project partnerships.'
    ]
  },
  {
    id: 4,
    slug: 'mastering-mep-quantity-takeoffs',
    category: 'Takeoff Strategies',
    title: 'Mastering MEP Quantity Takeoffs for Complex Commercial Buildings',
    excerpt: 'A comprehensive guide to calculating electrical conduits, HVAC ductwork length, and plumbing fixtures without missing riser diagrams.',
    author: 'MEP Estimation Specialists',
    date: 'July 05, 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/5691651/pexels-photo-5691651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Updated unique image for Post 4 (MEP & Commercial Systems)
    body: [
      'Mechanical, Electrical, and Plumbing (MEP) systems often account for up to 40% of a commercial building total budget. Yet, MEP takeoffs are notoriously prone to oversight due to overlapping riser diagrams and dense schematic notations.',
      'Estimators must establish a disciplined layering workflow, isolating electrical home runs from sanitary plumbing lines before assigning unit pricing.',
      'By synchronizing takeoff software tags directly with engineering legends, teams can prevent costly installation discrepancies once construction commences on site.'
    ]
  },
  {
    id: 5,
    slug: 'pre-construction-budgeting-for-developers',
    category: 'Pre-Construction',
    title: 'Pre-Construction Budgeting: Feasibility Studies That Prevent Cost Overruns',
    excerpt: 'Why early-stage quantity and cost checks are vital for developers evaluating project go/no-go decisions in competitive markets.',
    author: 'Development Advisory Board',
    date: 'July 22, 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Before a single shovel touches the earth, real estate developers face critical financial gatekeeping. Early schematic estimates dictate whether a multi-family residential or commercial complex will clear hurdle rates.',
      'Relying on rough square-footage rules of thumb often misleads investors. Detailed conceptual takeoffs based on preliminary architectural sketches provide true cost visibility.',
      'Engaging independent quantity surveyors early in the design stage protects capital deployment and aligns architectural ambition with economic reality.'
    ]
  },
  {
    id: 6,
    slug: 'speeding-up-bid-turnaround-times',
    category: 'Cost Estimation',
    title: 'How General Contractors Can Double Their Bidding Capacity Without Extra Headcount',
    excerpt: 'Leveraging external specialist estimators to scale tender output during peak seasonal bidding frenzies.',
    author: 'CEP Operations Lead',
    date: 'August 10, 2026',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'General contractors frequently find themselves turning down lucrative tenders simply because their internal estimating department is stretched to capacity during peak bidding seasons.',
      'Scaling in-house headcount permanently introduces heavy overhead costs during slower quarters. The agile alternative is partnering with dedicated external takeoff firms.',
      'By outsourcing quantity counts and structured preliminary pricing, internal chief estimators can focus purely on value engineering and executive proposal submissions.'
    ]
  },
  {
    id: 7,
    slug: 'concrete-and-rebar-takeoff-precision',
    category: 'Takeoff Strategies',
    title: 'Precision in Concrete and Rebar Takeoffs: Avoiding Foundation Surprises',
    excerpt: 'Deep dive into calculating cubic yards, formwork surface areas, and reinforcing steel tonnages accurately.',
    author: 'Structural Estimating Cell',
    date: 'August 28, 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Concrete and rebar packages represent major capital outlays on any structural project. Even a minor calculation error in slab thickness or footing depth can compound into massive financial losses.',
      'Estimators must account for waste factors, post-tension cable assemblies, and complex formwork bracing tiers rather than relying on simple volume multipliers.',
      'Granular breakdown of reinforcing steel by bar size ensures that suppliers deliver precisely what is needed without costly jobsite delays.'
    ]
  },
  {
    id: 8,
    slug: 'managing-subcontractor-scope-gaps',
    category: 'Subcontractor Bids',
    title: 'Bridging the Gap: How to Prevent Subcontractor Scope Gaps in Prime Bids',
    excerpt: 'Strategies for general contractors to reconcile incoming trade packages and ensure zero grey areas in final submissions.',
    author: 'Bid Management Group',
    date: 'September 04, 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Scope gaps between general contractor estimates and specialized subcontractor quotes often lead to post-award disputes or unbudgeted change orders.',
      'Establishing a standardized scope review matrix allows estimators to map every subcontractor line item directly back to master architectural drawings.',
      'Proactive scope leveling during the pre-bid stage protects general contractors from absorbing overlooked trade requirements.'
    ]
  },
  {
    id: 9,
    slug: 'value-engineering-without-compromising-quality',
    category: 'Pre-Construction',
    title: 'Value Engineering in Pre-Construction: Optimizing Costs Without Sacrificing Design',
    excerpt: 'How collaborative estimating helps project teams substitute materials smartly while preserving structural integrity.',
    author: 'Pre-Construction Advisors',
    date: 'September 15, 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Value engineering is frequently misunderstood as mere cost-cutting. In professional construction estimating, it is a strategic process of optimizing material utility and construction methods.',
      'By analyzing alternative assemblies—such as switching facade panels or adjusting framing spans—estimators deliver substantial savings to developers without altering aesthetic or structural performance.',
      'Early collaboration between architects, engineers, and independent estimators is the cornerstone of successful value engineering.'
    ]
  },
  {
    id: 10,
    slug: 'the-future-of-digital-quantity-surveying',
    category: 'Cost Estimation',
    title: 'The Evolution of Quantity Surveying: AI Integration vs. Human Oversight',
    excerpt: 'Exploring how automated takeoff tools combine with veteran estimator expertise to achieve 99.9% bidding accuracy.',
    author: 'CEP Innovation Lab',
    date: 'September 25, 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/5922521/pexels-photo-5922521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'The construction industry is experiencing a technological renaissance. Automated takeoff software and AI-assisted geometry recognition have radically accelerated initial quantity extraction.',
      'However, algorithms alone cannot interpret ambiguous drawing notes, local building code nuances, or unique site access constraints. Human oversight remains indispensable.',
      'The winning formula for modern estimating firms lies in pairing cutting-edge digital takeoff software with experienced senior estimators who perform rigorous cross-verifications.'
    ]
  }
];

export const getPostBySlug = (slug) => {
  return posts.find((p) => p.slug === slug);
};