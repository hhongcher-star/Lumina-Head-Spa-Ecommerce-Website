import { Flower2, ShowerHead, Sparkles } from 'lucide-react';
import FloatingActions from '../components/common/FloatingActions';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import '../styles/spa-facilities.css';

const spaces = [
  { image: '/images/spa/lumina-1.avif', title: 'A Calm Arrival', caption: 'A warm welcome into a quieter pace.' },
  { image: '/images/spa/lumina-2.avif', title: 'Private Treatment Rooms', caption: 'Comfortable spaces prepared for personalized care.' },
  { image: '/images/spa/lumina-3.avif', title: 'Thoughtful Details', caption: 'Every detail chosen to make your visit feel effortless.' },
  { image: '/images/spa/lumina-4.avif', title: 'Head Spa Rituals', caption: 'A restorative setting for scalp care and deep relaxation.' },
  { image: '/images/spa/lumina-5.avif', title: 'Facial Care', caption: 'A peaceful environment for skin renewal and radiance.' },
  { image: '/images/spa/lumina-6.avif', title: 'Quiet Comfort', caption: 'Soft light, warm textures, and time to settle in.' },
  { image: '/images/spa/lumina-7.avif', title: 'Professional Care', caption: 'A clean, considered space for every treatment.' },
  { image: '/images/spa/lumina-8.avif', title: 'Room to Unwind', caption: 'Designed so each guest can pause, breathe, and reset.' },
];

const comforts = [
  { icon: Flower2, title: 'Calm by Design', text: 'Warm tones and thoughtful details create a grounded, welcoming atmosphere.' },
  { icon: ShowerHead, title: 'Prepared for Care', text: 'Treatment spaces are organized for comfort, cleanliness, and unhurried service.' },
  { icon: Sparkles, title: 'A Complete Escape', text: 'Every room supports the same feeling of privacy, ease, and renewal.' },
];

export default function SpaFacilities() {
  return (
    <>
      <Header />
      <main className="facilities-page">
        <section className="facilities-hero">
          <img src="/images/spa/lumina-9.avif" alt="The serene interior of Lumina Head Spa" />
          <div className="facilities-hero__shade" />
          <div className="facilities-hero__content page-width">
            <p className="eyebrow eyebrow--light">Our Spa</p>
            <h1>A Space to Pause,<br /><em>Breathe &amp; Restore.</em></h1>
            <p>Step into a calm, welcoming environment designed around comfort, privacy, and thoughtful care.</p>
          </div>
        </section>

        <section className="facilities-intro page-width">
          <div>
            <p className="eyebrow">The Lumina Experience</p>
            <h2>Designed for Your<br />Quietest Moments</h2>
          </div>
          <p>From the moment you arrive, every part of Lumina is designed to help you slow down. Our treatment rooms combine professional care with soft, restorative surroundings so you can feel comfortable throughout your visit.</p>
        </section>

        <section className="facilities-comforts page-width" aria-label="Spa comforts">
          {comforts.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={27} strokeWidth={1.3} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="facilities-gallery page-width">
          <div className="facilities-gallery__heading">
            <p className="eyebrow">Inside Lumina</p>
            <h2>Explore Our Space</h2>
          </div>
          <div className="facilities-gallery__grid">
            {spaces.map((space, index) => (
              <figure className={`facilities-gallery__item facilities-gallery__item--${index + 1}`} key={space.image}>
                <img src={space.image} alt={`${space.title} at Lumina Head Spa`} />
                <figcaption>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{space.title}</h3>
                    <p>{space.caption}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="facilities-closing">
          <div className="page-width">
            <p className="eyebrow eyebrow--light">Welcome to Lumina</p>
            <h2>Your time to feel restored.</h2>
            <p>Visit us and experience a space created for genuine rest and renewal.</p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
