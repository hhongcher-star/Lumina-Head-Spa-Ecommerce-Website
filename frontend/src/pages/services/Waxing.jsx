import { ArrowRight } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/waxing.css';

const images = {
  body: 'https://imgs.letsdeal.com/48614556-183a-4719-8593-88fbdd08dee2?format=jpeg&height=900&mode=crop&scale=both&width=1400',
  back: 'https://konturbeautylabs.ro/images/services/epilare-cu-ceara/epilare-cu-ceara-4.jpg',
  lowerBack: 'https://static.glossgenius.com/public/service/e1ec1428e12ea487a58ef2bac8f75e9489d448ae/image/512bb81a6853addce2378f42515cdf4e.jpg',
  underarm: 'https://www.enhancedestetic.com/cdn/shop/files/Waxing_session_in_beauty_studio_1.png?v=1773764956&width=1200',
  detail: 'https://img.grouponcdn.com/deal/SpMch2TzgkteLcGQYNzuC9/2J-2000x1200/v1/t2001x1212.jpg',
};

const services = [
  { id: 'chest-wax', name: 'Chest Wax', price: '$15', description: 'Removes unwanted chest hair for a clean, smooth look.', image: images.body },
  { id: 'full-arm-wax', name: 'Full Arm Wax', price: '$24', description: 'Complete hair removal from shoulders to wrists.', image: images.detail },
  { id: 'full-back-wax', name: 'Full Back Wax', price: '$20', description: 'Leaves the entire back soft and hair-free.', image: images.back },
  { id: 'full-leg-wax', name: 'Full Leg Wax', price: '$50', description: 'Smooths both legs from thighs to ankles.', image: images.body },
  { id: 'full-stomach-wax', name: 'Full Stomach Wax', price: '$18', description: 'Clears all hair from the stomach area.', image: images.detail },
  { id: 'half-arm-wax', name: 'Half Arm Wax', price: '$13', description: 'Hair removal from upper or lower arms.', image: images.underarm },
  { id: 'half-leg-wax', name: 'Half Leg Wax', price: '$30', description: 'Targets either the upper or lower half of the legs.', image: images.body },
  { id: 'half-stomach-wax', name: 'Half Stomach Wax', price: '$13', description: 'Waxing for either upper or lower stomach area.', image: images.detail },
  { id: 'lower-back-wax', name: 'Lower Back Wax', price: '$10', description: 'Focuses on the lower back area only.', image: images.lowerBack },
  { id: 'sideburn-wax', name: 'Sideburn Wax', price: '$8', description: 'Shapes and cleans the sideburn area.', image: images.detail },
  { id: 'underarm-wax', name: 'Underarm Wax', price: '$18', description: 'Removes hair from underarms for a clean, fresh feel.', image: images.underarm },
];

export default function Waxing() {
  return (
    <>
      <Header />
      <main className="waxing-page">
        <section className="waxing-hero">
          <div className="waxing-hero__shade" />
          <div className="waxing-hero__content page-width">
            <p className="eyebrow eyebrow--light">Waxing Services</p>
            <h1>Smooth Skin.<br />Lasting Confidence.</h1>
            <p>Reveal smooth, radiant skin with professional waxing care designed around comfort, precision, and beautiful results.</p>
            <a className="button button--gold" href="/book-now?service=Waxing">Book Now <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="waxing-intro page-width">
          <div>
            <p className="eyebrow">Professional Waxing</p>
            <h2>Gentle Care.<br />Beautifully Smooth.</h2>
          </div>
          <p>Reveal smooth, radiant skin with our professional waxing services. We use high-quality wax and expert techniques to gently remove unwanted hair, leaving your skin soft and hair-free for weeks. Whether you’re looking for a quick touch-up or full body waxing, our experienced team ensures a clean, comfortable, and hygienic experience every time.</p>
        </section>

        <section className="waxing-services page-width" aria-label="Waxing services">
          {services.map((service) => (
            <article className="waxing-card" id={service.id} key={service.id}>
              <img src={service.image} alt={`${service.name} professional waxing service`} />
              <div className="waxing-card__content">
                <div className="waxing-card__heading">
                  <div>
                    <p>Waxing Service</p>
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

        <section className="waxing-cta">
          <div className="page-width">
            <p className="eyebrow eyebrow--light">SMOOTH, CLEAN, CONFIDENT</p>
            <h2>Ready for beautifully smooth skin?</h2>
            <a className="button button--gold" href="/book-now?service=Waxing">Book Your Waxing <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
