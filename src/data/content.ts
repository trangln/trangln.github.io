// All copy below is sourced directly from Trang Ngoc Le's personal portfolio and CV PDFs.
// Nothing here is invented; figures, clients, and descriptions are reused as provided.

export const profile = {
  name: 'Trang Ngoc Le',
  role: 'Marketing Executive',
  heroLine: 'Marketing Executive with 5+ years of experience in integrated marketing communications and growth-driven campaigns.',
  intro: `Marketing Executive with 5+ years of experience in the automotive and consumer
services industry, specializing in integrated marketing communications, growth-driven
campaigns, and cross-functional go-to-market execution.`,
  introSecondary: `Proven track record leading nationwide campaigns across digital, social, PR,
events, and dealer networks, delivering measurable impact through data-driven planning and
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
    period: '2026',
    logo: '/images/llv_logo.webp',
    points: [
      'Planned and executed integrated product marketing campaigns (digital, events, local activations) to drive lead generation and conversion',
      'Managed and optimized performance campaigns across paid media (Google Ads, Meta Ads): content, landing pages, and A/B testing to improve CPL, CTR and CVR',
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
    logo: '/images/fitcity_logo.webp',
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
    { category: 'Analytics', items: 'Power BI, Excel, R' },
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
}

export const projects: Project[] = [
  {
    index: '01',
    client: 'Language Link Vietnam',
    title: 'Product Marketing Campaigns',
    role: 'Product Marketing Team Leader',
    overview:
      'Planned and executed integrated product marketing campaigns, digital, events and local activations, to drive lead generation and conversion.',
    images: [
      { src: '/images/llv_1.webp', alt: 'Language Link Academic Summer Carnival event campaign graphic', orientation: 'square' },
      { src: '/images/llv_7.webp', alt: 'Language Link Academic teacher and student in an English learning campaign photo', orientation: 'square' },
      { src: '/images/llv_2.webp', alt: 'Language Link Academic summer clubs 2026 campaign graphic', orientation: 'square' },
      { src: '/images/llv_3.webp', alt: 'Language Link Academic Tết Lunar New Year event poster', orientation: 'portrait' },
      { src: '/images/llv_6.webp', alt: 'Language Link Academic Women’s Day appreciation campaign poster', orientation: 'portrait' },
      { src: '/images/llv_4.webp', alt: 'Language Link Academic Tết event recap photo collage', orientation: 'square' },
    ],
  },
  {
    index: '02',
    client: 'Yamaha Town Group',
    title: 'Social Media',
    role: 'Marketing Executive',
    overview: 'B2C marketing plans across PR, social media, events & digital channels.',
    images: [
      { src: '/images/yamaha_1.webp', alt: 'Yamaha "Deal ngọt ngào" 0% installment promotion for female customers', orientation: 'landscape' },
      { src: '/images/yamaha_2.webp', alt: 'Yamaha service center maintenance gift campaign, 7 days left', orientation: 'square' },
      { src: '/images/yamaha_3.webp', alt: 'Yamaha service center "maintenance today, gift now" campaign', orientation: 'square' },
      { src: '/images/yamaha_4.webp', alt: 'Yamaha XSR155R launch campaign lifestyle photo collage', orientation: 'square' },
      { src: '/images/yamaha_5.webp', alt: 'Yamaha service center Yamalube loyalty voucher promotion', orientation: 'landscape' },
      { src: '/images/yamaha_6.webp', alt: 'Yamaha "Golden maintenance month" Yamalube gift campaign', orientation: 'square' },
      { src: '/images/yamaha_7.webp', alt: 'Yamaha oil change lucky draw campaign for a Sirius motorbike', orientation: 'landscape' },
      { src: '/images/yamaha_8.webp', alt: 'Yamaha Grande showroom activation styled as a Greece check-in', orientation: 'landscape' },
      { src: '/images/yamaha_9.webp', alt: 'Yamaha Grande showroom activation styled as a Paris check-in', orientation: 'landscape' },
      { src: '/images/yamaha_10.webp', alt: 'Yamaha Exciter 155 VVA "Ride the next level" product campaign', orientation: 'landscape' },
      { src: '/images/yamaha_11.webp', alt: 'Yamaha FreeGo and Janus joint promotional campaign', orientation: 'landscape' },
      { src: '/images/yamaha_12.webp', alt: 'Yamaha NEOS electric scooter "Shine your style" pre-order campaign', orientation: 'portrait' },
    ],
  },
  {
    index: '03',
    client: 'Crédit Agricole CIB',
    title: 'ESG Communication Campaign',
    role: 'Marketing & Communication Strategy',
    overview:
      'Developed a responsible-branding communication plan that aligned ESG commitments with stakeholder expectations.',
    images: [
      { src: '/images/credit_agricole_1.webp', alt: 'Crédit Agricole Italia Instagram post concept trilogy aligned to Environmental, Social and Governance themes', orientation: 'landscape' },
      { src: '/images/credit_agricole_2.webp', alt: 'ESG benchmarking chart comparing Crédit Agricole against UniCredit, Inditex and Enel', orientation: 'landscape' },
    ],
  },
  {
    index: '04',
    client: 'Paladin Vigne e Vini',
    title: 'CRM Strategy Development',
    role: 'CRM Analyst',
    overview: 'Analyzed customer database to support targeted marketing actions and segmentation.',
    images: [
      { src: '/images/paladin_1.webp', alt: 'Paladin Vigne e Vini market analysis slide on digital transformation, sustainability and personalization trends', orientation: 'landscape' },
      { src: '/images/paladin_2.webp', alt: 'Paladin Vigne e Vini marketing strategy slide proposing a wine club and a bee biodiversity initiative', orientation: 'landscape' },
      { src: '/images/paladin_3.webp', alt: 'Paladin Vigne e Vini marketing strategy slide on social media engagement and internal community initiatives', orientation: 'landscape' },
    ],
  },
  {
    index: '05',
    client: 'Salesforce CRM',
    title: 'PwC Italy Case Study',
    role: 'Salesforce Platform Analyst',
    overview:
      'Applied Sales Cloud & Marketing Cloud for customer lifecycle management, designing CRM workflows and reporting dashboards in a real-case scenario with MOTIO scooters.',
    images: [
      { src: '/images/salesforce_1.webp', alt: 'MOTIO marketing campaign and re-engagement process map across Sales Cloud and Marketing Cloud', orientation: 'landscape' },
      { src: '/images/salesforce_2.webp', alt: 'MVP scope diagram connecting Salesforce Sales Cloud and Marketing Cloud capabilities', orientation: 'landscape' },
      { src: '/images/salesforce_3.webp', alt: 'Salesforce Automation Flow diagrams for the MOTIO lead and test-ride process', orientation: 'landscape' },
    ],
  },
]

export const certificates = [
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    year: '2025',
  },
  {
    name: 'Inbound Marketing Certified',
    issuer: 'HubSpot Academy',
    year: '2025',
  },
  {
    name: 'Salesforce Trailhead: Marketing Cloud Basics',
    issuer: 'Salesforce',
    year: '2025',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Career', href: '#experience' },
  { label: 'Work', href: '#work' },
]
