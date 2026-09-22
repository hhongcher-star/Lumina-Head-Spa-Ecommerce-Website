import { ArrowRight, Feather, Sparkles, Wind } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/hair-blow-dry.css';

const finishPoints = [
  { icon: Sparkles, title: 'Smooth & Polished' },
  { icon: Wind, title: 'Enhances Natural Movement' },
  { icon: Feather, title: 'A Fresh, Confident You' },
];

export default function HairBlowDry() {
  return (
    <>
      <Header />
      <main className="blow-dry-page">
        <section className="blow-dry-hero">
          <img src="/images/hair-blow-dry/hero.avif" alt="Professional hair blow dry styling at Lumina" />
          <div className="blow-dry-hero__shade" />
          <div className="blow-dry-hero__content page-width">
            <p className="eyebrow eyebrow--light">Hair Blow Dry</p>
            <h1>Effortless Style,<br /><em>Beautifully Finished.</em></h1>
            <p>Complete your spa experience with a smooth, polished blow dry designed to leave your hair feeling fresh, soft, and beautifully styled.</p>
            <a className="button button--gold" href="/book-now?service=Hair%20Blow%20Dry">Book Now <ArrowRight size={17} /></a>
            <div className="blow-dry-hero__note">
              <span>Good Hair</span>
              <span>Elevates</span>
              <span>Every Moment</span>
            </div>
          </div>
        </section>

        <section className="blow-dry-intro page-width">
          <div className="blow-dry-intro__copy">
            <p className="eyebrow">The Finishing Touch</p>
            <h2>Leave Feeling<br />Refreshed &amp; Polished</h2>
            <p>Our Hair Blow Dry service is the perfect finishing touch after your Lumina experience. With gentle drying and professional styling, we help bring out your hair’s natural movement while creating a smooth, polished finish.</p>
            <p>Whether you prefer a soft and natural look or something more refined, each blow dry is approached with care to complement your hair and personal style.</p>
          </div>
          <figure className="blow-dry-intro__image">
            <img src="/images/hair-blow-dry/good-hair-days.png" alt="Good hair brighter days" />
          </figure>
        </section>

        <section className="blow-dry-finish page-width">
          <figure className="blow-dry-finish__image">
            <img src="/images/hair-blow-dry/styling.avif" alt="Hair being professionally blow dried and styled" />
          </figure>
          <div className="blow-dry-finish__copy">
            <p className="eyebrow">A Beautiful Finish</p>
            <h2>Simple. Soft. Effortless.</h2>
            <p>From freshly washed hair to a beautifully finished look, our blow dry service focuses on comfort, movement, and a natural result.</p>
            <p>Designed to leave your hair feeling light, smooth, and refreshed — so you can step out feeling effortlessly put together.</p>

            <div className="blow-dry-points">
              {finishPoints.map(({ icon: Icon, title }) => (
                <div key={title}>
                  <Icon size={22} strokeWidth={1.35} />
                  <span>{title}</span>
                </div>
              ))}
            </div>
            <a className="button blow-dry-finish__button" href="/book-now?service=Hair%20Blow%20Dry">Book Your Blow Dry <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
