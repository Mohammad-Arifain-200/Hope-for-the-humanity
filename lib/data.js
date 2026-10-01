import {
  Apple,
  BookOpen,
  HeartPulse,
  Droplets,
  HeartHandshake,
  Backpack,
} from 'lucide-react';

export const services = [
  { title: 'Healthy Food', icon: Apple, description: 'Nutritious meals for children in need, helping them grow stronger and healthier.', link: 'Make a donation' },
  { title: 'Education', icon: BookOpen, description: 'Access to quality education to empower children and build brighter futures.', link: 'Make a donation' },
  { title: 'Medical', icon: HeartPulse, description: 'Essential healthcare and medical support for vulnerable communities.', link: 'Make a donation' },
  { title: 'Pure Water', icon: Droplets, description: 'Clean and safe water solutions for healthier and happier communities.', link: 'Make a donation' },
  { title: 'Love & Care', icon: HeartHandshake, description: 'A safe and caring environment for every child to feel valued and supported.', link: 'Learn & Participate' },
  { title: 'Travel Activities', icon: Backpack, description: 'Meaningful experiences and recreational activities to inspire confidence.', link: 'Make a donation' },
];

export const causes = [
  {
    title: 'Support Rural Education',
    description: 'Help us build schools and provide learning materials for children in remote areas.',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1100&q=85',
  },
  {
    title: 'Food for Every Child',
    description: 'Nutritious meals to fight hunger and give children the energy to learn and grow.',
    image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1100&q=85',
  },
  {
    title: 'Clean Water Initiative',
    description: 'Bring clean and safe drinking water to communities in need.',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1100&q=85',
  },
];

export const stats = [
  { value: '12,500+', label: 'Children Supported', icon: '✦' },
  { value: '25+', label: 'Communities Reached', icon: '♥' },
  { value: '100+', label: 'Clean Water Wells', icon: '◉' },
  { value: '50+', label: 'Schools Improved', icon: '▣' },
];

export const testimonials = [
  { name: 'Amina Rahman', role: 'Parent, Bangladesh', quote: 'The Hope Project gave my children hope and a chance for a better future. We are forever grateful.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
  { name: 'Daniel Kim', role: 'Volunteer', quote: 'Volunteering with The Hope Project has been a life-changing experience. These children inspire me every day.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  { name: 'Sarah Ahmed', role: 'Donor', quote: 'Their work is transparent, impactful and truly makes a difference in communities.', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80' },
];

export const posts = [
  {
    slug: 'new-school-opens-rural-village',
    date: 'Aug 12, 2026',
    category: 'Education',
    title: 'New School Opens in Rural Village',
    description: 'A new school is bringing education and hope to hundreds of children.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
    content: [
      'This month, The Hope Project opened a new community school designed to serve children who previously travelled long distances to attend class.',
      'The school includes bright classrooms, a reading corner and teacher support resources. Local families helped shape the project from the planning stage onward.',
      'Our education team will continue working with teachers and community leaders to improve attendance, learning outcomes and long-term sustainability.'
    ]
  },
  {
    slug: 'clean-water-changes-lives',
    date: 'Jul 28, 2026',
    category: 'Water',
    title: 'Clean Water Changes Lives',
    description: 'We installed 10 new water wells in underserved communities.',
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85',
    content: [
      'Reliable access to safe water changes daily life. It reduces preventable illness and gives families more time for school, work and caregiving.',
      'Our latest initiative installed ten community water points with local maintenance committees trained to keep the systems operating.',
      'The project combines infrastructure with hygiene education so the benefits can last well beyond installation day.'
    ]
  },
  {
    slug: 'a-brighter-future-together',
    date: 'Jul 10, 2026',
    category: 'Community',
    title: 'A Brighter Future Together',
    description: 'Thanks to our supporters, more children now have access to education, nutrition and care.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85',
    content: [
      'Every contribution becomes part of a larger network of support for children and families.',
      'Over the past year, our teams expanded school support, food assistance and primary care access across several communities.',
      'We remain focused on practical, measurable programs built in partnership with local people.'
    ]
  },
  {
    slug: 'volunteers-bring-new-energy',
    date: 'Jun 19, 2026',
    category: 'Volunteer',
    title: 'Volunteers Bring New Energy',
    description: 'Meet the volunteers supporting learning, events and community outreach.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85',
    content: [
      'Volunteers help us extend our reach in practical, human ways—from tutoring children to organizing awareness events.',
      'This season, new volunteers joined our field teams and contributed hundreds of hours to local programs.',
      'Their contribution strengthens communities while also creating meaningful personal experiences.'
    ]
  },
  {
    slug: 'health-camp-supports-families',
    date: 'May 31, 2026',
    category: 'Medical',
    title: 'Health Camp Supports Families',
    description: 'A mobile health camp offered basic screenings and medical guidance to families.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    content: [
      'Access to basic health screening can prevent small problems from becoming serious ones.',
      'Our mobile medical team provided consultations, referrals and health education during a two-day camp.',
      'The program also connected high-risk patients with local clinics for follow-up care.'
    ]
  },
  {
    slug: 'nutrition-program-reaches-more-children',
    date: 'May 15, 2026',
    category: 'Food',
    title: 'Nutrition Program Reaches More Children',
    description: 'Our school meal program has expanded to two additional learning centres.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85',
    content: [
      'A good meal can make a major difference to a child’s ability to focus and participate in school.',
      'The expanded program now supports two additional learning centres with balanced meals prepared locally.',
      'We are also working with families to share practical nutrition guidance using affordable local foods.'
    ]
  }
];

export const projects = [
  { title: 'Education for Every Child', category: 'Education', impact: '2,900 children reached', progress: 82, image: causes[0].image, description: 'Learning materials, teacher support and community learning spaces for children in underserved areas.' },
  { title: 'Food Support Program', category: 'Nutrition', impact: '185,000 meals served', progress: 74, image: causes[1].image, description: 'Nutritious school meals and family food support to fight hunger and improve learning outcomes.' },
  { title: 'Clean Water Initiative', category: 'Water', impact: '100+ water points', progress: 90, image: causes[2].image, description: 'Safe-water infrastructure, local maintenance training and hygiene education.' },
  { title: 'Medical Support', category: 'Health', impact: '4,600 consultations', progress: 68, image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=85', description: 'Mobile clinics, health camps and essential medical assistance for vulnerable families.' },
  { title: 'Child Care', category: 'Care', impact: '740 children supported', progress: 61, image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1100&q=85', description: 'Safe spaces, mentoring and psychosocial support that help children feel protected and valued.' },
  { title: 'Rural Community Development', category: 'Community', impact: '25 communities', progress: 77, image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1100&q=85', description: 'Community-led programs combining education, water, health and livelihood support.' },
];
