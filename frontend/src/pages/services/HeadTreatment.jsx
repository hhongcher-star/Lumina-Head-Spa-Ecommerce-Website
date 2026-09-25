import { ArrowRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/head-treatment.css';

export const headTreatments = [
  {
    id: 'total-therapy',
    number: '01',
    name: 'Lumina Total Therapy Experience',
    price: '$218',
    duration: '130 Min',
    image: '/images/head-treatment/total-therapy-experience.webp',
    intro: 'The ultimate reset — for those who want to feel completely renewed. Ideal for deep stress relief and full-body recovery.',
    options: [
      {
        title: 'A. Hydrating Facial + Head Spa',
        image: '/images/head-treatment/hydrating-facial-head-spa.webp',
        highlights: ['70-min Booster Hydrating Facial', '60-min Head Spa Therapy'],
        description: 'Infuses moisture-repair ingredients for smoother, firmer skin. Relieves scalp tension, boosts circulation, and promotes healthier hair growth.',
      },
      {
        title: 'B. Head Spa + Hot Stone Back Massage',
        image: '/images/head-treatment/hot-stone-back-massage.webp',
        highlights: ['70-min Head Spa Therapy', '60-min Hot Stone Back Massage'],
        description: 'Soothes the nervous system and refreshes the scalp. Heated stones with customized oils penetrate deep to relieve shoulder and back stiffness.',
      },
      {
        title: 'C. Head Spa + Facial + Back Renewal',
        image: '/images/head-treatment/facial-back-renewal.webp',
        highlights: ['70-min Head Spa Therapy', '30-min Back Facial', '30-min Facial'],
        description: 'Head therapy revives hair roots, back facial clears breakouts, and facial restores radiance. Three in one, renewed from head to toe.',
      },
    ],
    note: 'Includes Express Hair Dry',
  },
  {
    id: 'signature-scalp-facial',
    number: '02',
    name: 'Lumina Signature Scalp Facial',
    price: '$175',
    duration: '110 Min',
    image: '/images/head-treatment/signature-scalp-facial.png',
    intro: 'Our most balanced choice for both skin glow and scalp health. Delivering visible results with lasting relaxation.',
    offer: 'For two or more people walking in together, enjoy $30 off.',
    options: [
      {
        title: '40-Min Mini Facial',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=88',
        description: 'Using professional-grade products hydration, brightening, calming — paired with sculpting massage techniques to boost circulation, enhance lymphatic flow, and visibly improve skin tone and radiance.',
      },
      {
        title: '70-Min Head Spa Therapy',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=88',
        description: 'A detailed scalp ritual featuring precise massage techniques that help relieve tension, rebalance oil levels, and support long-term scalp health while enhancing natural shine from root to tip.',
      },
    ],
    note: 'Includes Express Hair Dry',
  },
  {
    id: 'back-renewal-ritual',
    number: '03',
    name: 'Lumina Back Renewal Ritual',
    price: '$138',
    duration: '70 Min',
    image: '/images/head-treatment/back-renewal-ritual.png',
    intro: 'A favorite for stress relief and everyday reset. Perfect for those who carry tension in the shoulders and back.',
    options: [
      {
        title: '40-Min Head Spa Therapy',
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=88',
        description: 'Gentle cleansing, steam, and rhythmic scalp massage help reduce stress, stimulate circulation, and refresh the mind.',
      },
      {
        title: '30-Min Back Facial',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=88',
        description: 'A purifying and smoothing treatment including cleansing, exfoliation, and hydration — helping unclog pores, refine skin texture, and improve overall skin clarity on the back.',
      },
    ],
    note: 'Includes Express Hair Dry',
  },
  {
    id: 'essential-head-spa',
    number: '04',
    name: 'Lumina Essential Head Spa',
    duration: '80 Min',
    image: '/images/head-treatment/essential-head-spa.webp',
    intro: 'Your perfect first step into true scalp care. A gentle starting point for regular care.',
    options: [
      {
        title: 'A. Classic Head Spa',
        image: '/images/head-treatment/classic-head-spa.webp',
        description: 'A calming scalp ritual featuring deep cleansing, gentle exfoliation, soothing massage, and warm steam to open pores and release buildup. Finished with a nourishing mask to restore scalp balance and promote healthier hair growth.',
      },
      {
        title: 'B. Head Spa + Express Facial Escape',
        image: '/images/head-treatment/head-spa-express-facial.webp',
        highlights: ['45-min relaxing head spa', '35-min facial'],
        description: 'Deep-cleanses, exfoliates, and steams the scalp to release buildup, while a nourishing mask restores balance and promotes healthier hair growth. The facial cleans, hydrates, and revives skin.',
      },
    ],
    note: 'Includes Express Hair Dry',
  },
  {
    id: 'express-scalp-therapy',
    number: '05',
    name: 'Express Scalp Therapy',
    price: '$78',
    duration: '45 Min',
    image: '/images/head-treatment/express-scalp-therapy.webp',
    intro: 'A quick refresh when you just need to feel better. Simple, effective, and easy to fit into your routine.',
    details: 'A 45-minute targeted treatment designed to relieve scalp tension, reduce buildup, and stimulate circulation. Helping to refresh the scalp environment and leave you feeling light, clean, and rebalanced.',
    options: [],
    note: 'Promotion',
  },
];

export default function HeadTreatment() {
  const [activeTreatment, setActiveTreatment] = useState(null);

  useEffect(() => {
    if (!activeTreatment) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveTreatment(null);
    };

    document.body.classList.add('service-modal-open');
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('service-modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeTreatment]);

  return (
    <>
      <Header />
      <main className="head-page">
        <section className="head-hero">
          <div className="head-hero__shade" />
          <div className="head-hero__content page-width">
            <p className="eyebrow eyebrow--light">Lumina Head Spa</p>
            <h1>Head Therapy<br />Price List</h1>
            <p className="head-hero__description">A quiet space to slow down, release tension, and restore balance — whether you seek a quick refresh or a full-body reset.</p>
          </div>
        </section>

        <section className="head-intro page-width">
          <div>
            <p className="eyebrow">OUR HEAD THERAPIES</p>
            <h2>Slow Down.<br />Restore Balance.</h2>
          </div>
          <p>Thoughtfully designed rituals for scalp health, skin renewal, and deep relaxation. Choose the level of care that meets you where you are today.</p>
        </section>

        <section className="head-treatments page-width" aria-label="Head therapy treatments">
          {headTreatments.map((treatment) => (
            <article className="head-treatment" id={treatment.id} key={treatment.id}>
              <div className="head-treatment__image">
                <img src={treatment.image} alt={`${treatment.name} at Lumina Head Spa`} />
                <span>{treatment.number}</span>
              </div>
              <div className="head-treatment__content">
                <div className="head-treatment__heading">
                  <div>
                    <p className="head-treatment__number">{treatment.number} — Head Therapy</p>
                    <h3>{treatment.name}</h3>
                  </div>
                  <p className="head-treatment__price">
                    {treatment.price && <strong>{treatment.price}</strong>}
                    <span>{treatment.duration}</span>
                  </p>
                </div>

                <p className="head-treatment__intro">{treatment.intro}</p>
                {treatment.offer && <p className="head-treatment__offer">{treatment.offer}</p>}
                {treatment.details && <p className="head-treatment__summary">{treatment.details}</p>}

                <div className="head-treatment__footer">
                  <span>{treatment.note}</span>
                  <div>
                    <button type="button" onClick={() => setActiveTreatment(treatment)}>See More</button>
                    <a href={`/book-now?service=${encodeURIComponent(treatment.name)}`}>Book Now <ArrowRight size={15} /></a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="head-cta">
          <div className="page-width">
            <p className="eyebrow eyebrow--light">YOUR MOMENT TO RESET</p>
            <h2>Ready to feel renewed?</h2>
            <a className="button button--gold" href="/book-now">Book Your Therapy <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>

      {activeTreatment && (
        <div
          className="service-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveTreatment(null);
          }}
        >
          <article className="service-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
            <button className="service-modal__close" type="button" aria-label="Close service details" onClick={() => setActiveTreatment(null)}>
              <X />
            </button>

            <div className="service-modal__hero">
              <img src={activeTreatment.image} alt={`${activeTreatment.name} treatment`} />
              <div className="service-modal__hero-shade" />
              <div className="service-modal__hero-copy">
                <p>{activeTreatment.number} — Head Therapy</p>
                <h2 id="service-modal-title">{activeTreatment.name}</h2>
                <div>
                  {activeTreatment.price && <strong>{activeTreatment.price}</strong>}
                  <span>{activeTreatment.duration}</span>
                </div>
              </div>
            </div>

            <div className="service-modal__body">
              <p className="service-modal__intro">{activeTreatment.intro}</p>
              {activeTreatment.offer && <p className="head-treatment__offer">{activeTreatment.offer}</p>}

              {activeTreatment.options.length > 0 ? (
                <div className={`service-modal__services${activeTreatment.options.length === 3 ? ' service-modal__services--three' : ''}`}>
                  {activeTreatment.options.map((option) => (
                    <section className="service-modal__service" key={option.title}>
                      <img src={option.image} alt={`${option.title} treatment`} />
                      <div>
                        <h3>{option.title}</h3>
                        {option.highlights && (
                          <ul>{option.highlights.map((item) => <li key={item}><strong>{item}</strong></li>)}</ul>
                        )}
                        <p>{option.description}</p>
                        {option.emphasis && <p><strong>{option.emphasis}</strong></p>}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="service-modal__single">
                  <h3>Express Scalp Therapy</h3>
                  <p>{activeTreatment.details}</p>
                </div>
              )}

              <div className="service-modal__footer">
                <span>{activeTreatment.note}</span>
                <a href={`/book-now?service=${encodeURIComponent(activeTreatment.name)}`}>Book Now <ArrowRight size={16} /></a>
              </div>
            </div>
          </article>
        </div>
      )}
      <Footer />
      <FloatingActions />
    </>
  );
}
