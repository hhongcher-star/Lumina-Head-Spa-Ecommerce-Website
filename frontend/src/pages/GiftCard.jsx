import { ArrowRight, Gift, Phone, ShoppingBag } from 'lucide-react';
import FloatingActions from '../components/common/FloatingActions';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import '../styles/gift-card.css';

export default function GiftCard() {
  return (
    <>
      <Header />
      <main className="gift-card-page">
        <section className="gift-card-hero">
          <img src="/images/spa/lumina-8.avif" alt="A peaceful treatment room at Lumina Head Spa" />
          <div className="gift-card-hero__shade" />
          <div className="gift-card-hero__inner page-width">
            <div className="gift-card-hero__copy">
              <p className="eyebrow eyebrow--light">A Thoughtful Gift</p>
              <h1>Give the Gift<br /><em>of Lumina.</em></h1>
              <p>For rest, renewal, and a little time set aside just for them.</p>
            </div>
            <div className="gift-card-mini" aria-label="Lumina gift card">
              <div className="gift-card-mini__top">
                <img src="/images/brand/lumina-logo.webp" alt="Lumina" />
                <span>Gift Card</span>
              </div>
              <div className="gift-card-mini__bottom">
                <div>
                  <small>A Gift of Wellness</small>
                  <strong>For someone special</strong>
                </div>
                <Gift size={24} strokeWidth={1.3} />
              </div>
            </div>
          </div>
        </section>

        <section className="gift-card-details page-width">
          <div className="gift-card-details__intro">
            <p className="eyebrow">Gift Cards Available</p>
            <h2>A beautiful way to say<br />take some time for you.</h2>
          </div>

          <div className="gift-card-details__content">
            <p>Looking for the perfect gift? Our gift cards are a great choice for any occasion!</p>
            <p>To inquire or purchase, please call us at <a href="tel:+16785875161">678-587-5161</a>.</p>
            <p>Give the gift of choice today!</p>

            <a className="button button--forest gift-card-details__call" href="tel:+16785875161">
              <Phone size={18} /> Call 678-587-5161 <ArrowRight size={18} />
            </a>

            <aside className="gift-card-notice">
              <ShoppingBag size={25} strokeWidth={1.35} />
              <div>
                <strong>In-store purchase only</strong>
                <p>At this time, gift cards are available for purchase only with in-store payment. We apologize for any inconvenience.</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
