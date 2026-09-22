import { ChevronDown, Droplets, Menu, Sparkles, Waves, Wind, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const serviceGroups = [
  {
    title: 'Facial',
    href: '/services/facial',
    tagline: 'Radiant, healthy skin',
    icon: Sparkles,
    links: [
      ['The Signature Peptide Renewal', '/services/facial#signature-peptide-renewal'],
      ['Line Repair', '/services/facial#line-repair'],
      ['Unstressed Facial', '/services/facial#unstressed-facial'],
      ['Line Repair + Facial Lift', '/services/facial#line-repair-facial-lift'],
      ['Unstress + Facial Lift', '/services/facial#unstress-facial-lift'],
      ['Timeless Facial', '/services/facial#timeless-facial'],
    ],
  },
  {
    title: 'Head Treatment',
    href: '/services/head-treatment',
    tagline: 'Relax, restore, rejuvenate',
    icon: Waves,
    links: [
      ['Lumina Total Therapy Experience', '/services/head-treatment#total-therapy'],
      ['Lumina Signature Scalp Facial', '/services/head-treatment#signature-scalp-facial'],
      ['Lumina Back Renewal Ritual', '/services/head-treatment#back-renewal-ritual'],
      ['Lumina Essential Head Spa', '/services/head-treatment#essential-head-spa'],
      ['Express Scalp Therapy', '/services/head-treatment#express-scalp-therapy'],
    ],
  },
  {
    title: 'Waxing',
    href: '/services/waxing',
    tagline: 'Smooth confidence',
    icon: Droplets,
    links: [
      ['Waxing Services', '/services/waxing'],
      ['Face Waxing', '/services/waxing/face'],
      ["Men's Waxing", '/services/waxing/man'],
    ],
  },
  {
    title: 'Hair Blow Dry',
    href: '/services/hair-blow-dry',
    tagline: 'Polished, effortless style',
    icon: Wind,
    links: [
      ['Hair Blow Dry', '/services/hair-blow-dry'],
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navClass = (path) => `main-nav__link${currentPath === path ? ' main-nav__link--active' : ''}`;

  useEffect(() => {
    if (!open) setServicesOpen(false);
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.classList.add('mobile-nav-open');
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('mobile-nav-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <header className={`site-header${open ? ' site-header--menu-open' : ''}${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner page-width">
        <Logo />
        <button
          className={`mobile-nav-backdrop${open ? ' mobile-nav-backdrop--open' : ''}`}
          type="button"
          aria-label="Close navigation"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={`main-nav${open ? ' main-nav--open' : ''}`}
          aria-label="Main navigation"
          onClick={(event) => {
            if (event.target.closest('a')) setOpen(false);
          }}
        >
          <div className="mobile-nav-brand" aria-hidden="true">
            <img src="/images/brand/lumina-logo.webp" alt="" />
          </div>
          <a className={navClass('/')} href="/">Home</a>
          <div className={`nav-dropdown${servicesOpen ? ' nav-dropdown--open' : ''}`}>
            <button
              className={`main-nav__link nav-dropdown__button${currentPath.startsWith('/services/') ? ' main-nav__link--active' : ''}`}
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services <ChevronDown size={14} strokeWidth={1.7} />
            </button>
            <div className="nav-dropdown__menu">
              <div className="nav-dropdown__desktop">
                <div className="nav-dropdown__intro">
                  <span>OUR SERVICES</span>
                  <p>Beauty.<br />Balance.<br />You.</p>
                  <small>Thoughtfully curated care for radiant skin, healthy hair, and a calmer mind.</small>
                </div>
                <div className="nav-dropdown__grid">
                  {serviceGroups.map((group) => {
                    const GroupIcon = group.icon;
                    return (
                      <div className="nav-dropdown__group" key={group.title}>
                        <div className="nav-dropdown__title-row">
                          <span className="nav-dropdown__icon"><GroupIcon size={19} /></span>
                          <div>
                            <a className="nav-dropdown__heading" href={group.href}>{group.title}</a>
                            <span className="nav-dropdown__tagline">{group.tagline}</span>
                          </div>
                        </div>
                        <div className="nav-dropdown__links">
                          {group.links.map(([label, href]) => <a href={href} key={href}><span>{label}</span><span>→</span></a>)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="nav-dropdown__mobile">
                <a href="/services/facial">Facial</a>
                <a href="/services/head-treatment">Head Treatment</a>
                <details>
                  <summary>Waxing <ChevronDown size={15} /></summary>
                  <div>
                    <a href="/services/waxing">Waxing Services</a>
                    <a href="/services/waxing/face">Face Waxing</a>
                    <a href="/services/waxing/man">Men's Waxing</a>
                  </div>
                </details>
                <a href="/services/hair-blow-dry">Hair Blow Dry</a>
              </div>
            </div>
          </div>
          <a className={navClass('/group-events')} href="/group-events">Group Events</a>
          <a className={navClass('/gift-card')} href="/gift-card">Gift Card</a>
          <a className={navClass('/spa-facilities')} href="/spa-facilities">Our Spa</a>
          <a className="mobile-nav-book button button--forest" href="/book-now">Book Now</a>
        </nav>
        <a className="button button--header" href="/book-now">Book Now</a>
      </div>
    </header>
  );
}
