import { Camera, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main page-width">
        <div className="footer__brand">
          <Logo light />
          <p>Thoughtful spa rituals for radiant skin, healthy hair, and a calmer you.</p>
          <div className="footer__socials">
            <a className="social-link" href="https://www.instagram.com" aria-label="Instagram"><Camera size={19} /></a>
            <a className="social-link" href="tel:+16785875161" aria-label="Call Lumina"><Phone size={18} /></a>
            <a className="social-link" href="sms:+16785875161" aria-label="Message Lumina"><MessageCircle size={18} /></a>
          </div>
        </div>
        <details className="footer__group" open>
          <summary>Services</summary>
          <div className="footer__links">
            <a href="/services/facial">Facial</a>
            <a href="/services/head-treatment">Head Treatment</a>
            <a href="/services/hair-blow-dry">Hair Blow Dry</a>
            <a href="/services/waxing">Waxing</a>
          </div>
        </details>
        <details className="footer__group" open>
          <summary>Explore</summary>
          <div className="footer__links">
            <a href="/">Home</a>
            <a href="/group-events">Group Events</a>
            <a href="/gift-card">Gift Card</a>
            <a href="/spa-facilities">Our Spa</a>
            <a href="/book-now">Book Appointment</a>
          </div>
        </details>
        <div className="footer__contact">
          <h3>Contact</h3>
          <div className="footer__details">
            <p><MapPin size={18} /><span>2390 Chamblee Tucker Rd ste102<br />Chamblee, GA 30341</span></p>
            <a href="tel:+16785875161"><Phone size={18} /><span>678-587-5161</span></a>
            <p><Clock3 size={18} /><span>Monday - Sunday<br />10:00 AM - 8:30 PM</span></p>
          </div>
        </div>
      </div>
      <div className="footer__bottom page-width">
        <span>© {new Date().getFullYear()} Lumina Head Spa. All rights reserved.</span>
        <div><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></div>
      </div>
    </footer>
  );
}
