import { ChevronDown, Droplets, Menu, Search, Sparkles, Waves, Wind, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getServiceSuggestions } from '../../data/serviceSearch';
import Logo from './Logo';

const serviceGroups = [
  {
    title: 'Facial',
    href: '/services?category=facial',
    tagline: 'Radiant, healthy skin',
    icon: Sparkles,
    links: [
      ['Line Repair', '/services?category=facial#line-repair-facial'],
      ['Timeless Facial', '/services?category=facial#timeless-facial'],
      ['Unstressed Facial', '/services?category=facial#unstressed-facial'],
      ['Line Repair + Facial Lift', '/services?category=facial#line-repair-facial-lift'],
      ['Unstress + Facial Lift', '/services?category=facial#unstress-facial-lift'],
    ],
  },
  {
    title: 'Head Treatment',
    href: '/services?category=head-treatment',
    tagline: 'Relax, restore, rejuvenate',
    icon: Waves,
    links: [
      ['Lumina Total Therapy Experience', '/services?category=head-treatment#lumina-total-therapy-experience'],
      ['Lumina Signature Scalp Facial', '/services?category=head-treatment#lumina-signature-scalp-facial'],
      ['Lumina Back Renewal Ritual', '/services?category=head-treatment#lumina-back-renewal-ritual'],
      ['Lumina Essential Head Spa', '/services?category=head-treatment#lumina-essential-head-spa-a'],
      ['Express Scalp Therapy', '/services?category=head-treatment#express-scalp-therapy'],
    ],
  },
  {
    title: 'Waxing',
    href: '/services?category=waxing',
    tagline: 'Smooth confidence',
    icon: Droplets,
    links: [
      ['Full Face Waxing', '/services?category=waxing#full-face-waxing'],
      ['Brow Waxing', '/services?category=waxing#brow-waxing'],
      ['Brow + Lips Waxing', '/services?category=waxing#brow-lips-waxing'],
    ],
  },
  {
    title: 'Hair Blow Dry',
    href: '/services?category=hair-blow-dry',
    tagline: 'Polished, effortless style',
    icon: Wind,
    links: [
      ['Hair Blow Dry', '/services?category=hair-blow-dry#hair-blow-dry'],
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isServicesPage = currentPath.startsWith('/services');
  const navClass = (path) => `main-nav__link${currentPath === path ? ' main-nav__link--active' : ''}`;

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    window.location.href = `/services?search=${encodeURIComponent(query)}`;
  };
  const searchSuggestions = getServiceSuggestions(searchQuery);

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

  useEffect(() => {
    if (!isServicesPage || !servicesOpen) return undefined;
    const closeServicesMenu = (event) => {
      if (!event.target.closest('.nav-dropdown')) setServicesOpen(false);
    };
    document.addEventListener('pointerdown', closeServicesMenu);
    return () => document.removeEventListener('pointerdown', closeServicesMenu);
  }, [isServicesPage, servicesOpen]);

  return (
    <header className={`site-header${isServicesPage ? ' site-header--services-page' : ''}${open ? ' site-header--menu-open' : ''}${scrolled ? ' site-header--scrolled' : ''}`}>
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
              className={`main-nav__link nav-dropdown__button${currentPath.startsWith('/services') ? ' main-nav__link--active' : ''}`}
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Spa Menu <ChevronDown size={14} strokeWidth={1.7} />
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
                <a href="/services">All Services</a>
                <a href="/services?category=facial">Facial</a>
                <a href="/services?category=head-treatment">Head Treatment</a>
                <a href="/services?category=waxing">Waxing &amp; Finishing</a>
                <a href="/services?category=mens-waxing">Men's Waxing</a>
              </div>
            </div>
          </div>
          <a className={navClass('/group-events')} href="/group-events">Group Events</a>
          <a className={navClass('/gift-card')} href="/gift-card">Gift Card</a>
          <a className={navClass('/spa-facilities')} href="/spa-facilities">Our Spa</a>
          <a className="mobile-nav-book button button--forest" href="/book-now">Book Now</a>
        </nav>
        <div className="header-actions">
          <a className="button button--header" href="/book-now">Book Now</a>
          <form className="header-search" role="search" onSubmit={handleSearch} onFocus={() => setSearchFocused(true)} onBlur={() => window.setTimeout(() => setSearchFocused(false), 120)}>
            <input name="site-search" type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search here..." aria-label="Search Lumina services" autoComplete="off" />
            <button type="submit" aria-label="Submit search"><Search size={18} /></button>
            {searchFocused && searchSuggestions.length > 0 && (
              <div className="header-search__suggestions" role="listbox" aria-label="Recommended services">
                {searchSuggestions.map((item) => (
                  <a href={`/services?search=${encodeURIComponent(item.name)}`} role="option" key={`${item.category}-${item.name}`}>
                    <span>{item.name}</span><small>{item.category}</small>
                  </a>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
}
