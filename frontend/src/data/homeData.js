export const services = [
  {
    title: 'Facial',
    description: 'Thoughtful facial rituals that restore hydration, soften signs of stress, and reveal a healthier natural glow.',
    image: '/images/facial/signature-peptide-renewal.webp',
    href: '/services/facial',
    treatments: [
      ['Signature Peptide Renewal', '/services/facial#signature-peptide-renewal'],
      ['Line Repair', '/services/facial#line-repair'],
      ['Unstressed Facial', '/services/facial#unstressed-facial'],
      ['Timeless Facial', '/services/facial#timeless-facial'],
    ],
  },
  {
    title: 'Head Treatment',
    description: 'Korean-inspired scalp care combining deep cleansing, steam, massage, and restorative treatments for total renewal.',
    image: '/images/head-treatment/classic-head-spa.webp',
    href: '/services/head-treatment',
    treatments: [
      ['Total Therapy Experience', '/services/head-treatment#total-therapy'],
      ['Signature Scalp Facial', '/services/head-treatment#signature-scalp-facial'],
      ['Back Renewal Ritual', '/services/head-treatment#back-renewal-ritual'],
      ['Essential Head Spa', '/services/head-treatment#essential-head-spa'],
    ],
  },
  {
    title: 'Hair Blow Dry',
    description: 'A polished finishing ritual with gentle drying and professional styling that enhances your hair’s natural movement.',
    image: '/images/hair-blow-dry/styling.avif',
    href: '/services/hair-blow-dry',
    treatments: [
      ['Professional Blow Dry', '/services/hair-blow-dry'],
      ['Spa Finish Styling', '/services/hair-blow-dry'],
      ['Smooth & Polished Finish', '/services/hair-blow-dry'],
    ],
  },
  {
    title: 'Waxing',
    description: 'Precise, comfortable waxing services designed for smooth results, clean detail, and lasting confidence.',
    image: '/images/waxing/full-face-waxing.webp',
    href: '/services/waxing',
    treatments: [
      ['Full Face Waxing', '/services/waxing/face'],
      ['Brow Waxing', '/services/waxing/face'],
      ['Brow & Lip Waxing', '/services/waxing/face'],
      ["Men's Waxing", '/services/waxing/man'],
    ],
  },
];

export const spaImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/images/spa/lumina-${index + 1}.avif`,
  alt: `Lumina Head Spa interior ${index + 1}`,
}));
