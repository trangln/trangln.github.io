// All copy below is sourced directly from Trang Ngoc Le's personal portfolio and CV PDFs.
// Nothing here is invented — figures, clients, and descriptions are reused as provided.

export const profile = {
  name: 'Trang Ngoc Le',
  role: 'Marketing Executive',
  location: 'Helsinki, Finland',
  heroLine: 'Marketing Executive with 5+ years of experience in integrated marketing communications and growth-driven campaigns.',
  intro: `Marketing Executive with 5+ years of experience in the automotive and consumer
services industry, specializing in integrated marketing communications, growth-driven
campaigns, and cross-functional go-to-market execution.`,
  introSecondary: `Proven track record leading nationwide campaigns across digital, social, PR,
events, and dealer networks — delivering measurable impact through data-driven planning and
budget optimization, with a strong interest in sustainable mobility and digital transformation.`,
  email: 'tranglengoc.03@gmail.com',
  linkedin: 'linkedin.com/in/trangngocle',
  linkedinHref: 'https://linkedin.com/in/trangngocle/',
  cvUrl: '/files/trang-ngoc-le-cv.pdf',
}

export const education = [
  {
    school: 'Università degli Studi di Padova',
    country: 'Italy',
    degree: 'Master of Management for Sustainable Firms',
    major: 'Major in Marketing and Digital Transformation',
    years: '2023 – 2025',
    note: 'Master Thesis: "Digital Branding and Sustainable Business Models: The Case of the Automotive Sector"',
    logo: '/images/padova_logo.webp',
  },
  {
    school: 'La Trobe University',
    country: 'Australia',
    degree: 'Bachelor of Financial Management and Marketing',
    years: '2015 – 2019',
    note: 'Award: La Trobe Star Scholarship for talented student',
    logo: '/images/latrobe_logo.webp',
  },
]

export const expertise = [
  { label: 'Marketing Planning', since: '2020' },
  { label: 'Digital Strategy', since: '2020' },
  { label: 'CRM & Branding', since: '2022' },
  { label: 'ESG Communication', since: '2023' },
]

export type Job = {
  company: string
  role: string
  period: string
  logo?: string
  points: string[]
}

export const experience: Job[] = [
  {
    company: 'Language Link Vietnam',
    role: 'Product Marketing Team Leader',
    period: 'Jan – Apr 2026',
    points: [
      'Planned and executed integrated product marketing campaigns (digital, events, local activations) to drive lead generation and conversion',
      'Managed and optimized performance campaigns across paid media (Google Ads, Meta Ads) — content, landing pages, and A/B testing to improve CPL, CTR and CVR',
      'Monitored key metrics (lead quality, CPL, ROI) and delivered weekly performance reports with actionable insights',
      'Executed local marketing initiatives, events, partnerships and POSM production, coordinating budget and external vendors',
    ],
  },
  {
    company: 'Yamaha Motor Vietnam',
    role: 'Marketing Executive',
    period: '2020 – 2023',
    logo: '/images/yamaha_logo.webp',
    points: [
      'Led planning and execution of 50+ nationwide integrated marketing campaigns across PR, digital, social media, dealer activations and events for three product lines',
      'Coordinated cross-functional teams (Sales Planning, Dealer Network, Marketing) to align campaign strategy with sales objectives',
      'Achieved 10% organic audience growth and drove 55% conversion from marketing leads to purchase inquiries',
      'Managed marketing P&L and annual campaign budgets, delivering monthly forecasts and performance recommendations',
    ],
  },
  {
    company: 'CJ CGV Vietnam',
    role: 'Marketing Operation Supervisor',
    period: '2019 – 2020',
    logo: '/images/cjcgv_logo.webp',
    points: [
      'Led execution of nationwide movie premiere events and customer engagement campaigns',
      'Managed 30+ part-time staff for operations and marketing activities during high-traffic periods',
      'Analyzed ticket sales and concession performance to optimize promotional campaigns',
      'Contributed to 40% revenue growth in Q1 through improved marketing activities and operational workflows',
    ],
  },
  {
    company: 'Fit City & Baba Yoga Studio',
    role: 'Sale & Marketing Specialist',
    period: '2017 – 2019',
    points: [
      'Coordinated partner communications and cross-brand campaigns',
      'Designed integrated communication plans',
      'Implemented customer retention initiatives and membership campaigns',
    ],
  },
]

export const skills = {
  technical: [
    { category: 'CRM', items: 'Salesforce (Sales Cloud, Marketing Cloud)' },
    { category: 'Analytics', items: 'Power BI, Excel' },
    { category: 'Marketing Platforms', items: 'Google Ads, Meta Ads, Zalo Ads, Email Marketing' },
    { category: 'Design', items: 'Canva' },
  ],
  soft: [
    'Project Management',
    'Planning & Forecasting',
    'Budget Management',
    'Reporting & Analysis',
    'Social Media Marketing',
    'Multitasking',
    'Teamwork & Self-management',
  ],
  languages: [
    { name: 'English', level: 'C1' },
    { name: 'Italian', level: 'A2' },
    { name: 'Vietnamese', level: 'Native' },
  ],
}

export type ProjectImage = { src: string; alt: string; orientation: 'portrait' | 'landscape' | 'square' }

export type Project = {
  index: string
  client: string
  title: string
  role?: string
  overview: string
  images: ProjectImage[]
  featuredIndex?: number
}

export const projects: Project[] = [
  {
    index: '01',
    client: 'Crédit Agricole CIB',
    title: 'ESG Communication Campaign',
    role: 'Marketing & Communication Strategy',
    overview:
      'Developed a responsible-branding communication plan that aligned ESG commitments with stakeholder expectations.',
    images: [
      { src: '/images/credit_agricole_2.webp', alt: 'Crédit Agricole "Save your money, and your future" campaign visual', orientation: 'portrait' },
      { src: '/images/credit_agricole_1.webp', alt: 'Crédit Agricole Italia Instagram profile grid with ESG content', orientation: 'portrait' },
      { src: '/images/credit_agricole_4.webp', alt: 'Crédit Agricole Italia Instagram profile with "We Believe In ESG" content series', orientation: 'portrait' },
      { src: '/images/credit_agricole_3.webp', alt: 'Survey results on customer attitudes toward ESG banking products', orientation: 'portrait' },
    ],
  },
  {
    index: '02',
    client: 'Paladin Vigne e Vini',
    title: 'CRM Strategy Development',
    role: 'CRM Analyst',
    overview: 'Analyzed customer database to support targeted marketing actions and segmentation.',
    images: [
      { src: '/images/paladin.webp', alt: 'Paladin Vigne e Vini market analysis and marketing strategy presentation', orientation: 'portrait' },
    ],
  },
  {
    index: '03',
    client: 'Salesforce CRM',
    title: 'PwC Italy Case Study',
    role: 'Salesforce Platform Analyst',
    overview:
      'Applied Sales Cloud & Marketing Cloud for customer lifecycle management, designing CRM workflows and reporting dashboards in a real-case scenario with MOTIO scooters.',
    images: [
      { src: '/images/motto_2.webp', alt: 'MOTIO lead management process map from Sales Cloud & Marketing Cloud work', orientation: 'landscape' },
      { src: '/images/motto_1.webp', alt: 'MOTIO re-engagement email template mockup', orientation: 'portrait' },
      { src: '/images/motto_3.webp', alt: 'MOTIO seasonal discount promotional email mockup', orientation: 'portrait' },
    ],
  },
  {
    index: '04',
    client: 'Yamaha Town Group',
    title: 'Social Media',
    role: 'Marketing Executive',
    overview: 'B2C marketing plans across PR, social media, events & digital channels.',
    featuredIndex: 1,
    images: [
      { src: '/images/yamaha_2.webp', alt: 'Yamaha Town Group Women’s Day social campaign visual', orientation: 'landscape' },
      { src: '/images/yamaha_3.webp', alt: 'Yamaha Janus promotional social media post', orientation: 'portrait' },
      { src: '/images/yamaha_4.webp', alt: 'Yamaha Town Group Instagram reel grid', orientation: 'portrait' },
      { src: '/images/yamaha_1.webp', alt: 'Yamaha Exciter and XSR155 rider lifestyle campaign posts', orientation: 'landscape' },
      { src: '/images/yamaha_5.webp', alt: 'Yamaha Janus lifestyle promotional posts', orientation: 'square' },
    ],
  },
  {
    index: '05',
    client: 'IBM Watson',
    title: 'AIaaS Project',
    overview: 'Designed a digital product-service innovation framework as part of an applied strategic project.',
    images: [],
  },
]

export const certificates = [
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    year: '2025',
    image: '/images/google_ads_search_certification.webp',
  },
  {
    name: 'Inbound Marketing Certified',
    issuer: 'HubSpot Academy',
    year: '2025',
    image: '/images/inbound_marketing_certification.webp',
  },
  {
    name: 'Salesforce Trailhead — Marketing Cloud Basics',
    issuer: 'Salesforce',
    year: '2025',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
