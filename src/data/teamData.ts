export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'faculty' | 'leadership' | 'division';
  division?: string;
  isHead?: boolean;
  department?: string;
  bio?: string;
  avatarColor?: string;
}

export interface DivisionInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const DIVISIONS: DivisionInfo[] = [
  {
    id: 'tech-project',
    name: 'Tech & Project',
    tagline: 'Sustainability Through Technology',
    description: 'Pioneering IoT energy monitoring, green software initiatives, solar-powered gadgets, and technological environmental solutions on campus.',
    iconName: 'Cpu',
  },
  {
    id: 'event-management',
    name: 'Event & Management',
    tagline: 'Drives, Workshops & More',
    description: 'Planning, coordinating logistics, and executing impactful plantation drives, cleanliness blitzes, eco-quizzes, and inter-college symposiums.',
    iconName: 'CalendarCheck',
  },
  {
    id: 'social-content',
    name: 'Social Media & Content',
    tagline: 'The Voice of the Club',
    description: 'Crafting compelling environmental storytelling, visual reels, newsletters, and digital advocacy campaigns across college social channels.',
    iconName: 'Share2',
  },
  {
    id: 'pr-outreach',
    name: 'PR & Outreach',
    tagline: 'Connecting With the World',
    description: 'Building alliances with NGOs, environmental agencies, municipal authorities, alumni green leaders, and external student chapters.',
    iconName: 'Globe',
  },
  {
    id: 'creative-decor',
    name: 'Creative & Decor',
    tagline: 'Designing a Greener Look',
    description: 'Designing eco-friendly event stages, upcycled installations, nature typography, posters, and campus awareness installations.',
    iconName: 'Palette',
  },
  {
    id: 'registration',
    name: 'Registration',
    tagline: 'Welcoming Every New Member',
    description: 'Overseeing membership onboarding, event delegate passes, volunteer allocation, and ensuring seamless student participation.',
    iconName: 'UserCheck',
  },
];

export const FACULTY_COUNSELORS: TeamMember[] = [
  {
    id: 'fc-1',
    name: 'Mr. Abhishek Shukla',
    role: 'Faculty Counselor',
    category: 'faculty',
    department: 'ABES Engineering College',
    bio: 'Guiding student environmental leadership and mentoring campus sustainability and green engineering research programs.',
    avatarColor: 'from-emerald-800 to-green-900',
  },
  {
    id: 'fc-2',
    name: 'Dr. Divyanshi Sharma',
    role: 'Faculty Counselor',
    category: 'faculty',
    department: 'ABES Engineering College',
    bio: 'Championing ecological consciousness, waste reduction initiatives, and youth community climate action across departments.',
    avatarColor: 'from-teal-800 to-emerald-950',
  },
];

export const CORE_LEADERSHIP: TeamMember[] = [
  {
    id: 'lead-1',
    name: 'Abhinav Kumar',
    role: 'General Secretary',
    category: 'leadership',
    bio: 'Directing club operations, campus policy representations, and long-term environmental sustainability roadmaps.',
    avatarColor: 'from-[#123D2A] to-[#1F8A55]',
  },
  {
    id: 'lead-2',
    name: 'Shaurya Pratap Singh',
    role: 'Joint Secretary',
    category: 'leadership',
    bio: 'Facilitating cross-division synergy, campaign executions, volunteer deployments, and event management operations.',
    avatarColor: 'from-emerald-700 to-green-800',
  },
  {
    id: 'lead-3',
    name: 'To Be Announced',
    role: 'Treasurer',
    category: 'leadership',
    bio: 'Managing financial accounting, event budgeting, sponsor allocations, and transparency in club fund disbursements.',
    avatarColor: 'from-stone-700 to-stone-900',
  },
];

export const DIVISION_MEMBERS: TeamMember[] = [
  // Tech & Project
  {
    id: 'tp-1',
    name: 'Sarthak Mishra',
    role: 'Division Head',
    category: 'division',
    division: 'Tech & Project',
    isHead: true,
    bio: 'Leading technological green innovations, web platforms, and automated energy tracking prototypes.',
    avatarColor: 'from-emerald-800 to-teal-900',
  },
  {
    id: 'tp-2',
    name: 'Himanshu Yadav',
    role: 'Core Member',
    category: 'division',
    division: 'Tech & Project',
    bio: 'Hardware integration and smart campus energy reduction projects.',
    avatarColor: 'from-green-800 to-emerald-700',
  },
  {
    id: 'tp-3',
    name: 'Tanishque Tyagi',
    role: 'Core Member',
    category: 'division',
    division: 'Tech & Project',
    bio: 'Software development, digital assets, and environmental sensor dashboards.',
    avatarColor: 'from-teal-800 to-green-900',
  },

  // Event & Management
  {
    id: 'em-1',
    name: 'Adarsh Singh',
    role: 'Core Member',
    category: 'division',
    division: 'Event & Management',
    bio: 'Ground operations, vendor negotiations, and crowd management for large campus drives.',
    avatarColor: 'from-emerald-900 to-[#123D2A]',
  },
  {
    id: 'em-2',
    name: 'Raj Kurele',
    role: 'Core Member',
    category: 'division',
    division: 'Event & Management',
    bio: 'Logistical scheduling, permission workflows, and venue arrangements.',
    avatarColor: 'from-green-900 to-emerald-800',
  },
  {
    id: 'em-3',
    name: 'Shatakshi Chauhan',
    role: 'Core Member',
    category: 'division',
    division: 'Event & Management',
    bio: 'Event coordination, speaker liaison, and volunteer briefing sessions.',
    avatarColor: 'from-teal-900 to-emerald-700',
  },

  // Social Media & Content
  {
    id: 'sm-1',
    name: 'Shivam Gupta',
    role: 'Core Member',
    category: 'division',
    division: 'Social Media & Content',
    bio: 'Video editing, social engagement algorithms, and live event coverage.',
    avatarColor: 'from-[#1F8A55] to-[#123D2A]',
  },
  {
    id: 'sm-2',
    name: 'Sachin',
    role: 'Core Member',
    category: 'division',
    division: 'Social Media & Content',
    bio: 'Editorial copywriting, environmental article writing, and newsletter curation.',
    avatarColor: 'from-emerald-800 to-green-950',
  },
  {
    id: 'sm-3',
    name: 'Srajan Gupta',
    role: 'Core Member',
    category: 'division',
    division: 'Social Media & Content',
    bio: 'Graphic content strategies, Instagram stories, and visual climate micro-campaigns.',
    avatarColor: 'from-green-800 to-teal-900',
  },

  // PR & Outreach
  {
    id: 'pr-1',
    name: 'Ashwin Pratap Singh',
    role: 'Core Member',
    category: 'division',
    division: 'PR & Outreach',
    bio: 'External partnerships, NGO coordination, and inter-collegiate green alliances.',
    avatarColor: 'from-[#123D2A] to-emerald-800',
  },
  {
    id: 'pr-2',
    name: 'Saraswati Singh',
    role: 'Core Member',
    category: 'division',
    division: 'PR & Outreach',
    bio: 'Student body outreach, faculty communications, and green community advocacy.',
    avatarColor: 'from-emerald-700 to-[#123D2A]',
  },

  // Creative & Decor
  {
    id: 'cd-1',
    name: 'Shivendra Singh Baghel',
    role: 'Core Member',
    category: 'division',
    division: 'Creative & Decor',
    bio: 'Biodegradable installations, stage backdrops, and creative sustainable craftwork.',
    avatarColor: 'from-teal-800 to-emerald-800',
  },
  {
    id: 'cd-2',
    name: 'Niyati Kharbanda',
    role: 'Core Member',
    category: 'division',
    division: 'Creative & Decor',
    bio: 'Upcycling art concepts, visual brand identity, and botanical exhibition displays.',
    avatarColor: 'from-green-900 to-emerald-900',
  },

  // Registration
  {
    id: 'reg-1',
    name: 'Ujjwal Singh',
    role: 'Core Member',
    category: 'division',
    division: 'Registration',
    bio: 'Delegate ticketing, attendee verification, and database management.',
    avatarColor: 'from-[#1F8A55] to-green-950',
  },
  {
    id: 'reg-2',
    name: 'Anand Rai',
    role: 'Core Member',
    category: 'division',
    division: 'Registration',
    bio: 'Membership onboarding desk, helpdesk queries, and digital attendance validation.',
    avatarColor: 'from-[#123D2A] to-emerald-700',
  },
];
