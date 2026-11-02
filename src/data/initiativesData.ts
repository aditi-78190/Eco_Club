export interface Initiative {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  metricsTarget: string;
  status: 'Active' | 'Flagship' | 'Ongoing';
  image: string;
}

export const INITIATIVES_DATA: Initiative[] = [
  {
    id: 'tree-plantation',
    title: 'Tree Plantation Drives',
    category: 'Biodiversity & Afforestation',
    tagline: 'Greening Every Corner of ABES EC',
    shortDesc: 'Regular mass plantation drives on campus grounds and neighbouring civic green belts, planting indigenous and oxygen-rich flora.',
    fullDesc: 'The Eco Club organizes scheduled plantation drives to improve local air quality, promote biodiversity, and expand our campus green canopy. Volunteers carefully select native plant species including Neem, Peepal, Gulmohar, and Indian Rosewood to ensure high survival rates and minimal water dependency.',
    objectives: [
      'Plant native and microclimate-resilient tree varieties.',
      'Adopt a tree sponsorship model where students nurture specific saplings.',
      'Create dedicated micro-gardens and medicinal plant corners.',
    ],
    metricsTarget: '500+ Saplings Planted (Sample Goal)',
    status: 'Flagship',
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
  },
  {
    id: 'campus-cleanliness',
    title: 'Campus Cleanliness Campaigns',
    category: 'Waste Management',
    tagline: 'Spotless Green Spaces, Responsible Citizens',
    shortDesc: 'Organized student volunteer plogging runs, cafeteria waste audits, and collective cleanup drives across academic and recreational blocks.',
    fullDesc: 'Cleanliness is the bedrock of sustainability. Through dynamic cleanup drives and active waste audits, we eliminate single-use wrappers, educate students on litter-free corridors, and collaborate with housekeeping teams to ensure proper segregation at the source.',
    objectives: [
      'Conduct monthly zone-by-zone cleanliness drives.',
      'Train students and vendors on clean disposal practices.',
      'Maintain litter-free cafeteria zones through student patrols.',
    ],
    metricsTarget: '12+ Cleanliness Drives Conducted (Sample Goal)',
    status: 'Active',
    image: '/src/assets/images/eco_green_campus_1793624155927.jpg',
  },
  {
    id: 'plastic-free-campus',
    title: 'Plastic-Free Campus Initiatives',
    category: 'Pollution Abatement',
    tagline: 'Phasing Out Single-Use Plastics',
    shortDesc: 'Comprehensive campaigns replacing single-use plastic cups, straws, and cutlery with biodegradable, paper, and metal alternatives.',
    fullDesc: 'Plastic pollution poses lasting damage to our surrounding soil and urban water drainage. Our Plastic-Free Campus Campaign works closely with student cafeterias, departmental pantries, and event organizers to eliminate disposable poly-plastics in favour of reusable bottles and compostable containers.',
    objectives: [
      'Audit single-use plastics across college canteens.',
      'Distribute reusable water tumblers and cloth tote bags.',
      'Host zero-waste student symposiums and college fests.',
    ],
    metricsTarget: '80% Reduction in Disposable Canteen Plastics (Sample Target)',
    status: 'Ongoing',
    image: '/src/assets/images/eco_workshop_students_1793624157345.jpg',
  },
  {
    id: 'e-waste-awareness',
    title: 'E-Waste Awareness & Collection',
    category: 'Resource Recovery',
    tagline: 'Responsible Disposal for the Digital Age',
    shortDesc: 'Dedicated campus drop-off kiosks for defunct electronics, circuit boards, and batteries, partnering with certified green recyclers.',
    fullDesc: 'As an engineering college, electronic waste is an everyday reality. Obsolete peripherals, dead batteries, and discarded cables must never end up in civic landfills where toxic heavy metals leach into groundwater. We maintain safe campus collection points and channel e-waste to certified recyclers.',
    objectives: [
      'Install secure collection bins across computer labs.',
      'Partner with authorised state-certified e-waste recyclers.',
      'Host awareness workshops on lithium battery recycling safety.',
    ],
    metricsTarget: '400+ kg Safe E-Waste Diverted (Sample Goal)',
    status: 'Active',
    image: '/src/assets/images/eco_hero_forest_1793624155237.jpg',
  },
  {
    id: 'sustainability-workshops',
    title: 'Sustainability Workshops',
    category: 'Skill Building',
    tagline: 'Hands-on Learning for Practical Climate Action',
    shortDesc: 'Interactive workshops on compost making, home bio-enzymes, urban gardening, and sustainable engineering techniques.',
    fullDesc: 'Knowledge becomes power when translated into tangible daily habits. Our workshops provide students with actionable DIY skills—from creating home compost pits out of kitchen leftovers to crafting non-toxic organic cleaning agents and understanding carbon footprints.',
    objectives: [
      'Practical vermicomposting and organic terrace farming demos.',
      'Workshops on paper recycling and eco-friendly handicrafts.',
      'Guest lectures by leading environmentalists and researchers.',
    ],
    metricsTarget: '600+ Students Certified & Trained (Sample Goal)',
    status: 'Active',
    image: '/src/assets/images/eco_workshop_students_1793624157345.jpg',
  },
  {
    id: 'environmental-awareness',
    title: 'Environmental Awareness Campaigns',
    category: 'Advocacy & Outreach',
    tagline: 'Inspiring Minds, Influencing Policies',
    shortDesc: 'Street plays (Nukkad Natak), poster design competitions, panel discussions, and digital campaigns for global environmental days.',
    fullDesc: 'Through dynamic creative expression, we make environmental science relatable and urgent. On Earth Day, World Environment Day, and Wildlife Week, the club mobilizes artistic flashmobs, debates, documentary screenings, and interactive quiz bowls.',
    objectives: [
      'Stage impactful street plays during college technical fests.',
      'Publish regular editorial bulletins and digital climate explainers.',
      'Organize inter-collegiate debate competitions on climate policy.',
    ],
    metricsTarget: '2,500+ Student Impressions (Sample Goal)',
    status: 'Active',
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
  },
  {
    id: 'green-tech-projects',
    title: 'Green Technology Projects',
    category: 'CleanTech Innovation',
    tagline: 'THINK. ACT. CODE. WORK GREENER.',
    shortDesc: 'Student-led engineering projects combining IoT sensors, automated botanical irrigation, smart energy meters, and AI eco-auditing.',
    fullDesc: 'At an engineering powerhouse like ABES, green philosophy meets engineering pragmatism. The Tech & Project division builds functional hardware-software prototypes: solar irradiance monitors, automated soil moisture drippers, and energy consumption analyzers.',
    objectives: [
      'Develop smart IoT sensor nodes for campus moisture monitoring.',
      'Build open-source energy tracking software for computer labs.',
      'Prototype solar-powered portable charging stations.',
    ],
    metricsTarget: '3 Working CleanTech Prototypes (Sample Goal)',
    status: 'Flagship',
    image: '/src/assets/images/eco_green_campus_1793624155927.jpg',
  },
];
