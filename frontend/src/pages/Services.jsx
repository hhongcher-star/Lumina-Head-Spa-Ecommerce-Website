import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Search, Sparkles, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { getServiceSuggestions } from '../data/serviceSearch';
import { facialTreatments } from './services/Facial';
import { headTreatments } from './services/HeadTreatment';
import { bodyWaxingServices } from './services/Waxing';
import { faceWaxingServices } from './services/FaceWaxing';
import { mensWaxingServices } from './services/MensWaxing';
import '../styles/services.css';

const categoryMap = {
  facial: 'Facial Treatments',
  'head-treatment': 'Head Therapy',
  waxing: 'Face & Body Waxing',
  'mens-waxing': "Men's Waxing",
  'hair-blow-dry': 'Hair & Add-ons',
};

const priceValue = (price) => Number.parseFloat(String(price || 0).replace(/[^0-9.]/g, ''));

const serviceMoods = {
  'Full Face Waxing': 'Smooth · Gentle · Radiant',
  'Brow Waxing': 'Shape · Define · Refine',
  'Brow + Lips Waxing': 'Polish · Refresh · Define',
  'Chest Wax': 'Clean · Smooth · Confident',
  'Full Arm Wax': 'Silky · Even · Lasting',
  'Full Back Wax': 'Clear · Smooth · Refreshed',
  'Full Leg Wax': 'Soft · Sleek · Confident',
  'Full Stomach Wax': 'Smooth · Clean · Polished',
  'Half Arm Wax': 'Neat · Smooth · Effortless',
  'Half Leg Wax': 'Targeted · Smooth · Fresh',
  'Half Stomach Wax': 'Precise · Clean · Smooth',
  'Lower Back Wax': 'Focused · Smooth · Refined',
  'Sideburn Wax': 'Shape · Balance · Polish',
  'Underarm Wax': 'Fresh · Smooth · Comfortable',
  'Men Center Brow Wax': 'Clean · Defined · Natural',
  'Men Full Arm Wax': 'Smooth · Groomed · Confident',
  'Men Full Leg Wax': 'Sleek · Athletic · Lasting',
  'Men Nose Wax': 'Clean · Precise · Refreshed',
  'Men Toe Wax': 'Neat · Detailed · Polished',
  'Men Chest Wax': 'Smooth · Sharp · Confident',
  'Men Full Back Wax': 'Clean · Comfortable · Refined',
  'Men Half Arm Wax': 'Targeted · Smooth · Groomed',
  'Men Shoulder Wax': 'Clean Lines · Smooth Finish',
  'Men Brow Wax': 'Shape · Structure · Confidence',
  'Men Ear Wax': 'Precise · Clean · Polished',
  'Men Full Front Wax (Chest & Stomach Combo)': 'Complete · Smooth · Defined',
  'Men Half Back Wax': 'Focused · Clean · Comfortable',
  'Men Stomach Wax': 'Smooth · Defined · Confident',
};

const waxingDescriptions = {
  'Full Face Waxing': 'A complete facial waxing service that gently removes unwanted hair while preserving skin comfort. Leaves the complexion feeling smooth, clean, and beautifully polished.',
  'Brow Waxing': 'Precision brow shaping tailored to your natural features and preferred definition. Creates a clean, balanced frame while keeping the finished result soft and natural.',
  'Brow + Lips Waxing': 'A convenient two-area treatment that shapes the brows and smooths the lip area. Ideal for a quick, polished refresh with clean and balanced definition.',
  'Chest Wax': 'Targeted chest waxing removes unwanted hair with careful, even technique. The result is a cleaner, smoother appearance with a comfortable and polished finish.',
  'Full Arm Wax': 'Complete waxing from the shoulders through the wrists for consistently smooth arms. Careful application supports even removal and a soft, long-lasting finish.',
  'Full Back Wax': 'Thorough waxing across the entire back to remove unwanted hair and create an even result. Designed for comfort, clean coverage, and smooth skin that lasts.',
  'Full Leg Wax': 'Complete waxing from the thighs to the ankles for beautifully smooth legs. Precise technique creates an even finish while helping the skin feel soft and refreshed.',
  'Full Stomach Wax': 'Complete stomach waxing provides clean, even hair removal across the abdominal area. Leaves the skin smooth and polished with a comfortable professional finish.',
  'Half Arm Wax': 'Focused waxing for either the upper or lower arms, tailored to the area you want refined. Delivers neat, even results with smooth and comfortable skin.',
  'Half Leg Wax': 'Targeted waxing for either the upper or lower legs with careful attention to coverage. A practical choice for a smooth, refreshed finish exactly where needed.',
  'Half Stomach Wax': 'Precise waxing for the upper or lower stomach area, based on your grooming needs. Creates a clean transition and smooth finish without unnecessary treatment.',
  'Lower Back Wax': 'Focused hair removal across the lower back for a cleaner, more polished appearance. Professional technique supports even coverage and comfortable, lasting smoothness.',
  'Sideburn Wax': 'Gentle, detailed waxing refines the sideburn area and balances the facial outline. Leaves clean edges while maintaining a natural-looking shape.',
  'Underarm Wax': 'Professional underarm waxing removes hair cleanly from the root for longer-lasting smoothness. Careful application prioritizes comfort and a fresh, soft finish.',
  'Men Center Brow Wax': 'A precise clean-up between the brows that removes stray growth without over-shaping. Creates a sharper, naturally defined appearance in just a few careful steps.',
  'Men Full Arm Wax': 'Complete arm waxing from shoulder to wrist for smooth, evenly groomed skin. Designed for clean coverage, lasting results, and a confident finish.',
  'Men Full Leg Wax': 'Full-leg waxing removes hair evenly from thighs to ankles. Ideal for athletes or personal grooming, with smooth results and a clean, polished appearance.',
  'Men Nose Wax': 'A quick, controlled treatment that safely removes visible nose hair. Detailed technique creates a cleaner appearance while keeping the experience efficient and discreet.',
  'Men Toe Wax': 'Detailed waxing removes unwanted toe hair for cleaner-looking, well-groomed feet. A precise finishing service that complements leg and foot care.',
  'Men Chest Wax': 'Professional chest waxing creates a smooth, clean upper-body appearance with even coverage. Technique is tailored for comfort and a refined, confident finish.',
  'Men Full Back Wax': 'Complete back waxing removes unwanted hair across the full area with careful, consistent technique. Leaves the skin smoother, cleaner, and comfortably groomed.',
  'Men Half Arm Wax': 'Targeted waxing for either the upper or lower arms gives you control over the level of grooming. Produces an even, smooth finish with professional precision.',
  'Men Shoulder Wax': 'Focused shoulder waxing clears unwanted growth and creates a smooth transition across the upper body. Ideal for a cleaner, more groomed silhouette.',
  'Men Brow Wax': 'Professional brow waxing shapes and tidies the brows while respecting their natural masculine structure. The result is defined, balanced, and polished.',
  'Men Ear Wax': 'Careful ear waxing removes visible unwanted hair with precise, hygienic technique. A discreet grooming detail that creates a noticeably cleaner finish.',
  'Men Full Front Wax (Chest & Stomach Combo)': 'A complete chest and stomach waxing service for a consistent, smooth upper-body result. Even coverage creates clean definition from chest through abdomen.',
  'Men Half Back Wax': 'Targeted waxing treats either the upper or lower back for focused grooming. Delivers clean coverage and smooth results without treating areas you do not need.',
  'Men Stomach Wax': 'Professional stomach waxing removes unwanted abdominal hair for a smoother, more defined appearance. Careful technique provides clean and consistent results.',
};

const headMoods = {
  'A. Hydrating Facial + Head Spa': 'Hydrate · Relax · Renew',
  'B. Head Spa + Hot Stone Back Massage': 'Soothe · Release · Restore',
  'C. Head Spa + Facial + Back Renewal': 'Revive · Clarify · Renew',
  'Lumina Signature Scalp Facial': 'Glow · Balance · Relax',
  'Lumina Back Renewal Ritual': 'Purify · Release · Reset',
  'A. Classic Head Spa': 'Cleanse · Soothe · Balance',
  'B. Head Spa + Express Facial Escape': 'Refresh · Hydrate · Restore',
  'Express Scalp Therapy': 'Quick · Clean · Rebalanced',
};

const facialServices = facialTreatments.map((treatment) => ({
  ...treatment,
  category: 'Facial Treatments',
  description: treatment.summary,
  price: priceValue(treatment.price),
  bookingName: treatment.name,
}));

const headServices = headTreatments.flatMap((treatment) => {
  if (treatment.id === 'total-therapy' || treatment.id === 'essential-head-spa') {
    return treatment.options.map((option) => ({
      name: `${treatment.name} — ${option.title}`,
      description: option.description,
      image: option.image,
      price: priceValue(treatment.price || '$118'),
      duration: treatment.duration,
      category: 'Head Therapy',
      bookingName: treatment.name,
      includes: option.highlights || [],
      note: treatment.note,
      mood: headMoods[option.title],
    }));
  }

  return [{
    name: treatment.name,
    description: treatment.intro,
    image: treatment.image,
    price: priceValue(treatment.price),
    duration: treatment.duration,
    category: 'Head Therapy',
    bookingName: treatment.name,
    includes: treatment.options.map((option) => option.title),
    detail: treatment.details,
    note: treatment.note,
    mood: headMoods[treatment.name],
  }];
});

const normalizeWaxing = (services, category) => services.map((service) => ({
  ...service,
  category,
  price: priceValue(service.price),
  bookingName: service.name,
  mood: serviceMoods[service.name],
  description: waxingDescriptions[service.name] || service.description,
}));

const serviceGroups = [
  { name: 'Facial Treatments', services: facialServices },
  { name: 'Head Therapy', services: headServices },
  { name: 'Face & Body Waxing', services: [...normalizeWaxing(faceWaxingServices, 'Face & Body Waxing'), ...normalizeWaxing(bodyWaxingServices, 'Face & Body Waxing')] },
  { name: "Men's Waxing", services: normalizeWaxing(mensWaxingServices, "Men's Waxing") },
  {
    name: 'Hair & Add-ons',
    services: [
      { name: 'Hair Blow Dry', mood: 'Smooth · Soft · Effortless', description: 'A smooth, polished blow dry to complete your Lumina experience. Gentle drying and professional styling enhance natural movement while leaving hair soft, fresh, and beautifully finished.', price: 45, duration: '35 min', image: '/images/hair-blow-dry/styling.avif', category: 'Hair & Add-ons', bookingName: 'Hair Blow Dry' },
      { name: '45-Min Body Massage', mood: 'Release · Relax · Restore', description: 'Add focused body massage time to your appointment for deeper relaxation and tension relief. Customized pressure helps ease tired muscles and creates a calmer, more restorative finish to your visit.', price: 70, duration: '45 min', image: '/images/spa/lumina-3.avif', category: 'Hair & Add-ons', bookingName: '+45min body massage' },
    ],
  },
];

const heroContent = {
  'All Services': {
    eyebrow: 'Lumina Service Menu',
    title: 'Care designed around you.',
    description: 'Explore restorative head spa rituals, advanced facial care, and polished finishing services in one place.',
  },
  'Facial Treatments': {
    eyebrow: 'Advanced Facial Care',
    title: 'Reveal healthier, brighter skin.',
    description: 'Personalized treatments that replenish moisture, refine texture, support firmness, and restore your natural radiance.',
  },
  'Head Therapy': {
    eyebrow: 'Lumina Head Spa',
    title: 'Slow down. Restore balance.',
    description: 'Restorative scalp rituals designed to release tension, refresh the roots, and leave your whole body feeling renewed.',
  },
  'Face & Body Waxing': {
    eyebrow: 'Professional Waxing',
    title: 'Smooth skin. Lasting confidence.',
    description: 'Precise, comfortable waxing care for beautifully smooth results, clean definition, and lasting confidence.',
  },
  "Men's Waxing": {
    eyebrow: "Men's Grooming",
    title: 'Clean lines. Quiet confidence.',
    description: 'Discreet, efficient waxing tailored for men, with professional care and smooth results from face to body.',
  },
  'Hair & Add-ons': {
    eyebrow: 'Finishing Touches',
    title: 'Leave refreshed and polished.',
    description: 'Complete your Lumina visit with effortless hair styling or focused massage for a beautifully finished experience.',
  },
};

const cleanName = (name) => name;
const servicesPerPage = 9;

const getInitialCategory = () => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('category');
  if (requested && requested !== 'all') return categoryMap[requested] || requested;

  const segment = window.location.pathname.split('/').filter(Boolean)[1];
  return categoryMap[segment] || 'All Services';
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(getInitialCategory);
  const [query, setQuery] = useState(() => new URLSearchParams(window.location.search).get('search') || '');
  const [activeService, setActiveService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [catalogSearchFocused, setCatalogSearchFocused] = useState(false);
  const categories = ['All Services', ...serviceGroups.map((group) => group.name)];
  const activeHero = heroContent[activeCategory] || heroContent['All Services'];
  const catalogSuggestions = getServiceSuggestions(query);

  useEffect(() => {
    if (!activeService) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveService(null);
    };
    document.body.classList.add('catalog-modal-open');
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('catalog-modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeService]);

  const services = useMemo(() => serviceGroups.flatMap((group) => group.services.map((service) => ({
    ...service,
    category: group.name,
  }))).filter((service) => {
    const inCategory = activeCategory === 'All Services' || service.category === activeCategory;
    const searchText = `${service.name} ${service.description} ${service.category} ${(service.benefits || []).join(' ')} ${(service.includes || []).join(' ')}`.toLowerCase();
    return inCategory && searchText.includes(query.trim().toLowerCase());
  }), [activeCategory, query]);
  const totalPages = Math.ceil(services.length / servicesPerPage);
  const visibleServices = services.slice((currentPage - 1) * servicesPerPage, currentPage * servicesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query]);

  const changePage = (page) => {
    setCurrentPage(page);
    window.setTimeout(() => {
      document.querySelector('.catalog-grid .catalog-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setMobileCategoryOpen(false);
    const categoryKey = Object.entries(categoryMap).find(([, label]) => label === category)?.[0] || 'all';
    window.history.replaceState({}, '', `/services${categoryKey === 'all' ? '' : `?category=${categoryKey}`}`);
  };

  return (
    <>
      <Header />
      <main className="services-catalog-page">
        <section className="services-catalog-hero">
          <div className="services-catalog-hero__shade" />
          <div className="page-width services-catalog-hero__content">
            <p className="eyebrow eyebrow--light">{activeHero.eyebrow}</p>
            <h1>{activeHero.title}</h1>
            <p>{activeHero.description}</p>
          </div>
        </section>

        <section className="services-catalog" aria-label="Lumina services">
          <div className="services-catalog__tools">
            <div className="page-width services-catalog__tools-inner">
              <div className={`services-catalog__mobile-category${mobileCategoryOpen ? ' is-open' : ''}`}>
                <span>Spa Menu</span>
                <button
                  className="services-catalog__mobile-trigger"
                  type="button"
                  aria-expanded={mobileCategoryOpen}
                  aria-controls="mobile-service-categories"
                  onClick={() => setMobileCategoryOpen((value) => !value)}
                >
                  {activeCategory} <ChevronDown size={17} />
                </button>
                {mobileCategoryOpen && (
                  <div className="services-catalog__mobile-menu" id="mobile-service-categories" role="listbox" aria-label="Choose a service category">
                    {categories.map((category) => (
                      <button
                        className={activeCategory === category ? 'is-active' : ''}
                        type="button"
                        role="option"
                        aria-selected={activeCategory === category}
                        onClick={() => selectCategory(category)}
                        key={category}
                      >
                        <span>{category}</span>{activeCategory === category && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="services-catalog__categories" role="tablist" aria-label="Service categories">
                {categories.map((category) => (
                  <button
                    className={activeCategory === category ? 'is-active' : ''}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === category}
                    onClick={() => selectCategory(category)}
                    key={category}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <label className="services-catalog__search" onFocus={() => setCatalogSearchFocused(true)} onBlur={() => window.setTimeout(() => setCatalogSearchFocused(false), 120)}>
                <Search size={18} />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search treatments"
                  aria-label="Search treatments"
                  autoComplete="off"
                />
                {catalogSearchFocused && catalogSuggestions.length > 0 && (
                  <div className="services-catalog__suggestions" role="listbox" aria-label="Recommended services">
                    {catalogSuggestions.map((item) => (
                      <button type="button" role="option" onMouseDown={(event) => event.preventDefault()} onClick={() => { setQuery(item.name); setCatalogSearchFocused(false); }} key={`${item.category}-${item.name}`}>
                        <span>{item.name}</span><small>{item.category}</small>
                      </button>
                    ))}
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="page-width services-catalog__body">
            <header className="services-catalog__heading">
              <div>
                <p className="eyebrow">Our Treatments</p>
                <h2>{activeCategory}</h2>
              </div>
              <p>{services.length} {services.length === 1 ? 'treatment' : 'treatments'}</p>
            </header>

            {services.length > 0 ? (
              <div className="catalog-grid">
                {visibleServices.map((service) => (
                  <article
                    className="catalog-card"
                    id={cleanName(service.name).toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    key={`${service.category}-${service.name}`}
                    role="button"
                    tabIndex="0"
                    aria-label={`View ${service.name} details`}
                    onClick={() => setActiveService(service)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveService(service);
                      }
                    }}
                  >
                    <div className="catalog-card__image">
                      <img src={service.image} alt={`${cleanName(service.name)} treatment`} />
                      <span>{service.category}</span>
                    </div>
                    <div className="catalog-card__body">
                      <h3>{cleanName(service.name)}</h3>
                      <span className="catalog-card__mobile-category">{service.category}</span>
                      {service.mood && <p className="catalog-card__mood">{service.mood}</p>}
                      <p>{service.description}</p>
                      <div className="catalog-card__meta">
                        <strong>US${service.price}</strong>
                        {service.duration && <span><Clock3 size={15} />{service.duration}</span>}
                      </div>
                      <button className="catalog-card__more" type="button" onClick={(event) => { event.stopPropagation(); setActiveService(service); }}>
                        See More <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="services-catalog__empty">
                <Sparkles size={30} />
                <h3>No treatments found</h3>
                <p>Try another search or browse a different category.</p>
              </div>
            )}
            {totalPages > 1 && (
              <nav className="catalog-pagination" aria-label="Service pages">
                <button
                  type="button"
                  aria-label="Previous page"
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    className={currentPage === page ? 'is-active' : ''}
                    type="button"
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                    onClick={() => changePage(page)}
                    key={page}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  aria-label="Next page"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                >
                  <ChevronRight size={18} />
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>
      {activeService && (
        <div
          className="catalog-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveService(null);
          }}
        >
          <article className="catalog-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="catalog-modal-title">
            <button className="catalog-modal__close" type="button" aria-label="Close treatment details" onClick={() => setActiveService(null)}>
              <X size={23} />
            </button>
            <div className="catalog-modal__media">
              <img src={activeService.image} alt={`${activeService.name} treatment`} />
              <span>{activeService.category}</span>
            </div>
            <div className="catalog-modal__content">
              <p className="eyebrow">Treatment Details</p>
              <h2 id="catalog-modal-title">{activeService.name}</h2>
              {activeService.mood && <p className="catalog-modal__mood">{activeService.mood}</p>}
              <p className="catalog-modal__description">{activeService.description}</p>

              {(activeService.benefits?.length > 0 || activeService.includes?.length > 0) && (
                <div className="catalog-modal__information">
                  {activeService.benefits?.length > 0 && (
                    <section>
                      <h3>Benefits</h3>
                      <ul>{activeService.benefits.map((item) => <li key={item}>{item}</li>)}</ul>
                    </section>
                  )}
                  {activeService.includes?.length > 0 && (
                    <section>
                      <h3>Includes</h3>
                      <ol>{activeService.includes.map((item) => <li key={item}>{item}</li>)}</ol>
                    </section>
                  )}
                </div>
              )}

              {activeService.detail && <p className="catalog-modal__additional">{activeService.detail}</p>}
              {activeService.note && <p className="catalog-modal__note">{activeService.note}</p>}

              <footer className="catalog-modal__footer">
                <div>
                  <strong>US${activeService.price}</strong>
                  {activeService.duration && <span><Clock3 size={16} />{activeService.duration}</span>}
                </div>
                <a href={`/book-now?service=${encodeURIComponent(activeService.bookingName || activeService.name)}`}>
                  Book This Treatment <ArrowRight size={16} />
                </a>
              </footer>
            </div>
          </article>
        </div>
      )}
      <Footer />
    </>
  );
}
