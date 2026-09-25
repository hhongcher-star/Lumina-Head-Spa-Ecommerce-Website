import { ArrowLeft, ArrowRight, Clock3, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import FloatingActions from '../components/common/FloatingActions';
import { services, spaImages } from '../data/homeData';

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlide((current) => (current + 1) % spaImages.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  const changeSlide = (direction) => {
    setSlide((current) => (current + direction + spaImages.length) % spaImages.length);
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__shade" />
          <div className="hero__content page-width">
            <div className="hero__intro">
              <h1>Lumina Head Spa for Calm, Beauty &amp; Renewal</h1>
              <span className="hero__rule" />
              <p className="hero__description">
                A serene Chamblee spa for restorative head treatments, advanced facials, waxing,
                and polished hair finishing, with personalized care designed around your pace.
              </p>
              <div className="hero__actions">
                <a className="button button--gold hero__booking-button" href="/book-now">Book Now <ArrowRight size={19} /></a>
                <a className="button button--soft hero__menu-button" href="/services/head-treatment">Spa Menu <ArrowRight size={19} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section section-padding">
          <div className="page-width">
            <div className="section-heading services-section__heading">
              <p className="eyebrow">OUR SERVICES</p>
              <h2>Treatments for your<br />beauty and well-being.</h2>
              <p>Every Lumina experience is thoughtfully tailored to restore balance, encourage confidence, and leave you feeling renewed.</p>
              <a className="button button--gold services-section__button" href="/services/facial">
                Explore Our Services <ArrowRight size={17} />
              </a>
            </div>
            <div className="service-grid">
              {services.map(({ title, description, image, href, treatments }) => (
                <article className="service-card" key={title}>
                  <div className="service-card__image-wrap">
                    <img src={image} alt={`${title} service`} />
                  </div>
                  <div className="service-card__body">
                    <h3><a href={href}>{title}</a></h3>
                    <p>{description}</p>
                    <div className="service-card__treatments">
                      {treatments.map(([label, treatmentHref]) => (
                        <a href={treatmentHref} key={label}>
                          <span>{label}</span>
                          <ArrowRight size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="spa-section section-padding">
          <div className="spa-section__layout">
            <div className="spa-section__copy">
              <p className="eyebrow">OUR SPA</p>
              <h2>A softer pace<br />starts here.</h2>
              <p>Step away from the noise and into a space designed around calm, comfort, and personal care.</p>
              <a className="text-link text-link--large" href="/spa-facilities">Explore our facilities <ArrowRight size={17} /></a>
              <div className="carousel-controls">
                <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous spa photo"><ArrowLeft /></button>
                <span>{String(slide + 1).padStart(2, '0')} / {String(spaImages.length).padStart(2, '0')}</span>
                <button type="button" onClick={() => changeSlide(1)} aria-label="Next spa photo"><ArrowRight /></button>
              </div>
            </div>
            <div className="spa-carousel" aria-live="polite">
              {spaImages.map((image, index) => (
                <img className={index === slide ? 'is-active' : ''} src={image.src} alt={image.alt} key={image.src} />
              ))}
              <p className="spa-carousel__message">BEAUTY<br />LIVES IN<br />A CALMER YOU</p>
              <div className="spa-carousel__progress" style={{ '--progress': `${((slide + 1) / spaImages.length) * 100}%` }} />
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="booking-section__shade" />
          <div className="booking-section__content page-width">
            <p className="booking-section__brand">LUMINA</p>
            <p className="eyebrow eyebrow--light">BOOK WITH US</p>
            <h2>Your reset is waiting.</h2>
            <p>Give yourself time to slow down, feel cared for, and leave renewed.</p>
            <a className="button button--gold" href="/book-now">Book Now <ArrowRight size={17} /></a>
            <span className="booking-section__rule" />
            <p className="booking-section__ritual">RELAX <b>•</b> RECHARGE <b>•</b> BE YOU</p>
          </div>
        </section>

        <section className="location-section section-padding">
          <div className="page-width location-section__layout">
            <div className="location-map">
              <iframe
                title="Map to Lumina Head Spa"
                src="https://www.google.com/maps?q=2390+Chamblee+Tucker+Rd+Suite+102,+Chamblee,+GA+30341&output=embed"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-content">
              <p className="eyebrow location-content__eyebrow">FIND YOUR WAY TO CALM</p>
              <h2>Visit Lumina</h2>
              <p className="location-content__intro">Step into a space designed for relaxation, renewal, and you.<br />We can't wait to welcome you.</p>
              <div className="location-details">
                <div className="location-item">
                  <span className="location-item__icon"><MapPin /></span>
                  <div><span>Address</span><p>2390 Chamblee Tucker Rd #102,<br />Chamblee, GA 30341</p></div>
                </div>
                <div className="location-item">
                  <span className="location-item__icon"><Phone /></span>
                  <div><span>Call Us</span><a href="tel:+16785875161">678-587-5161</a></div>
                </div>
                <div className="location-item">
                  <span className="location-item__icon"><Clock3 /></span>
                  <div><span>Business Hours</span><p>Monday - Sunday<br />10:00 AM - 8:30 PM</p></div>
                </div>
              </div>
              <a className="button button--forest location-content__button" href="https://www.google.com/maps/dir/?api=1&destination=2390+Chamblee+Tucker+Rd+Suite+102,+Chamblee,+GA+30341" target="_blank" rel="noreferrer">
                Get Directions <ArrowRight size={18} />
              </a>
              <p className="location-content__signature">Self care<br />lives here</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
