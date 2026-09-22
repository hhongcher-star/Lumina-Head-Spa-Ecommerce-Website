import { useEffect } from 'react';

const pages = {
  '/': ['Lumina Head Spa | Head Spa, Facials & Waxing in Chamblee, GA', 'Restore your calm at Lumina Head Spa in Chamblee, Georgia. Explore head spa therapy, advanced facials, waxing, hair styling, group spa events, and easy online booking.'],
  '/book-now': ['Book an Appointment | Lumina Head Spa Chamblee', 'Book head spa, facial, waxing, massage, and beauty treatments at Lumina Head Spa in Chamblee, Georgia.'],
  '/services/facial': ['Advanced Facial Treatments in Chamblee, GA | Lumina', 'Discover personalized anti-aging, hydrating, calming, and lifting facial treatments at Lumina Head Spa in Chamblee, Georgia.'],
  '/services/head-treatment': ['Head Spa & Scalp Therapy in Chamblee, GA | Lumina', 'Experience restorative Japanese-inspired head spa and scalp therapy for deep relaxation, scalp health, and renewed hair at Lumina.'],
  '/services/hair-blow-dry': ['Professional Hair Blow Dry in Chamblee, GA | Lumina', 'Complete your spa visit with a smooth, polished professional blow dry at Lumina Head Spa in Chamblee, Georgia.'],
  '/services/waxing': ['Professional Waxing in Chamblee, GA | Lumina', 'Explore gentle, precise face and body waxing services for women and men at Lumina Head Spa in Chamblee, Georgia.'],
  '/services/waxing/face': ['Face Waxing in Chamblee, GA | Lumina Head Spa', 'Book precise brow, lip, and full-face waxing for smooth skin and polished definition at Lumina Head Spa.'],
  '/services/waxing/man': ["Men's Waxing in Chamblee, GA | Lumina Head Spa", "Explore professional men's body waxing services delivered with privacy, comfort, and precise care at Lumina."],
  '/group-events': ['Group Spa Events in Chamblee, GA | Lumina Head Spa', 'Plan a relaxing bridal party, birthday, corporate wellness gathering, or private group spa experience at Lumina Head Spa.'],
  '/gift-card': ['Lumina Head Spa Gift Cards | Give Time to Unwind', 'Give a thoughtful Lumina Head Spa gift card for restorative head spa, facial, waxing, and beauty experiences in Chamblee, Georgia.'],
  '/spa-facilities': ['Explore Lumina Head Spa in Chamblee, GA', 'Step inside Lumina Head Spa and explore our calm, private treatment spaces designed for comfort, relaxation, and renewal.'],
};

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

export default function SiteExperience({ path }) {
  useEffect(() => {
    const [title, description] = pages[path] || pages['/'];
    const canonicalUrl = `${window.location.origin}${path === '/' ? '/' : path}`;
    const socialImage = `${window.location.origin}/images/home/hero-head-spa.webp`;

    document.title = title;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Lumina Head Spa' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: socialImage });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImage });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.getElementById('lumina-local-business-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'lumina-local-business-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['HealthAndBeautyBusiness', 'DaySpa'],
      name: 'Lumina Head Spa',
      url: window.location.origin,
      image: socialImage,
      telephone: '+1-678-587-5161',
      priceRange: '$$',
      address: { '@type': 'PostalAddress', streetAddress: '2390 Chamblee Tucker Rd #102', addressLocality: 'Chamblee', addressRegion: 'GA', postalCode: '30341', addressCountry: 'US' },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '10:00', closes: '20:30' }],
      hasMap: 'https://www.google.com/maps/search/?api=1&query=2390+Chamblee+Tucker+Rd+Suite+102+Chamblee+GA+30341',
    });
  }, [path]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector('main > section:first-child');
    const heroTitle = hero?.querySelector('h1');
    const heroImage = hero?.querySelector(':scope > img');
    hero?.classList.add('lumina-hero-motion');
    heroTitle?.classList.add('lumina-text-reveal', 'is-visible');
    heroImage?.classList.add('lumina-hero-image');

    const groups = [
      ['main section:not(:first-child) h2, main section:not(:first-child) h3', 'lumina-reveal-title'],
      ['main section:not(:first-child) .section-heading > p:last-child, main section:not(:first-child) .location-content__intro, main section:not(:first-child) .groups-intro__copy', 'lumina-reveal-copy'],
      ['.service-card, .facial-treatment, .head-treatment, .waxing-card, .groups-notes article, .booking-service, .facilities-gallery__item', 'lumina-reveal-item'],
      ['.spa-carousel, .location-map, .groups-details__image, .hair-story__image', 'lumina-mask-reveal'],
      ['.site-footer', 'lumina-reveal-footer'],
    ];

    const animated = [];
    groups.forEach(([selector, className]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add(className);
        element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
        animated.push(element);
      });
    });

    document.querySelectorAll('main img').forEach((image, index) => {
      image.decoding = 'async';
      if (index > 1 && !image.closest('.booking-service-modal, .service-modal, .spa-carousel')) image.loading = 'lazy';
      if (image.closest('.spa-carousel')) image.loading = 'eager';
    });

    if (reduceMotion) {
      animated.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    animated.forEach((element) => observer.observe(element));

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (!hero || window.scrollY > window.innerHeight * 1.15) return;
      hero.style.setProperty('--hero-parallax', `${Math.min(window.scrollY * 0.055, 34)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [path]);

  return null;
}
