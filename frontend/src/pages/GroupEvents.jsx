import { ArrowRight, CakeSlice, CalendarDays, Gem, Heart, Home, PartyPopper, Users } from 'lucide-react';
import FloatingActions from '../components/common/FloatingActions';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import '../styles/group-events.css';

const occasions = [
  { icon: Gem, title: 'Bridal Showers' },
  { icon: Users, title: 'Girlfriend Retreats' },
  { icon: PartyPopper, title: 'Bachelor & Bachelorette Celebrations' },
  { icon: Home, title: 'Family Gatherings' },
  { icon: CakeSlice, title: 'Birthday Celebrations' },
  { icon: Heart, title: 'Anniversary Specials' },
];

const notes = [
  {
    title: 'For groups of 4 or more',
    text: 'A 50% deposit of the total service fee is required in advance to secure your appointment.',
  },
  {
    title: 'Deposit Policy',
    text: 'The deposit is non-refundable for any reason at any time. After the service, only the remaining balance will be due.',
  },
  {
    title: 'Lumina Members',
    text: 'Members do not need to pay an additional deposit. However, if they fail to show up on time, the deposit amount will be deducted from their membership balance.',
  },
];

export default function GroupEvents() {
  return (
    <>
      <Header />
      <main className="groups-page">
        <section className="groups-hero">
          <img src="/images/group-events/group-celebration.jpg" alt="Friends celebrating a group spa day together" />
          <div className="groups-hero__shade" />
          <div className="groups-hero__content page-width">
            <p className="eyebrow eyebrow--light">Group Experiences</p>
            <h1>Celebrate Together,<br /><em>Unwind Together.</em></h1>
            <p>Thoughtfully curated spa experiences designed for meaningful moments, celebrations, and time together.</p>
            <a className="button button--gold" href="tel:+16785875161">Call to Plan <ArrowRight size={17} /></a>
            <div className="groups-hero__words">
              <span>Relax</span><i />
              <span>Connect</span><i />
              <span>Celebrate</span>
            </div>
          </div>
        </section>

        <section className="groups-occasions page-width">
          <div className="groups-section-heading">
            <p className="eyebrow">Perfect for Every Occasion</p>
            <h2>Made for Moments Worth Sharing</h2>
            <p>Our spa packages and services are fully customizable and tailored to your unique needs. We offer group experiences for parties of 8 or more, perfect for:</p>
          </div>
          <div className="groups-occasion-grid">
            {occasions.map(({ icon: Icon, title }) => (
              <article key={title}>
                <Icon size={27} strokeWidth={1.35} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="groups-privilege">
          <div className="groups-privilege__inner page-width">
            <Users size={35} strokeWidth={1.3} />
            <div>
              <p className="eyebrow">Group Privilege</p>
              <h2>Groups of 5 or more enjoy 10% off</h2>
              <p>with a 2-day advance phone booking.</p>
            </div>
            <span>More Beautiful<br />Moments Together</span>
          </div>
        </section>

        <section className="groups-plan page-width">
          <div className="groups-plan__content">
            <div className="groups-section-heading">
              <p className="eyebrow">Plan Your Group Experience</p>
              <h2>A Few Things to Note</h2>
            </div>
            <div className="groups-notes">
              {notes.map((note, index) => (
                <article key={note.title}>
                  <span>0{index + 1}</span>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </div>
          <figure className="groups-plan__image">
            <img src="/images/group-events/spa-details.jpg" alt="Warm spa setting with towels and candles" />
            <figcaption>Relax.<br />Reconnect.<br />Celebrate.</figcaption>
          </figure>
        </section>

        <section className="groups-cta">
          <CalendarDays size={34} strokeWidth={1.25} />
          <p className="eyebrow eyebrow--light">Ready to Plan Your Spa Day?</p>
          <h2>Let’s Create Your Perfect Group Experience.</h2>
          <p>Call us to arrange a personalized spa experience for your special occasion.</p>
          <a className="button button--gold" href="tel:+16785875161">Call (678) 587-5161 <ArrowRight size={17} /></a>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
