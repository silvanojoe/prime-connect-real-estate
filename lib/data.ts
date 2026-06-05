export type MarketType = "off-plan" | "secondary"

export interface Property {
  slug: string
  title: string
  marketType: MarketType
  propertyType: string
  developer: string
  community: string
  description: string
  startingPrice: number
  price: number
  bedrooms: string
  bathrooms: number
  size: number
  handover?: string
  paymentPlan?: string
  image: string
  gallery: string[]
  amenities: string[]
  floorPlans: { name: string; size: string; image: string }[]
  featured: boolean
}

export interface Community {
  slug: string
  name: string
  image: string
  description: string
  averagePrice: string
  roi: string
  propertyCount: number
}

export interface Developer {
  slug: string
  name: string
  overview: string
  activeProjects: number
  established: string
}

export const communities: Community[] = [
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    image: "/images/communities/dubai-hills.png",
    description:
      "A master-planned green oasis featuring an 18-hole championship golf course, parks, and premium villas and apartments.",
    averagePrice: "AED 2.4M",
    roi: "6.2%",
    propertyCount: 48,
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    image: "/images/communities/downtown-dubai.png",
    description:
      "The heart of the city, home to Burj Khalifa, Dubai Mall and the Dubai Fountain — the most iconic address in the UAE.",
    averagePrice: "AED 3.1M",
    roi: "5.8%",
    propertyCount: 62,
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    image: "/images/communities/dubai-marina.png",
    description:
      "A vibrant waterfront district with a stunning marina, yacht clubs, dining and high-rise luxury living.",
    averagePrice: "AED 1.9M",
    roi: "6.7%",
    propertyCount: 71,
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    image: "/images/communities/palm-jumeirah.png",
    description:
      "The world-famous palm-shaped island offering exclusive beachfront villas, signature apartments and five-star resorts.",
    averagePrice: "AED 8.5M",
    roi: "5.1%",
    propertyCount: 34,
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    image: "/images/communities/business-bay.png",
    description:
      "A dynamic central business and residential hub along the Dubai Water Canal, minutes from Downtown.",
    averagePrice: "AED 1.7M",
    roi: "7.1%",
    propertyCount: 56,
  },
  {
    slug: "jvc",
    name: "Jumeirah Village Circle",
    image: "/images/communities/jvc.png",
    description:
      "A family-friendly, fast-growing community offering excellent value, strong rental demand and high yields.",
    averagePrice: "AED 950K",
    roi: "8.3%",
    propertyCount: 89,
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    image: "/images/communities/arabian-ranches.png",
    description:
      "An established premium villa community with golf, equestrian facilities and lush landscaped streets.",
    averagePrice: "AED 4.2M",
    roi: "5.4%",
    propertyCount: 27,
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    image: "/images/communities/creek-harbour.png",
    description:
      "A visionary waterfront destination set around the creek, blending nature, retail and modern towers.",
    averagePrice: "AED 2.2M",
    roi: "6.5%",
    propertyCount: 43,
  },
]

export const developers: Developer[] = [
  {
    slug: "emaar",
    name: "Emaar Properties",
    overview:
      "Dubai's largest developer behind Burj Khalifa, Dubai Mall and master communities including Downtown Dubai and Dubai Hills.",
    activeProjects: 32,
    established: "1997",
  },
  {
    slug: "damac",
    name: "DAMAC Properties",
    overview:
      "A leading luxury developer renowned for branded residences with Versace, Cavalli and de GRISOGONO.",
    activeProjects: 24,
    established: "2002",
  },
  {
    slug: "nakheel",
    name: "Nakheel",
    overview:
      "The master developer behind Palm Jumeirah, The World Islands and Jumeirah Village waterfront communities.",
    activeProjects: 18,
    established: "2000",
  },
  {
    slug: "sobha",
    name: "Sobha Realty",
    overview:
      "A premium developer known for meticulous craftsmanship and the flagship Sobha Hartland community.",
    activeProjects: 14,
    established: "1976",
  },
  {
    slug: "binghatti",
    name: "Binghatti Developers",
    overview:
      "An award-winning developer recognised for distinctive architecture and high-yield central locations.",
    activeProjects: 21,
    established: "2008",
  },
  {
    slug: "ellington",
    name: "Ellington Properties",
    overview:
      "A design-led boutique developer focused on beautifully crafted residences and lifestyle amenities.",
    activeProjects: 12,
    established: "2014",
  },
  {
    slug: "meraas",
    name: "Meraas",
    overview:
      "The developer behind City Walk, Bluewaters Island and Dubai's most lifestyle-driven destinations.",
    activeProjects: 16,
    established: "2007",
  },
  {
    slug: "danube",
    name: "Danube Properties",
    overview:
      "A value-focused developer popular with investors for flexible 1% monthly payment plans.",
    activeProjects: 19,
    established: "2014",
  },
]

const sharedAmenities = [
  "Infinity Pool",
  "State-of-the-art Gym",
  "24/7 Concierge",
  "Covered Parking",
  "Kids Play Area",
  "Landscaped Gardens",
  "Retail & Dining",
  "Smart Home System",
]

export const properties: Property[] = [
  {
    slug: "marina-vista-residences",
    title: "Marina Vista Residences",
    marketType: "off-plan",
    propertyType: "Apartment",
    developer: "Emaar Properties",
    community: "Dubai Marina",
    description:
      "Twin towers rising above Dubai Marina offering panoramic sea and skyline views, resort-style amenities and direct marina access.",
    startingPrice: 1850000,
    price: 1850000,
    bedrooms: "1 - 3",
    bathrooms: 2,
    size: 850,
    handover: "Q4 2026",
    paymentPlan: "60/40 with 10% down",
    image: "/images/properties/prop-1.png",
    gallery: [
      "/images/properties/prop-1.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [
      { name: "1 Bedroom", size: "850 sqft", image: "/images/gallery/interior-1.png" },
      { name: "2 Bedroom", size: "1,250 sqft", image: "/images/gallery/interior-2.png" },
    ],
    featured: true,
  },
  {
    slug: "creek-gate-towers",
    title: "Creek Gate Towers",
    marketType: "off-plan",
    propertyType: "Apartment",
    developer: "Emaar Properties",
    community: "Dubai Creek Harbour",
    description:
      "Waterfront living at Dubai Creek Harbour with sweeping views of the creek and the future tallest tower in the world.",
    startingPrice: 1450000,
    price: 1450000,
    bedrooms: "1 - 3",
    bathrooms: 2,
    size: 780,
    handover: "Q2 2027",
    paymentPlan: "50/50 with 10% down",
    image: "/images/properties/prop-2.png",
    gallery: [
      "/images/properties/prop-2.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [
      { name: "1 Bedroom", size: "780 sqft", image: "/images/gallery/interior-1.png" },
      { name: "3 Bedroom", size: "1,650 sqft", image: "/images/gallery/interior-2.png" },
    ],
    featured: true,
  },
  {
    slug: "hills-grove-villas",
    title: "Hills Grove Villas",
    marketType: "off-plan",
    propertyType: "Villa",
    developer: "Emaar Properties",
    community: "Dubai Hills Estate",
    description:
      "Contemporary 4 and 5 bedroom villas overlooking the championship golf course in the heart of Dubai Hills Estate.",
    startingPrice: 5600000,
    price: 5600000,
    bedrooms: "4 - 5",
    bathrooms: 5,
    size: 3800,
    handover: "Q1 2027",
    paymentPlan: "80/20 with 10% down",
    image: "/images/properties/prop-3.png",
    gallery: [
      "/images/properties/prop-3.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [
      { name: "4 Bedroom", size: "3,800 sqft", image: "/images/gallery/interior-1.png" },
      { name: "5 Bedroom", size: "4,600 sqft", image: "/images/gallery/interior-2.png" },
    ],
    featured: true,
  },
  {
    slug: "downtown-signature-tower",
    title: "Downtown Signature Tower",
    marketType: "off-plan",
    propertyType: "Apartment",
    developer: "DAMAC Properties",
    community: "Downtown Dubai",
    description:
      "Branded residences moments from Burj Khalifa with curated interiors, sky lounges and world-class concierge service.",
    startingPrice: 2300000,
    price: 2300000,
    bedrooms: "1 - 3",
    bathrooms: 3,
    size: 920,
    handover: "Q3 2026",
    paymentPlan: "70/30 with 20% down",
    image: "/images/properties/prop-4.png",
    gallery: [
      "/images/properties/prop-4.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [
      { name: "1 Bedroom", size: "920 sqft", image: "/images/gallery/interior-1.png" },
      { name: "2 Bedroom", size: "1,380 sqft", image: "/images/gallery/interior-2.png" },
    ],
    featured: true,
  },
  {
    slug: "business-bay-sky-penthouses",
    title: "Business Bay Sky Penthouses",
    marketType: "off-plan",
    propertyType: "Penthouse",
    developer: "Binghatti Developers",
    community: "Business Bay",
    description:
      "Limited collection of duplex penthouses with private terraces and uninterrupted views of the Dubai Water Canal.",
    startingPrice: 3900000,
    price: 3900000,
    bedrooms: "3 - 4",
    bathrooms: 4,
    size: 2400,
    handover: "Q4 2027",
    paymentPlan: "60/40 with 20% down",
    image: "/images/properties/prop-5.png",
    gallery: [
      "/images/properties/prop-5.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [
      { name: "3 Bedroom Duplex", size: "2,400 sqft", image: "/images/gallery/interior-1.png" },
      { name: "4 Bedroom Duplex", size: "3,100 sqft", image: "/images/gallery/interior-2.png" },
    ],
    featured: true,
  },
  {
    slug: "palm-beachfront-residences",
    title: "Palm Beachfront Residences",
    marketType: "off-plan",
    propertyType: "Apartment",
    developer: "Nakheel",
    community: "Palm Jumeirah",
    description:
      "Exclusive beachfront apartments on Palm Jumeirah with private beach access, infinity pools and signature interiors.",
    startingPrice: 4800000,
    price: 4800000,
    bedrooms: "2 - 4",
    bathrooms: 4,
    size: 1750,
    handover: "Q2 2028",
    paymentPlan: "50/50 with 20% down",
    image: "/images/properties/prop-6.png",
    gallery: [
      "/images/properties/prop-6.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [
      { name: "2 Bedroom", size: "1,750 sqft", image: "/images/gallery/interior-1.png" },
      { name: "4 Bedroom", size: "2,900 sqft", image: "/images/gallery/interior-2.png" },
    ],
    featured: true,
  },
  {
    slug: "marina-heights-2br",
    title: "Marina Heights 2BR Apartment",
    marketType: "secondary",
    propertyType: "Apartment",
    developer: "Emaar Properties",
    community: "Dubai Marina",
    description:
      "Beautifully maintained 2 bedroom apartment with full marina views, upgraded finishes and a prime high-floor position.",
    startingPrice: 2150000,
    price: 2150000,
    bedrooms: "2",
    bathrooms: 2,
    size: 1180,
    image: "/images/properties/sec-1.png",
    gallery: [
      "/images/properties/sec-1.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [{ name: "2 Bedroom", size: "1,180 sqft", image: "/images/gallery/interior-1.png" }],
    featured: true,
  },
  {
    slug: "ranches-family-villa",
    title: "Arabian Ranches Family Villa",
    marketType: "secondary",
    propertyType: "Villa",
    developer: "Emaar Properties",
    community: "Arabian Ranches",
    description:
      "A spacious 4 bedroom villa with private pool, landscaped garden and a quiet location close to the community centre.",
    startingPrice: 5400000,
    price: 5400000,
    bedrooms: "4",
    bathrooms: 4,
    size: 3600,
    image: "/images/properties/sec-2.png",
    gallery: [
      "/images/properties/sec-2.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [{ name: "4 Bedroom", size: "3,600 sqft", image: "/images/gallery/interior-1.png" }],
    featured: true,
  },
  {
    slug: "downtown-penthouse-resale",
    title: "Downtown Penthouse",
    marketType: "secondary",
    propertyType: "Penthouse",
    developer: "Emaar Properties",
    community: "Downtown Dubai",
    description:
      "A rare resale penthouse with Burj Khalifa and fountain views, wraparound terrace and bespoke interior design.",
    startingPrice: 9200000,
    price: 9200000,
    bedrooms: "4",
    bathrooms: 5,
    size: 4200,
    image: "/images/properties/sec-3.png",
    gallery: [
      "/images/properties/sec-3.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [{ name: "4 Bedroom Penthouse", size: "4,200 sqft", image: "/images/gallery/interior-1.png" }],
    featured: true,
  },
  {
    slug: "jvc-townhouse",
    title: "JVC Modern Townhouse",
    marketType: "secondary",
    propertyType: "Townhouse",
    developer: "Nakheel",
    community: "Jumeirah Village Circle",
    description:
      "A contemporary 3 bedroom townhouse with private garden, ideal for families or investors seeking strong rental yields.",
    startingPrice: 2750000,
    price: 2750000,
    bedrooms: "3",
    bathrooms: 3,
    size: 2100,
    image: "/images/properties/sec-4.png",
    gallery: [
      "/images/properties/sec-4.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [{ name: "3 Bedroom", size: "2,100 sqft", image: "/images/gallery/interior-1.png" }],
    featured: true,
  },
  {
    slug: "business-bay-1br",
    title: "Business Bay Canal Apartment",
    marketType: "secondary",
    propertyType: "Apartment",
    developer: "DAMAC Properties",
    community: "Business Bay",
    description:
      "A bright 1 bedroom apartment overlooking the Dubai Water Canal with high rental demand and easy access to Downtown.",
    startingPrice: 1280000,
    price: 1280000,
    bedrooms: "1",
    bathrooms: 1,
    size: 720,
    image: "/images/properties/sec-5.png",
    gallery: [
      "/images/properties/sec-5.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [{ name: "1 Bedroom", size: "720 sqft", image: "/images/gallery/interior-1.png" }],
    featured: true,
  },
  {
    slug: "palm-waterfront-villa",
    title: "Palm Jumeirah Waterfront Villa",
    marketType: "secondary",
    propertyType: "Villa",
    developer: "Nakheel",
    community: "Palm Jumeirah",
    description:
      "An exceptional signature villa on the Palm with private beach, pool and unobstructed views of the Dubai skyline.",
    startingPrice: 18500000,
    price: 18500000,
    bedrooms: "5",
    bathrooms: 6,
    size: 7200,
    image: "/images/properties/sec-6.png",
    gallery: [
      "/images/properties/sec-6.png",
      "/images/gallery/interior-1.png",
      "/images/gallery/interior-2.png",
    ],
    amenities: sharedAmenities,
    floorPlans: [{ name: "5 Bedroom", size: "7,200 sqft", image: "/images/gallery/interior-1.png" }],
    featured: true,
  },
]

export const offPlanProperties = properties.filter((p) => p.marketType === "off-plan")
export const secondaryProperties = properties.filter((p) => p.marketType === "secondary")

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug)
}

export interface Testimonial {
  name: string
  role: string
  location: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: "James Whitfield",
    role: "Property Investor",
    location: "United Kingdom",
    quote:
      "Prime Connect guided me through my first off-plan purchase in Dubai Marina. The process was seamless and the rental returns have exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    role: "Golden Visa Holder",
    location: "Pakistan",
    quote:
      "They helped me secure a property that qualified me for the Golden Visa. Professional, transparent and genuinely invested in my goals.",
    rating: 5,
  },
  {
    name: "Daniel Schmidt",
    role: "Portfolio Investor",
    location: "Germany",
    quote:
      "I have purchased three properties through Prime Connect. Their market knowledge and access to exclusive launches is unmatched in Dubai.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "First-time Buyer",
    location: "India",
    quote:
      "As a first-time buyer I had a lot of questions. The team patiently walked me through every step, even handling the purchase remotely.",
    rating: 5,
  },
  {
    name: "Mohammed Al Farsi",
    role: "UAE Resident",
    location: "United Arab Emirates",
    quote:
      "Upgraded from an apartment to a villa in Dubai Hills with their help. Excellent negotiation and end-to-end support throughout.",
    rating: 5,
  },
]

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "How can foreigners buy property in Dubai?",
    answer:
      "Foreign nationals can buy property in designated freehold areas across Dubai with full ownership rights. You do not need to be a UAE resident. The process involves selecting a property, signing a sales agreement, paying a deposit, and registering the title with the Dubai Land Department. Our team manages every step for you, whether you are local or overseas.",
  },
  {
    question: "What is off-plan property?",
    answer:
      "Off-plan property is real estate purchased directly from the developer before or during construction. It typically offers lower entry prices, flexible payment plans linked to construction milestones, and strong capital appreciation potential by handover. We provide access to exclusive off-plan launches from Dubai's leading developers.",
  },
  {
    question: "What is the minimum investment for the Golden Visa?",
    answer:
      "Investing in property worth AED 2 million or more makes you eligible for the UAE Golden Visa, a 10-year renewable residency. This can apply to a single property or a combination of properties. We help you identify qualifying opportunities and coordinate the application process.",
  },
  {
    question: "Can I buy property remotely?",
    answer:
      "Yes. Many of our international clients complete their entire purchase remotely. We arrange virtual viewings, handle documentation digitally, and can act on your behalf through a Power of Attorney where required. Funds are transferred securely and the title is registered in your name.",
  },
  {
    question: "What payment plans are available?",
    answer:
      "Off-plan projects offer a range of flexible payment plans, commonly 50/50, 60/40, 70/30 and post-handover options, with down payments starting from 10%. Some developers offer 1% monthly plans. For secondary market purchases, mortgage financing is available for both residents and non-residents.",
  },
]

export interface WhyDubaiPoint {
  title: string
  description: string
}

export const whyDubai: WhyDubaiPoint[] = [
  {
    title: "Tax-Free Income",
    description: "No income tax, no capital gains tax and no property tax on your Dubai real estate investment.",
  },
  {
    title: "High Rental Yield",
    description: "Dubai offers some of the highest gross rental yields globally, typically between 6% and 9%.",
  },
  {
    title: "Golden Visa Eligibility",
    description: "Invest AED 2M or more and qualify for a 10-year renewable UAE residency for you and your family.",
  },
  {
    title: "Strong Capital Appreciation",
    description: "Prime communities have delivered consistent double-digit price growth in recent years.",
  },
  {
    title: "World-Class Infrastructure",
    description: "Safe, connected and modern — Dubai ranks among the world's best cities for quality of life.",
  },
  {
    title: "Global Investment Hub",
    description: "A stable economy, strategic location and investor-friendly regulations attract global capital.",
  },
]
