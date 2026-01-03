
import { Property, Service, Testimonial } from './types';

export const ACCENT_COLOR = '#2BC0E4';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'THE MERIDIAN PENTHOUSE',
    location: 'Upper West Side, Manhattan',
    price: '$12,450,000',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of contemporary architecture featuring panoramic views of Central Park.'
  },
  {
    id: '2',
    title: 'VILLA LUMINA',
    location: 'The Hills, Los Angeles',
    price: '$8,900,000',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A seamless indoor-outdoor living experience designed by Pritzker Prize winners.'
  },
  {
    id: '3',
    title: 'SKY GARDEN DUPLEX',
    location: 'Canary Wharf, London',
    price: '£6,200,000',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Triple-height ceilings and private botanical terrace overlooking the Thames.'
  }
];

export const SERVICES: Service[] = [
  {
    tag: '01',
    title: 'Acquisition Strategy',
    description: 'We identify undervalued assets and off-market opportunities through deep urban intelligence.'
  },
  {
    tag: '02',
    title: 'Portfolio Advisory',
    description: 'Tailored investment roadmaps for high-net-worth individuals and global family offices.'
  },
  {
    tag: '03',
    title: 'Asset Optimization',
    description: 'Enhancing the intrinsic value of luxury real estate through strategic redevelopment and branding.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Julianne V.',
    role: 'CEO, V-Capital',
    content: 'Atlas Property Co. redefined our approach to luxury holdings. Their editorial precision in market analysis is unmatched.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Private Investor',
    content: 'Expertise delivered with absolute discretion. They don\'t just find houses; they secure future heritage.'
  }
];
