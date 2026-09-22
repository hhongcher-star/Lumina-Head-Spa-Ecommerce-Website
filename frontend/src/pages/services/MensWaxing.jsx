import { ArrowRight } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/waxing.css';

const images = {
  brow: 'https://www.brazilliancespa.co.za/cdn/shop/files/Brazilliance-Spa-Men-Waxing-Services-Cape-Town-4_9410348c-4bde-47fa-b9dc-611be0346f5e.jpg?crop=center&height=1263&v=1740766027&width=1263',
  back: 'https://images.squarespace-cdn.com/content/v1/678e86f23965517c9e0fb95e/ec21f1e0-045b-464d-8795-89f7fa6ad3c6/Waxing%2BR%C3%BCcken%2BMann%2Bin%2BZ%C3%BCrich%2B-%2BMenesthetic.png',
  body: 'https://charlotted.fr/img/cire-dos-homme.jpg',
  grooming: 'https://viktormensgrooming.com.au/cdn/shop/files/Viktor_Men_s_Grooming_Wellbeing_Lounge_waxing_for_men_Caloundra.png?v=1771367797&width=1600',
  fullLeg: '/images/waxing/men/full-leg-wax.webp',
  chest: '/images/waxing/men/chest-wax.jpg',
  fullFront: '/images/waxing/men/full-front-wax.webp',
  stomach: '/images/waxing/men/stomach-wax.jpg',
};

const services = [
  { id: 'men-center-brow-wax', name: 'Men Center Brow Wax', price: '$5.00', description: 'Quickly cleans up the area between the brows for a more defined look.', image: images.brow },
  { id: 'men-full-arm-wax', name: 'Men Full Arm Wax', price: '$35.00', description: 'Complete arm waxing for smooth, hair-free arms.', image: images.grooming },
  { id: 'men-full-leg-wax', name: 'Men Full Leg Wax', price: '$65.00', description: 'Smooths both legs completely, perfect for athletes or personal grooming.', image: images.fullLeg },
  { id: 'men-nose-wax', name: 'Men Nose Wax', price: '$10.00', description: 'Safely removes visible nose hair for a cleaner appearance.', image: images.brow },
  { id: 'men-toe-wax', name: 'Men Toe Wax', price: '$8.00', description: 'Removes hair from toes for neat-looking feet.', image: images.grooming },
  { id: 'men-chest-wax', name: 'Men Chest Wax', price: '$30.00', description: 'Removes chest hair for a smooth, clean upper body appearance.', image: images.chest },
  { id: 'men-full-back-wax', name: 'Men Full Back Wax', price: '$40.00', description: 'Thoroughly removes back hair for a cleaner, fresher feel.', image: images.back },
  { id: 'men-half-arm-wax', name: 'Men Half Arm Wax', price: '$25.00', description: 'Removes hair from either the upper or lower arms for a clean look.', image: images.grooming },
  { id: 'men-shoulder-wax', name: 'Men Shoulder Wax', price: '$20.00', description: 'Clears shoulder hair for a smooth and groomed silhouette.', image: images.back },
  { id: 'men-brow-wax', name: 'Men Brow Wax', price: '$25.00', description: 'Shapes and defines brows for a polished and masculine look.', image: images.brow },
  { id: 'men-ear-wax', name: 'Men Ear Wax', price: '$10.00', description: 'Eliminates unwanted ear hair for a neat and groomed look.', image: images.brow },
  { id: 'men-full-front-wax', name: 'Men Full Front Wax (Chest & Stomach Combo)', price: '$65.00', description: 'Combo wax of chest and stomach for a polished upper body.', image: images.fullFront },
  { id: 'men-half-back-wax', name: 'Men Half Back Wax', price: '$20.00', description: 'Targets either upper or lower back for partial hair removal.', image: images.back },
  { id: 'men-stomach-wax', name: 'Men Stomach Wax', price: '$30.00', description: 'Removes stomach hair for a clean and toned look.', image: images.stomach },
];

export default function MensWaxing() {
  return (
    <>
      <Header />
      <main className="waxing-page">
        <section className="waxing-hero mens-waxing-hero">
          <div className="waxing-hero__shade" />
          <div className="waxing-hero__content page-width">
            <p className="eyebrow eyebrow--light">Men’s Waxing Services</p>
            <h1>Clean Lines.<br />Quiet Confidence.</h1>
            <p>Professional waxing tailored for men, with discreet care, efficient service, and smooth results.</p>
          </div>
        </section>

        <section className="waxing-intro page-width">
          <div>
            <p className="eyebrow">Men’s Grooming</p>
            <h2>Look Sharp.<br />Feel Clean.</h2>
          </div>
          <p>Look sharp, feel clean, and stay confident with our professional men’s waxing services. Whether you want smooth skin for athletic performance, hygiene, or personal preference, we offer discreet and efficient waxing tailored for men.</p>
        </section>

        <section className="waxing-services page-width" aria-label="Men's waxing services">
          {services.map((service) => (
            <article className="waxing-card" id={service.id} key={service.id}>
              <img src={service.image} alt={`${service.name} professional service`} />
              <div className="waxing-card__content">
                <div className="waxing-card__heading">
                  <div>
                    <p>Men’s Waxing</p>
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

        <section className="waxing-cta mens-waxing-cta">
          <div className="page-width">
            <p className="eyebrow eyebrow--light">CLEAN, SMOOTH, CONFIDENT</p>
            <h2>Ready for a sharper finish?</h2>
            <a className="button button--gold" href="/book-now?service=Men%27s%20Waxing">Book Men’s Waxing <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
