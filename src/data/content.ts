// All copy below is sourced directly from Trang Ngoc Le's personal portfolio PDF.
// Nothing here is invented — figures, clients, and descriptions are reused as provided.

export const profile = {
  name: 'Trang Ngoc Le',
  role: 'Marketing Executive',
  location: 'Padova, Italy',
  heroLine: 'Marketing planning, digital branding, CRM and strategic communication — across Asia and Europe.',
  intro: `I'm a marketing professional with experience across Asia and Europe, specializing in
marketing planning, digital branding, CRM, and strategic communication.`,
  introSecondary: `My work combines business logic, consumer psychology, and innovative digital
tools to create marketing strategies that strengthen brand identity, grow audiences, and support
sustainable business impact.`,
  email: 'tranglengoc.03@gmail.com',
  phone: '+39 351 3714399',
  phoneHref: '+393513714399',
  linkedin: 'linkedin.com/in/ngoc-trang-le',
  linkedinHref: 'https://linkedin.com/in/ngoc-trang-le',
}

export const education = [
  {
    school: 'Università degli Studi di Padova',
    country: 'Italy',
    degree: 'Master of Management for Sustainable Firms',
    major: 'Major in Marketing and Digital Transformation',
    logo: '/images/padova_logo.webp',
  },
  {
    school: 'La Trobe University',
    country: 'Australia',
    degree: 'Bachelor of Business Administration (BBA)',
    major: 'Major in Financial Management and Marketing',
    logo: '/images/latrobe_logo.webp',
  },
]

export const expertise = [
  { label: 'Marketing Planning', since: '2020' },
  { label: 'Digital Strategy', since: '2020' },
  { label: 'CRM & Branding', since: '2022' },
  { label: 'ESG Communication', since: '2023' },
]

export const experience = [
  {
    company: 'Yamaha Motor Vietnam',
    role: 'Sales Admin & Marketing Executive',
    logo: '/images/yamaha_logo.webp',
    points: [
      'Led full-cycle B2C marketing plans across PR, social media, events & digital channels',
      'Drove 10% organic audience growth and stable cross-channel engagement',
      'Managed 50+ nationwide campaigns, achieving 55% conversion from marketing leads',
      'Oversaw P&L reporting, forecasting, budget optimization',
    ],
  },
  {
    company: 'CJ CGV Vietnam',
    role: 'Marketing Operation Supervisor',
    logo: '/images/cjcgv_logo.webp',
    points: [
      'Organized nationwide movie premiere events & indoor marketing campaigns',
      'Optimized operation workflows → contributed to 40% revenue increase (Q1 2019)',
      'Led hiring, training & management of part-time staff',
      'Produced detailed weekly analytics on footfall, sales & event ROI',
    ],
  },
]

export type ProjectImage = { src: string; alt: string; orientation: 'portrait' | 'landscape' | 'square' }

export type Project = {
  index: string
  client: string
  title: string
  role: string
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
    title: 'PwC MOTIO Project',
    role: 'Salesforce Platform Analyst',
    overview: 'Hands-on work with Sales Cloud & Marketing Cloud in a real-case scenario with MOTIO scooters.',
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
]

export const certificates = [
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google',
    image: '/images/google_ads_search_certification.webp',
  },
  {
    name: 'Inbound Marketing Certified',
    issuer: 'HubSpot Academy',
    image: '/images/inbound_marketing_certification.webp',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
