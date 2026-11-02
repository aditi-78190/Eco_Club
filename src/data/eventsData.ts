export interface ClubEvent {
  id: string;
  title: string;
  tab: 'upcoming' | 'ongoing' | 'past';
  statusLabel: string;
  date: string;
  time: string;
  venue: string;
  shortDesc: string;
  fullDesc: string;
  registrationOpen: boolean;
  registeredCount: number;
  maxSeats?: number;
  image: string;
  category: string;
  keyTakeaways: string[];
}

export const EVENTS_DATA: ClubEvent[] = [
  {
    id: 'evt-1',
    title: 'Van Mahotsav 2026: Campus Mega Plantation Drive',
    tab: 'upcoming',
    statusLabel: 'Upcoming',
    date: 'November 14, 2026',
    time: '09:30 AM – 01:30 PM IST',
    venue: 'Main Sports Complex & Botanical Perimeter, ABES EC',
    shortDesc: 'Join 200+ students and faculty members in planting native trees, saplings, and building the new campus herbal conservation belt.',
    fullDesc: 'Van Mahotsav is our flagship greening carnival. Every participant receives gardening tools, an assigned sapling with a unique botanical geo-tag, and a digital certificate of eco-adoption. Free saplings will also be given out to taking home.',
    registrationOpen: true,
    registeredCount: 84,
    maxSeats: 150,
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
    category: 'Plantation & Biodiversity',
    keyTakeaways: [
      'Hands-on tree plantation and soil preparation training',
      'Certificate of Green Stewardship & volunteer hours',
      'Complimentary herbal seedling kit for home cultivation',
    ],
  },
  {
    id: 'evt-2',
    title: 'CodeGreen Hackathon: Engineering Sustainable Solutions',
    tab: 'upcoming',
    statusLabel: 'Upcoming',
    date: 'November 22, 2026',
    time: '10:00 AM – 06:00 PM IST',
    venue: 'Innovation & Incubation Center, Block D, ABES EC',
    shortDesc: 'A full-day hackathon focused on clean energy algorithms, environmental IoT, carbon footprint trackers, and smart waste management.',
    fullDesc: 'Under the motto "THINK. ACT. CODE. WORK GREENER.", the Tech & Project division brings together coders, designers, and innovators to solve pressing civic sustainability challenges. Cash prizes, mentorship, and project incubation support provided.',
    registrationOpen: true,
    registeredCount: 42,
    maxSeats: 60,
    image: '/src/assets/images/eco_workshop_students_1793624157345.jpg',
    category: 'Green Tech & Hackathon',
    keyTakeaways: [
      'Industry judges and cleantech mentorship',
      'Opportunities for funded campus deployment of winning ideas',
      'Cash prize pool and certificates for top 3 teams',
    ],
  },
  {
    id: 'evt-3',
    title: 'Plastic-Free Campus Audit & Awareness Week',
    tab: 'ongoing',
    statusLabel: 'Active This Week',
    date: 'November 02 – November 08, 2026',
    time: 'All Day (Field Rounds at 01:00 PM)',
    venue: 'Student Cafeterias, Food Courts, and Academic Corridors',
    shortDesc: 'Live field inspections, waste segregation auditing, and distributing cloth alternatives across college canteen kiosks.',
    fullDesc: 'An intensive week-long push to audit disposable packaging across vendor counters. Students can sign the zero-single-use-plastic pledge wall and collect reusable bamboo mugs at our club desk.',
    registrationOpen: true,
    registeredCount: 190,
    image: '/src/assets/images/eco_green_campus_1793624155927.jpg',
    category: 'Waste Auditing & Advocacy',
    keyTakeaways: [
      'Sign the College Plastic-Free Charter',
      'Collect your reusable Eco Club canteen kit',
      'Daily quizzes and live badge awards',
    ],
  },
  {
    id: 'evt-4',
    title: 'National Pollution Prevention Day Workshop & Clean-Up',
    tab: 'past',
    statusLabel: 'Completed',
    date: 'October 18, 2026',
    time: '11:00 AM – 03:00 PM IST',
    venue: 'Bhabha Seminar Hall & Campus Quadrangle',
    shortDesc: 'A symposium on air pollution indices in the NCR region followed by a campus-wide plogging drive gathering over 140kg of sorted trash.',
    fullDesc: 'Featured expert talks from environmental engineers on PM2.5 mitigation in Ghaziabad, followed by 120 student volunteers conducting a structured cleanup of outdoor student areas.',
    registrationOpen: false,
    registeredCount: 120,
    image: '/src/assets/images/eco_hero_forest_1793624155237.jpg',
    category: 'Symposium & Cleanliness',
    keyTakeaways: [
      'NCR Air Quality Data analysis session',
      'Over 140 kg of paper and dry waste safely sent to recycling',
    ],
  },
  {
    id: 'evt-5',
    title: 'E-Waste Drop-Off & Recovery Drive Vol. 1',
    tab: 'past',
    statusLabel: 'Completed',
    date: 'September 25, 2026',
    time: '10:00 AM – 04:30 PM IST',
    venue: 'Mechanical & Electronics Workshop Complex',
    shortDesc: 'Collection of over 210 obsolete electronics, cables, batteries, and old motherboards, handed over to authorized recyclers.',
    fullDesc: 'Students and faculty dropped off old computer peripherals, broken earphones, and mobile batteries. Our certified recycling partner provided a certificate of safe hazardous metal dismantling.',
    registrationOpen: false,
    registeredCount: 95,
    image: '/src/assets/images/eco_workshop_students_1793624157345.jpg',
    category: 'E-Waste Recovery',
    keyTakeaways: [
      '210+ electronic devices collected and catalogued',
      'Zero landfill disposal verified',
    ],
  },
  {
    id: 'evt-6',
    title: 'Green Campus Orientation & Herbal Garden Sowing',
    tab: 'past',
    statusLabel: 'Completed',
    date: 'August 12, 2026',
    time: '02:00 PM – 05:00 PM IST',
    venue: 'Central Lawns & Eco Club Nursery',
    shortDesc: 'Welcoming first-year engineering students with a ceremonial herbal sowing ceremony and introductory sustainability orientation.',
    fullDesc: 'Over 180 incoming freshmen were introduced to the club divisions, college green policies, and participated in planting Tulsi, Aloe Vera, and Ashwagandha beds.',
    registrationOpen: false,
    registeredCount: 180,
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
    category: 'Orientation & Biodiversity',
    keyTakeaways: [
      'Welcomed 180+ new students to the green movement',
      'Planted 75+ medicinal plant saplings in the campus herbal nursery',
    ],
  },
];
