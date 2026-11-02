export interface GalleryItem {
  id: string;
  title: string;
  category: 'Plantation Drives' | 'Campus Activities' | 'Workshops' | 'Awareness Campaigns' | 'Club Events';
  date: string;
  location: string;
  caption: string;
  image: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Nurturing Fresh Saplings at Botanical Perimeter',
    category: 'Plantation Drives',
    date: 'October 2026',
    location: 'ABES EC Campus Grounds',
    caption: 'Student volunteers and faculty planting native saplings during the monsoon greening phase.',
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
  },
  {
    id: 'gal-2',
    title: 'Campus Solar & Sustainable Courtyard Walk',
    category: 'Campus Activities',
    date: 'September 2026',
    location: 'Academic Block Courtyard',
    caption: 'A view of the vibrant biodiversity beds, pedestrian walking trails, and solar-paneled campus roofs.',
    image: '/src/assets/images/eco_green_campus_1793624155927.jpg',
  },
  {
    id: 'gal-3',
    title: 'CleanTech Prototyping & Biofiltration Demo',
    category: 'Workshops',
    date: 'October 2026',
    location: 'Innovation Lab',
    caption: 'Tech & Project core members testing a scaled biofiltration soil sensor setup during an engineering workshop.',
    image: '/src/assets/images/eco_workshop_students_1793624157345.jpg',
  },
  {
    id: 'gal-4',
    title: 'Lush Forest Canopy & Air Quality Assessment',
    category: 'Awareness Campaigns',
    date: 'August 2026',
    location: 'Regional Bio-Reserve Visit',
    caption: 'Eco Club research excursion analyzing ancient tree canopies and microclimate temperature differentials.',
    image: '/src/assets/images/eco_hero_forest_1793624155237.jpg',
  },
  {
    id: 'gal-5',
    title: 'Annual Eco Club Core Team Induction',
    category: 'Club Events',
    date: 'August 2026',
    location: 'Bhabha Seminar Hall',
    caption: 'Core team leaders and division members assembling to unveil the yearly environmental charter.',
    image: '/src/assets/images/eco_workshop_students_1793624157345.jpg',
  },
  {
    id: 'gal-6',
    title: 'Hands-on Soil Regeneration & Compost Study',
    category: 'Workshops',
    date: 'September 2026',
    location: 'Eco Club Nursery',
    caption: 'Testing organic vermicompost enrichment for fast-rooting saplings on campus grounds.',
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
  },
  {
    id: 'gal-7',
    title: 'Green Innovation Showcase & Sustainability Pitch',
    category: 'Club Events',
    date: 'October 2026',
    location: 'Incubation Center',
    caption: 'Students pitching clean energy ideas to faculty counselors and guest sustainability mentors.',
    image: '/src/assets/images/eco_green_campus_1793624155927.jpg',
  },
  {
    id: 'gal-8',
    title: 'Campus Zero-Litter Patrol & Segregation Check',
    category: 'Campus Activities',
    date: 'November 2026',
    location: 'Student Plaza',
    caption: 'Volunteers conducting an audit of recycling receptacles and waste segregation compliance.',
    image: '/src/assets/images/eco_plantation_drive_1793624155932.jpg',
  },
];
