import { ArrowRight } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/waxing.css';

export const mensWaxingServices = [
  { id: 'men-center-brow-wax', name: 'Men Center Brow Wax', price: '$5.00', description: 'Quickly cleans up the area between the brows for a more defined look.', image: 'https://encantacejas.com/cdn/shop/files/manwaxingeyebrows_1445x.png?v=1766429364' },
  { id: 'men-full-arm-wax', name: 'Men Full Arm Wax', price: '$35.00', description: 'Complete arm waxing for smooth, hair-free arms.', image: 'https://citynails.studio/upload/photos/125/medium_epiljacija-gpt.jpg' },
  { id: 'men-full-leg-wax', name: 'Men Full Leg Wax', price: '$65.00', description: 'Smooths both legs completely, perfect for athletes or personal grooming.', image: 'https://www.menswaxing.co.uk/api/media/file/male-lower-leg-waxing-weston-super-mare.jpg?v=1753895790725' },
  { id: 'men-nose-wax', name: 'Men Nose Wax', price: '$10.00', description: 'Safely removes visible nose hair for a cleaner appearance.', image: 'https://arangallage.lk/storage/2025/08/Gents-Waxing-Hair-Removal-3.png' },
  { id: 'men-toe-wax', name: 'Men Toe Wax', price: '$8.00', description: 'Removes hair from toes for neat-looking feet.', image: 'https://img77.uenicdn.com/image/upload/v1679665175/business/a02928d9821147e0a2ef50416c788154.jpg' },
  { id: 'men-chest-wax', name: 'Men Chest Wax', price: '$30.00', description: 'Removes chest hair for a smooth, clean upper body appearance.', image: 'https://d2ki7eiqd260sq.cloudfront.net/Waxing-Men-Chest-Abdomen-1-acaa7892-9a12-4448-be67-9a164d5b8cc5.jpg' },
  { id: 'men-full-back-wax', name: 'Men Full Back Wax', price: '$40.00', description: 'Thoroughly removes back hair for a cleaner, fresher feel.', image: 'https://images.squarespace-cdn.com/content/v1/678e86f23965517c9e0fb95e/ec21f1e0-045b-464d-8795-89f7fa6ad3c6/Waxing%2BR%C3%BCcken%2BMann%2Bin%2BZ%C3%BCrich%2B-%2BMenesthetic.png' },
  { id: 'men-half-arm-wax', name: 'Men Half Arm Wax', price: '$25.00', description: 'Removes hair from either the upper or lower arms for a clean look.', image: 'https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/2a7ace36-4db6-428e-a6fe-2878f6a76022.png' },
  { id: 'men-shoulder-wax', name: 'Men Shoulder Wax', price: '$20.00', description: 'Clears shoulder hair for a smooth and groomed silhouette.', image: 'https://static.wixstatic.com/media/11062b_62cab9a847f74499893a33ca951749d6~mv2.jpg/v1/fill/w_640%2Ch_468%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/11062b_62cab9a847f74499893a33ca951749d6~mv2.jpg' },
  { id: 'men-brow-wax', name: 'Men Brow Wax', price: '$25.00', description: 'Shapes and defines brows for a polished and masculine look.', image: 'https://merebo.tokyo/recruit/images/common/reason-block01.webp' },
  { id: 'men-ear-wax', name: 'Men Ear Wax', price: '$10.00', description: 'Eliminates unwanted ear hair for a neat and groomed look.', image: 'https://shinecode.ae/storage/364/Men_ear_wax_shinecode.webp' },
  { id: 'men-full-front-wax', name: 'Men Full Front Wax (Chest & Stomach Combo)', price: '$65.00', description: 'Combo wax of chest and stomach for a polished upper body.', image: '/images/waxing/men/full-front-wax.webp' },
  { id: 'men-half-back-wax', name: 'Men Half Back Wax', price: '$20.00', description: 'Targets either upper or lower back for partial hair removal.', image: 'https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1440%2Ch%3D756%2Cfit%3Dcrop%2Cf%3Djpeg/AMqlRJ7EwGs3EgbJ/depilazione-YKb8NENz2yTg3G8g.png' },
  { id: 'men-stomach-wax', name: 'Men Stomach Wax', price: '$30.00', description: 'Removes stomach hair for a clean and toned look.', image: 'https://www.lpbeautyque.it/files/admin/immagini/addome-cera-tradizionale-uomo-l.jpg' },
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
          {mensWaxingServices.map((service) => (
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
