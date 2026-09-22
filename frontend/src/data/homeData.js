import { Droplets, Sparkles, Waves, Wind } from 'lucide-react';

export const services = [
  {
    title: 'Facial',
    description: 'Reveal healthier, brighter skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    href: '/services/facial',
    icon: Sparkles,
  },
  {
    title: 'Head Treatment',
    description: 'Nourish your scalp, revive your hair.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    href: '/services/head-treatment',
    icon: Waves,
  },
  {
    title: 'Hair Blow Dry',
    description: 'Perfect your look, feel your best.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    href: '/services/hair-blow-dry',
    icon: Wind,
  },
  {
    title: 'Waxing',
    description: 'Smooth skin, lasting confidence.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85',
    href: '/services/waxing',
    icon: Droplets,
  },
];

export const spaImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/images/spa/lumina-${index + 1}.avif`,
  alt: `Lumina Head Spa interior ${index + 1}`,
}));
