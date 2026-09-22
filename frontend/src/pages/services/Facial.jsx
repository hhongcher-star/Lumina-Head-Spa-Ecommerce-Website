import { ArrowRight } from 'lucide-react';
import FloatingActions from '../../components/common/FloatingActions';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../styles/facial.css';

const treatments = [
  {
    id: 'signature-peptide-renewal',
    name: 'The Signature Peptide Renewal',
    mood: 'Replenish · Rejuvenate · Glow',
    duration: '90 mins',
    price: '$240',
    image: '/images/facial/signature-peptide-renewal.webp',
    summary: 'A rejuvenating facial designed to support collagen, restore moisture, and reveal a firmer, more radiant complexion.',
    benefits: ['Stimulates collagen production', 'Improves skin firmness', 'Tones facial muscles with microcurrent', 'Leaves skin lifted and youthful'],
    includes: ['Deep cleansing', 'Enzyme peel', 'Microcurrent treatment', 'Facial massage', 'Hydrating mask'],
  },
  {
    id: 'line-repair',
    name: 'Line Repair',
    mood: 'Smooth · Firm · Renew',
    duration: '75 mins',
    price: '$175',
    image: '/images/facial/line-repair.webp',
    summary: 'Target fine lines and signs of dehydration with advanced skin repair care that supports a smoother, luminous complexion.',
    benefits: ['Improves skin texture and tone', 'Targets dehydrated skin', 'Improves moisture retention'],
    includes: ['Deep cleansing', 'Vitamin C enzyme peel', 'Facial massage', 'Hydrating mask', 'LED light therapy'],
  },
  {
    id: 'unstressed-facial',
    name: 'Unstressed Facial',
    mood: 'Calm · Hydrate · Restore',
    duration: '75 mins',
    price: '$175',
    image: '/images/facial/unstressed-facial.webp',
    summary: 'A soothing facial created to reduce redness, calm sensitivity, and restore comfort to stressed or irritated skin.',
    benefits: ['Soothes sensitive or irritated skin', 'Reduces redness and inflammation', 'Helps restore stressed skin'],
    includes: ['Deep cleansing', 'Gentle exfoliation', 'Facial massage', 'Hydrating calming mask'],
  },
  {
    id: 'line-repair-facial-lift',
    name: 'Line Repair + Facial Lift',
    mood: 'Lift · Tone · Rejuvenate',
    duration: '90 mins',
    price: '$210',
    image: '/images/facial/line-repair-facial-lift.webp',
    summary: 'An enhanced line-repair ritual that pairs skin renewal with microcurrent lifting for a smoother, firmer appearance.',
    benefits: ['Combines repair with facial lifting', 'Improves skin tone and texture', 'Helps firm and rejuvenate skin'],
    includes: ['Deep cleansing', 'Enzyme peel', 'Microcurrent', 'Facial massage', 'Hydrating mask'],
  },
  {
    id: 'unstress-facial-lift',
    name: 'Unstress + Facial Lift',
    mood: 'Relax · Lift · Renew',
    duration: '90 mins',
    price: '$210',
    image: '/images/facial/unstress-facial-lift.webp',
    summary: 'Calming care and gentle lifting come together to soothe sensitive skin while supporting a refreshed, firmer look.',
    benefits: ['Combines calming care with lifting', 'Soothes sensitive or stressed skin', 'Supports a firmer appearance'],
    includes: ['Deep cleansing', 'Gentle exfoliation', 'Microcurrent', 'Facial massage', 'Hydrating calming mask'],
  },
  {
    id: 'timeless-facial',
    name: 'Timeless Facial',
    mood: 'Nourish · Renew · Radiate',
    duration: '75 mins',
    price: '$175',
    image: '/images/facial/timeless-facial.webp',
    summary: 'A deeply nourishing ritual for mature skin that encourages renewal, improves elasticity, and restores natural radiance.',
    benefits: ['Deeply nourishes mature skin', 'Promotes skin renewal', 'Improves elasticity', 'Helps restore radiance'],
    includes: ['Deep cleansing', 'Exfoliation or enzyme treatment', 'Facial massage', 'Hydrating mask'],
  },
];

export default function Facial() {
  return (
    <>
      <Header />
      <main className="facial-page">
        <section className="facial-hero">
          <div className="facial-hero__shade" />
          <div className="facial-hero__content page-width">
            <p className="eyebrow eyebrow--light">FACIAL</p>
            <h1>Reveal Healthier,<br />Brighter Skin</h1>
            <p>Customized facial treatments that deeply cleanse, nourish, and restore your natural glow.</p>
          </div>
        </section>

        <section className="facial-intro page-width">
          <div>
            <p className="eyebrow">OUR FACIAL TREATMENTS</p>
            <h2>Tailored Care<br />for Your Unique Skin</h2>
          </div>
          <p>At Lumina, we believe in more than skincare. We believe in self care. Our facial treatments combine professional techniques and premium products to reveal healthier, brighter, and more radiant skin.</p>
        </section>

        <section className="facial-treatments page-width" aria-label="Facial treatments">
          {treatments.map((treatment) => (
              <article className="facial-treatment" id={treatment.id} key={treatment.id}>
                <img src={treatment.image} alt={`${treatment.name} facial treatment`} />
                <div className="facial-treatment__content">
                  <h3>{treatment.name}</h3>
                  <p className="facial-treatment__mood">{treatment.mood}</p>
                  <div className="facial-treatment__details">
                    <div>
                      <h4>Benefits</h4>
                      <ul>{treatment.benefits.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                    <div>
                      <h4>Includes</h4>
                      <ol>{treatment.includes.map((item) => <li key={item}>{item}</li>)}</ol>
                    </div>
                  </div>
                  <div className="facial-treatment__footer">
                    <p><span>Pricing</span><strong>{treatment.price}</strong> / {treatment.duration}</p>
                    <a href={`/book-now?service=${encodeURIComponent(treatment.name)}`}>Book</a>
                  </div>
                </div>
              </article>
          ))}
        </section>

        <section className="facial-cta">
          <div className="page-width">
            <p className="eyebrow eyebrow--light">YOUR SKIN, YOUR RITUAL</p>
            <h2>Ready for your Lumina glow?</h2>
            <a className="button button--gold" href="/book-now">Book Your Facial <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
