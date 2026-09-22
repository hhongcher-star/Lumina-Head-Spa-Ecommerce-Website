import { ArrowRight } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/waxing.css';

const services = [
  {
    id: 'full-face-waxing',
    name: 'Full Face Waxing',
    price: '$50',
    description: 'Remove unwanted hair from your entire face for a smooth, radiant look. Our full face waxing is gentle yet effective, leaving your skin soft and hair-free. Ideal for maintaining a clean and polished appearance.',
    image: '/images/waxing/full-face-waxing.png',
  },
  {
    id: 'brow-waxing',
    name: 'Brow Waxing',
    price: '$12',
    description: 'Shape and define your eyebrows with our precise brow waxing service. We tailor the shape to suit your facial features, giving you perfectly groomed brows that enhance your natural beauty.',
    image: '/images/waxing/brow-waxing.png',
  },
  {
    id: 'brow-lips-waxing',
    name: 'Brow + Lips Waxing',
    price: '$20',
    description: 'Get both your brows shaped and lips hair-free in one quick session. This combo service offers convenience and great value while keeping your face looking neat and fresh.',
    image: '/images/waxing/brow-lips-waxing.png',
  },
];

export default function FaceWaxing() {
  return (
    <>
      <Header />
      <main className="waxing-page">
        <section className="waxing-hero face-waxing-hero">
          <div className="waxing-hero__shade" />
          <div className="waxing-hero__content page-width">
            <p className="eyebrow eyebrow--light">Face Waxing</p>
            <h1>Smooth. Defined.<br />Naturally You.</h1>
            <p>Gentle and precise facial waxing for beautifully smooth skin and clean, polished definition.</p>
            <a className="button button--gold" href="/book-now?service=Face%20Waxing">Book Now <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="waxing-intro page-width">
          <div>
            <p className="eyebrow">Facial Waxing</p>
            <h2>Precise Care.<br />Fresh Results.</h2>
          </div>
          <p>Say goodbye to unwanted facial hair with our gentle and precise face waxing services. We use high-quality wax designed for sensitive skin to remove hair quickly and effectively, leaving your skin smooth, clean, and refreshed.</p>
        </section>

        <section className="waxing-services page-width" aria-label="Face waxing services">
          {services.map((service) => (
            <article className="waxing-card" id={service.id} key={service.id}>
              <img src={service.image} alt={`${service.name} service`} />
              <div className="waxing-card__content">
                <div className="waxing-card__heading">
                  <div>
                    <p>Face Waxing</p>
                    <h3>{service.name}</h3>
                  </div>
                  <strong>{service.price}</strong>
                </div>
                <p className="waxing-card__description">{service.description}</p>
                <a href={`/book-now?service=${encodeURIComponent(service.name)}`}>Book Now <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </section>

        <section className="waxing-cta face-waxing-cta">
          <div className="page-width">
            <p className="eyebrow eyebrow--light">SMOOTH, CLEAN, REFRESHED</p>
            <h2>Ready for a polished finish?</h2>
            <a className="button button--gold" href="/book-now?service=Face%20Waxing">Book Face Waxing <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
