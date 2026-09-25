import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPin, Minus, Phone, Plus, Search, Sparkles, Users, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { bodyWaxingServices } from './services/Waxing';
import { mensWaxingServices } from './services/MensWaxing';
import '../styles/booking.css';

export const serviceGroups = [
  {
    name: 'Facial Treatments',
    services: [
      { name: 'The Signature Peptide Renewal', description: 'A rejuvenating facial designed to support collagen, restore moisture, and reveal a firmer, more radiant complexion.', detail: 'Deep cleansing, enzyme peel, microcurrent treatment, facial massage, and a hydrating mask.', price: 240, duration: '1 hr 30 min', image: '/images/facial/signature-peptide-renewal.webp' },
      { name: 'Line Repair', description: 'Target fine lines and signs of dehydration with advanced skin repair care.', detail: 'Deep cleansing, Vitamin C enzyme peel, facial massage, hydrating mask, and LED light therapy.', price: 175, duration: '1 hr 15 min', image: '/images/facial/line-repair.webp' },
      { name: 'Unstressed Facial', description: 'A soothing facial created to reduce redness and calm sensitive or irritated skin.', detail: 'Deep cleansing, gentle exfoliation, facial massage, and a hydrating calming mask.', price: 175, duration: '1 hr 15 min', image: '/images/facial/unstressed-facial.webp' },
      { name: 'Line Repair + Facial Lift', description: 'Combines advanced skin repair with facial lifting and microcurrent.', detail: 'Deep cleansing, enzyme peel, microcurrent, facial massage, and a hydrating mask.', price: 210, duration: '1 hr 30 min', image: '/images/facial/line-repair-facial-lift.webp' },
      { name: 'Unstress + Facial Lift', description: 'Calming care and gentle lifting for sensitive or stressed skin.', detail: 'Deep cleansing, gentle exfoliation, microcurrent, facial massage, and a hydrating calming mask.', price: 210, duration: '1 hr 30 min', image: '/images/facial/unstress-facial-lift.webp' },
      { name: 'Timeless Facial', description: 'A deeply nourishing ritual for mature skin that encourages renewal and restores radiance.', detail: 'Deep cleansing, exfoliation or enzyme treatment, facial massage, and a hydrating mask.', price: 175, duration: '1 hr 15 min', image: '/images/facial/timeless-facial.webp' },
    ],
  },
  {
    name: 'Head Therapy',
    services: [
      { name: '1) Lumina Total Therapy Experience', description: 'The ultimate reset for deep stress relief and full-body recovery.', detail: 'Choose from three deeply restorative combinations:\nA. Booster Hydrating Facial + Head Spa — advanced moisture-repair facial care paired with deep cleansing, steam, and rhythmic scalp massage.\nB. Head Spa + Hot Stone Back Massage — a grounding experience that relieves buildup, eases stiffness, and improves blood flow.\nC. Head Spa + Facial + Back Renewal — head therapy, back facial, and facial care in one complete head-to-toe reset. Includes express hair dry.\n\n可选择强效补水面部护理与头皮水疗、头皮护理与热石背部按摩，或头部水疗、面部护理与背部焕肤三效合一体验。包含快速吹发服务。', price: 218, duration: '2 hr 10 min', image: '/images/head-treatment/total-therapy-experience.webp' },
      { name: '2) Lumina Signature Scalp Facial', description: 'A balanced choice for skin glow and scalp health with lasting relaxation.', detail: '40-min mini Line Repair Facial using professional-grade hydration, brightening, and relaxing products, paired with sculpting massage techniques. Followed by 70-min Head Spa Therapy with precise massage to relieve tension, rebalance oil levels, and support long-term scalp health. Includes express hair dry.\n\n40分钟面部护理结合70分钟头皮水疗护理，促进血液循环与淋巴流动，改善肤色并维护头皮长期健康。包含快速吹发服务。', price: 175, duration: '1 hr 50 min', image: '/images/head-treatment/signature-scalp-facial.png' },
      { name: '3) Lumina Back Renewal Ritual', description: '40-min Head Spa Therapy with gentle cleansing, steam, and rhythmic scalp massage.', detail: '40-min Head Spa Therapy helps reduce stress, stimulate circulation, and refresh the mind. A 30-min Back Facial includes cleansing, exfoliation, and hydration to unclog pores and refine skin texture. A favorite for stress relief and everyday reset. Includes express hair dry.\n\n40分钟头部水疗护理配合30分钟背部护理，温和清洁、蒸汽熏蒸及舒缓按摩，帮助释放压力并改善背部肌肤通透感。', price: 138, duration: '1 hr 10 min', image: '/images/head-treatment/back-renewal-ritual.png' },
      { name: '4) Lumina Essential Head Spa-(A)', description: '80min Classic Head Spa. Includes express hair dry.', detail: 'A calming scalp ritual featuring deep cleansing, gentle exfoliation, soothing massage, and warm steam to open pores and release buildup. Finished with a nourishing mask to restore scalp balance and promote healthier hair growth. Your perfect first step into true scalp care.\n\n80分钟经典头皮护理，包含深层清洁、温和去角质、舒缓按摩以及温热蒸汽。最后辅以滋养发膜，旨在平衡头皮状态、促进秀发健康生长。', price: 118, duration: '1 hr 20 min', image: '/images/head-treatment/classic-head-spa.webp' },
      { name: '4) Lumina Essential Head Spa-(B)', description: 'Head Spa + Express Facial Escape. Includes express hair dry.', detail: '45-min relaxing head spa + 35-min facial. Deep-cleanses, exfoliates, and steams the scalp to release buildup while a nourishing mask restores balance. The facial cleans, hydrates, and revives skin for a clear, renewed complexion.\n\n45分钟舒缓头皮护理加35分钟面部护理，清除头皮堆积物并滋养发膜，同时为面部肌肤清洁、补水与焕活。', price: 118, duration: '1 hr 20 min', image: '/images/head-treatment/head-spa-express-facial.webp' },
      { name: '5)-Express Scalp Therapy', description: 'A quick refresh when you just need to feel better. Simple and easy to fit into your routine.', detail: 'A 45-minute targeted treatment designed to relieve scalp tension, reduce buildup, and stimulate circulation — helping to refresh the scalp environment and leave you feeling light, clean, and rebalanced.\n\n这项45分钟的针对性护理旨在缓解头皮紧绷感、清除堆积物并促进血液循环，让头皮环境倍感轻盈、洁净与平衡。', price: 78, duration: '45 min', image: '/images/head-treatment/express-scalp-therapy.webp' },
    ],
  },
  {
    name: 'Waxing & Finishing',
    services: [
      { name: 'Full Face Waxing', description: 'Gentle, precise facial waxing for smooth skin and polished definition.', detail: 'Remove unwanted hair from the entire face for a smooth, radiant look. Gentle yet effective care leaves skin soft and polished.', price: 50, duration: '40 min', image: '/images/waxing/full-face-waxing.webp' },
      { name: 'Brow Waxing', description: 'Precise shaping tailored to your natural facial features.', detail: 'Shape and define your eyebrows with precise waxing tailored to complement your facial features.', price: 12, duration: '15 min', image: '/images/waxing/brow-waxing.webp' },
      { name: 'Brow + Lips Waxing', description: 'A convenient combination for a neat, refreshed finish.', detail: 'Brows shaped and lip area smoothed in one convenient session for a clean, refreshed result.', price: 20, duration: '20 min', image: '/images/waxing/brow-lips-waxing.webp' },
      { name: 'Hair Blow Dry', description: 'A smooth, polished blow dry to complete your Lumina experience.', detail: 'Gentle drying and professional styling bring out natural movement while creating a smooth, polished finish.', price: 45, duration: '35 min', image: '/images/hair-blow-dry/styling.avif' },
      { name: '+45min body massage', description: 'Add focused body massage time to your appointment.', detail: 'Add 45 minutes of focused body massage for deeper relaxation and tension relief.', price: 70, duration: '45 min', image: '/images/spa/lumina-3.avif' },
    ],
  },
];

const waxingBookingServices = [...bodyWaxingServices, ...mensWaxingServices].map((service) => ({
  name: service.name,
  description: service.description,
  detail: service.description,
  price: Number.parseFloat(service.price.replace(/[^0-9.]/g, '')),
  duration: 'Duration varies',
  image: service.image,
}));

serviceGroups[2].services.push(...waxingBookingServices);

const allServices = serviceGroups.flatMap((group) => group.services);

const staffMembers = [
  {
    name: 'Candy',
    image: '/images/staff/candy.png',
    summary: 'Seasoned esthetician and head spa specialist with over 30 years of hands-on experience.',
    details: 'Candy has a deep understanding of the human muscular and tendon structure as well as pressure points, allowing her to master advanced deep tissue massage techniques that effectively relieve tension and improve circulation. She also has over 20 years of skincare product experience and can recommend care tailored to each client’s skin. Candy 是一位资深的美容师及头疗师，拥有超过 30 年的按摩与美容实务经验，能够根据客户的肌肤状况提供个性化、精准的护理方案。',
  },
  {
    name: 'Ella',
    image: '/images/staff/ella.png',
    summary: 'Asian Skincare Specialist (Top Choice) with years of professional experience.',
    details: 'Ella specializes in skin care and treatment. She combines expert techniques with a personalized approach to deliver gentle, effective skincare tailored to your unique needs. Trust Ella to help your skin glow naturally, all while you relax in expert hands. 亚洲皮肤管理专家 Ella 拥有多年的美容护理经验，专注于亚洲肌肤的科学管理与个性化护理。',
  },
  {
    name: 'Susu',
    image: '/images/staff/susu.png',
    summary: 'Asian Esthetician & Head Spa Therapist from a family with a long tradition in hair and beauty.',
    details: 'Susu has extensive experience in professional hair care, cutting, styling, and blowouts. She is also a seasoned massage therapist and esthetician who excels in deep relaxation techniques, therapeutic massage, and customized facial treatments. 亚洲美容师及头疗师 Susu 出身于美容美发世家，拥有深厚的专业背景和多年的实战经验。',
  },
  {
    name: 'Zoe',
    image: '/images/staff/zoe.png',
    summary: 'Experienced esthetician skilled in massage techniques for stress relief and deep relaxation.',
    details: 'With a strong background in skincare, Zoe specializes in deep cleansing, hydration, and anti-aging treatments, offering a soothing and effective beauty experience for every client. 亚洲美容师 Zoe 是一位经验丰富的美容师，精通多种按摩手法，同时拥有专业的皮肤护理背景。',
  },
];

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
const businessTimeZone = 'America/New_York';
const timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'];

export default function Booking() {
  const requestedService = new URLSearchParams(window.location.search).get('service');
  const initialService = useMemo(() => {
    if (!requestedService) return [];
    const requested = normalize(requestedService);
    const match = allServices.find((service) => normalize(service.name).includes(requested) || requested.includes(normalize(service.name).replace(/^\d+/, '')));
    return match ? [match] : [];
  }, [requestedService]);

  const [selected, setSelected] = useState(initialService);
  const [step, setStep] = useState('services');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [expandedStaff, setExpandedStaff] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(2);
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimeZonePrompt, setShowTimeZonePrompt] = useState(false);
  const [showTimeZoneList, setShowTimeZoneList] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState(businessTimeZone);
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);
  const [pendingRemoval, setPendingRemoval] = useState(null);
  const [validationMessage, setValidationMessage] = useState(null);
  const [contactDetails, setContactDetails] = useState({ firstName: '', lastName: '', phone: '', email: '', notes: '' });
  const [confirmed, setConfirmed] = useState(false);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || businessTimeZone;
  const dates = useMemo(() => Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  }), []);
  const total = selected.reduce((sum, service) => sum + service.price, 0);

  const toggleService = (service) => {
    setSelected((current) => current.some((item) => item.name === service.name)
      ? current.filter((item) => item.name !== service.name)
      : [...current, service]);
  };

  const scrollToStepStart = () => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      const stepStart = document.querySelector('.booking-main');
      if (!stepStart) return;
      const top = stepStart.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }));
  };

  const showRequirement = (title, message) => setValidationMessage({ title, message });

  const goToStep = (nextStep) => {
    setStep(nextStep);
    scrollToStepStart();
  };

  const goToStaff = () => {
    if (!selected.length) {
      showRequirement('You need to choose a service', 'Select at least one treatment before continuing to staff selection.');
      return;
    }
    goToStep('staff');
  };

  const submitBooking = (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email } = contactDetails;
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !email.trim()) {
      showRequirement('You need to complete your details', 'Enter your first name, last name, phone number, and email before booking your appointment.');
      return;
    }
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleStaffDetails = (name) => {
    setExpandedStaff((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  };

  const goToSchedule = () => {
    if (!selected.length) {
      showRequirement('You need to choose a service', 'Select at least one treatment before continuing.');
      return;
    }
    if (!selectedStaff) {
      showRequirement('You need to choose a staff member', 'Select Any staff or choose a preferred Lumina specialist before continuing.');
      return;
    }
    goToStep('schedule');
    if (userTimeZone !== businessTimeZone) setShowTimeZonePrompt(true);
  };

  const goToContact = () => {
    if (!selectedTime) {
      showRequirement('You need to choose a time', 'Select an available appointment time before continuing to your contact details.');
      return;
    }
    goToStep('contact');
  };

  const removeFromSummary = (service) => {
    if (step === 'services') {
      toggleService(service);
      return;
    }
    setPendingRemoval(service);
  };

  const confirmRemovalAndRestart = () => {
    if (pendingRemoval) toggleService(pendingRemoval);
    setSelectedStaff('');
    setSelectedTime('');
    goToStep('services');
    setPendingRemoval(null);
  };

  return (
    <>
      <Header />
      <main className="booking-page">
        <section className="booking-hero">
          <img src="/images/spa/lumina-6.avif" alt="A quiet treatment room at Lumina Head Spa" />
          <div className="booking-hero__shade" />
          <div className="booking-hero__content page-width">
            <p className="eyebrow eyebrow--light">Reserve Your Time</p>
            <h1>Book Your<br /><em>Lumina Experience.</em></h1>
            <p>Select your services, then choose a time that works for you.</p>
          </div>
        </section>

        {confirmed ? (
          <section className="booking-confirmation page-width">
            <span><Check size={34} /></span>
            <p className="eyebrow">Request Received</p>
            <h2>Thank you for choosing Lumina.</h2>
            <p>We received your appointment request. Our team will contact you to confirm availability and finalize your visit.</p>
            <a className="button button--forest" href="/"><ArrowLeft size={17} /> Back to Home</a>
          </section>
        ) : (
          <section className="booking-workspace page-width">
            <div className="booking-main">
              <div className="booking-heading">
                <p className="eyebrow">{step === 'services' ? 'Step 01' : step === 'staff' ? 'Step 02' : step === 'schedule' ? 'Step 03' : 'Step 04'}</p>
                <h2>{step === 'services' ? 'Choose Your Services' : step === 'staff' ? 'Select Your Staff' : step === 'schedule' ? 'Choose Your Time' : 'Contact Information'}</h2>
                <p>{step === 'services' ? 'Select one or more treatments for your visit.' : step === 'staff' ? 'Choose a preferred specialist, or select any available staff member.' : step === 'schedule' ? 'Select an available date and appointment time.' : 'Enter your details so our team can confirm your visit.'}</p>
              </div>

              {step === 'services' ? (
                <div className="booking-groups">
                  {serviceGroups.map((group) => (
                    <section className="booking-group" key={group.name}>
                      <h3>{group.name}</h3>
                      <div className="booking-services">
                        {group.services.map((service) => {
                          const isSelected = selected.some((item) => item.name === service.name);
                          return (
                            <article className={`booking-service${isSelected ? ' booking-service--selected' : ''}`} key={service.name}>
                              <button className="booking-service__image" type="button" onClick={() => setActiveService(service)} aria-label={`View ${service.name} details`}>
                                <img src={service.image} alt={`${service.name} treatment`} />
                              </button>
                              <button className="booking-service__copy" type="button" onClick={() => setActiveService(service)}>
                                <strong>{service.name}</strong>
                                <small>{service.description}</small>
                                <span><b>US${service.price.toFixed(2)}</b><i />{service.duration}</span>
                              </button>
                              <button className="booking-service__toggle" type="button" onClick={() => setActiveService(service)} aria-label={`View ${service.name} details`}>{isSelected ? <Check /> : <Plus />}</button>
                            </article>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              ) : step === 'staff' ? (
                <div className="booking-staff">
                  <button className={`booking-staff__any${selectedStaff === 'Any staff' ? ' booking-staff--selected' : ''}`} type="button" onClick={() => setSelectedStaff('Any staff')}>
                    <span><Users size={25} /></span>
                    <div><strong>Any staff</strong><small>Choose the first available Lumina specialist.</small></div>
                    <i>{selectedStaff === 'Any staff' && <Check size={15} />}</i>
                  </button>
                  {staffMembers.map((staff) => {
                    const isSelected = selectedStaff === staff.name;
                    const isExpanded = expandedStaff.includes(staff.name);
                    return (
                      <article className={`booking-staff__member${isSelected ? ' booking-staff--selected' : ''}`} key={staff.name}>
                        <button className="booking-staff__select" type="button" onClick={() => setSelectedStaff(staff.name)} aria-label={`Select ${staff.name}`}>
                          <img src={staff.image} alt={`${staff.name}, Lumina specialist`} />
                          <div>
                            <strong>{staff.name}</strong>
                            <p>{isExpanded ? staff.details : staff.summary}</p>
                          </div>
                          <i>{isSelected && <Check size={15} />}</i>
                        </button>
                        <button className="booking-staff__more" type="button" onClick={() => toggleStaffDetails(staff.name)}>{isExpanded ? 'Less' : 'More'}</button>
                      </article>
                    );
                  })}
                  <div className="booking-staff__actions">
                    <button type="button" onClick={() => goToStep('services')}><ArrowLeft size={17} /> Back</button>
                    <button className="button button--forest" type="button" onClick={goToSchedule}>Continue <ArrowRight size={17} /></button>
                  </div>
                </div>
              ) : step === 'schedule' ? (
                <div className="booking-calendar">
                  <div className="booking-calendar__month">
                    <div><CalendarDays size={23} /><strong>{dates[selectedDate].toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</strong></div>
                    <span>Times shown in {selectedTimeZone === businessTimeZone ? 'Lumina time (ET)' : 'your local time'}</span>
                  </div>
                  <div className="booking-calendar__dates">
                    {dates.map((date, index) => (
                      <button className={selectedDate === index ? 'is-selected' : ''} type="button" onClick={() => { setSelectedDate(index); setSelectedTime(''); }} key={date.toISOString()}>
                        <span>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <strong>{date.getDate()}</strong>
                      </button>
                    ))}
                  </div>
                  <div className="booking-calendar__selected-date">
                    <h3>{dates[selectedDate].toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h3>
                    <button type="button" onClick={() => setShowTimeZonePrompt(true)}>{selectedTimeZone === businessTimeZone ? 'Eastern Time' : selectedTimeZone.replace('_', ' ')}</button>
                  </div>
                  <div className="booking-time-group"><h4>Morning</h4><div>{timeSlots.slice(0, 4).map((time) => <button className={selectedTime === time ? 'is-selected' : ''} type="button" onClick={() => setSelectedTime(time)} key={time}>{time}</button>)}</div></div>
                  <div className="booking-time-group"><h4>Afternoon</h4><div>{timeSlots.slice(4, 14).map((time) => <button className={selectedTime === time ? 'is-selected' : ''} type="button" onClick={() => setSelectedTime(time)} key={time}>{time}</button>)}</div></div>
                  <div className="booking-time-group"><h4>Evening</h4><div>{timeSlots.slice(14).map((time) => <button className={selectedTime === time ? 'is-selected' : ''} type="button" onClick={() => setSelectedTime(time)} key={time}>{time}</button>)}</div></div>
                  <div className="booking-calendar__actions">
                    <button type="button" onClick={() => goToStep('staff')}><ArrowLeft size={17} /> Back</button>
                    <button className="button button--forest" type="button" onClick={goToContact}>Continue <ArrowRight size={17} /></button>
                  </div>
                </div>
              ) : (
                <form className="booking-form" onSubmit={submitBooking}>
                  <div className="booking-form__appointment"><CalendarDays size={22} /><div><span>{dates[selectedDate].toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span><strong>{selectedTime} · {selectedStaff}</strong></div></div>
                  <div className="booking-form__row">
                    <label><span>First name</span><input type="text" placeholder="First name" value={contactDetails.firstName} onChange={(event) => setContactDetails((current) => ({ ...current, firstName: event.target.value }))} /></label>
                    <label><span>Last name</span><input type="text" placeholder="Last name" value={contactDetails.lastName} onChange={(event) => setContactDetails((current) => ({ ...current, lastName: event.target.value }))} /></label>
                  </div>
                  <label><span>Phone number</span><input type="tel" placeholder="+1  Phone number" value={contactDetails.phone} onChange={(event) => setContactDetails((current) => ({ ...current, phone: event.target.value }))} /></label>
                  <label><span>Email address</span><input type="email" placeholder="you@example.com" value={contactDetails.email} onChange={(event) => setContactDetails((current) => ({ ...current, email: event.target.value }))} /></label>
                  <label><span>Notes for our team</span><textarea rows="4" placeholder="Tell us about any preferences or questions." value={contactDetails.notes} onChange={(event) => setContactDetails((current) => ({ ...current, notes: event.target.value }))} /></label>
                  <div className="booking-policy"><div><strong>Cancellation policy</strong><button type="button" onClick={() => setShowCancellationPolicy(true)}>See full policy</button></div><p>Please cancel or reschedule before your appointment begins.</p></div>
                  <div className="booking-form__actions">
                    <button type="button" onClick={() => goToStep('schedule')}><ArrowLeft size={17} /> Back</button>
                    <button className="button button--forest" type="submit">Book Appointment <ArrowRight size={17} /></button>
                  </div>
                </form>
              )}
            </div>

            <aside className="booking-summary">
              <p className="eyebrow">Your Visit</p>
              <h2>Appointment Summary</h2>
              {selected.length === 0 ? (
                <div className="booking-summary__empty"><Sparkles size={25} /><p>No services added yet</p><span>Choose a treatment to begin.</span></div>
              ) : (
                <div className="booking-summary__list">
                  {selected.map((service) => (
                    <div key={service.name}>
                      <div><strong>{service.name}</strong><span>{service.duration}</span></div>
                      <b>${service.price.toFixed(2)}</b>
                      <button type="button" aria-label={`Remove ${service.name}`} onClick={() => removeFromSummary(service)}><Minus size={15} /></button>
                    </div>
                  ))}
                </div>
              )}
              <div className="booking-summary__total"><span>Estimated total</span><strong>${total.toFixed(2)}</strong></div>
              {step === 'services' && <button className="button button--forest booking-summary__next" type="button" onClick={goToStaff}>Next <ArrowRight size={17} /></button>}
              {step === 'staff' && <button className="button button--forest booking-summary__next" type="button" onClick={goToSchedule}>Next <ArrowRight size={17} /></button>}
              <div className="booking-summary__details">
                <p><MapPin size={16} />2890 Chamblee Tucker Rd, Chamblee, GA 30341</p>
                <p><Clock3 size={16} />Mon–Sun, 10:00 AM–8:30 PM</p>
                <a href="tel:+16785875161"><Phone size={16} />(678) 587-5161</a>
              </div>
            </aside>
          </section>
        )}

        {activeService && (
          <div className="booking-service-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveService(null); }}>
            <article className="booking-service-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="booking-service-title">
              <button className="booking-service-modal__close" type="button" onClick={() => setActiveService(null)} aria-label="Close service details"><X /></button>
              <div className="booking-service-modal__image">
                <img src={activeService.image} alt={`${activeService.name} treatment`} />
                <div />
              </div>
              <div className="booking-service-modal__content">
                <p className="booking-service-modal__crumb">All services <span>/</span> {activeService.name}</p>
                <h2 id="booking-service-title">{activeService.name}</h2>
                <p className="booking-service-modal__meta"><strong>US${activeService.price.toFixed(2)}</strong><i />{activeService.duration}</p>
                <p className="booking-service-modal__detail">{activeService.detail || activeService.description}</p>
                <div className="booking-service-modal__actions">
                  {selected.some((item) => item.name === activeService.name) && <button type="button" onClick={() => toggleService(activeService)}>Remove</button>}
                  <button className="button button--forest" type="button" onClick={() => { if (!selected.some((item) => item.name === activeService.name)) toggleService(activeService); setActiveService(null); }}>
                    {selected.some((item) => item.name === activeService.name) ? 'Update' : 'Add to Appointment'} <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        )}

        {showTimeZonePrompt && (
          <div className="booking-timezone-modal" role="presentation">
            <section className="booking-timezone-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="timezone-title">
              <button className="booking-timezone-modal__close" type="button" onClick={() => setShowTimeZonePrompt(false)} aria-label="Close time zone dialog"><X /></button>
              {showTimeZoneList ? (
                <>
                  <p className="eyebrow">Appointment Times</p>
                  <h2 id="timezone-title">Select a time zone</h2>
                  <p>Available times will display in this time zone.</p>
                  <label className="booking-timezone-search"><Search size={19} /><input type="search" placeholder="Search" /></label>
                  <button className={`booking-timezone-option${selectedTimeZone === businessTimeZone ? ' is-selected' : ''}`} type="button" onClick={() => { setSelectedTimeZone(businessTimeZone); setShowTimeZonePrompt(false); }}><div><strong>Eastern Time</strong><span>America/New_York · Lumina business time zone</span></div><i>{selectedTimeZone === businessTimeZone && <Check size={15} />}</i></button>
                  <button className={`booking-timezone-option${selectedTimeZone === userTimeZone ? ' is-selected' : ''}`} type="button" onClick={() => { setSelectedTimeZone(userTimeZone); setShowTimeZonePrompt(false); }}><div><strong>Your local time</strong><span>{userTimeZone}</span></div><i>{selectedTimeZone === userTimeZone && <Check size={15} />}</i></button>
                </>
              ) : (
                <>
                  <p className="eyebrow">Time Zone Check</p>
                  <h2 id="timezone-title">Looks like you’re in a different time zone than Lumina.</h2>
                  <p>We recommend viewing appointment times in the time zone you’ll use during your appointment.</p>
                  <div className="booking-timezone-modal__actions">
                    <button className="button button--forest" type="button" onClick={() => { setSelectedTimeZone(userTimeZone); setShowTimeZonePrompt(false); }}>My time zone ({userTimeZone})</button>
                    <button type="button" onClick={() => { setSelectedTimeZone(businessTimeZone); setShowTimeZonePrompt(false); }}>Lumina time zone (ET)</button>
                    <button type="button" onClick={() => setShowTimeZoneList(true)}>Select a time zone</button>
                  </div>
                </>
              )}
            </section>
          </div>
        )}

        {showCancellationPolicy && (
          <div className="booking-policy-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowCancellationPolicy(false); }}>
            <section role="dialog" aria-modal="true" aria-labelledby="policy-title">
              <h2 id="policy-title">Cancellation policy</h2>
              <p>We ask that you please reschedule or cancel before the beginning of your appointment.</p>
              <button className="button button--forest" type="button" onClick={() => setShowCancellationPolicy(false)}>Done</button>
            </section>
          </div>
        )}

        {pendingRemoval && (
          <div className="booking-restart-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPendingRemoval(null); }}>
            <section role="dialog" aria-modal="true" aria-labelledby="restart-title">
              <span><ArrowLeft size={24} /></span>
              <p className="eyebrow">Change Your Services</p>
              <h2 id="restart-title">Remove this service and start again?</h2>
              <p>Changing your services may affect staff availability and appointment times. You’ll return to the service selection step after removing <strong>{pendingRemoval.name}</strong>.</p>
              <div>
                <button type="button" onClick={() => setPendingRemoval(null)}>Keep Service</button>
                <button className="button button--forest" type="button" onClick={confirmRemovalAndRestart}>Remove &amp; Start Again</button>
              </div>
            </section>
          </div>
        )}

        {validationMessage && (
          <div className="booking-validation-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setValidationMessage(null); }}>
            <section role="alertdialog" aria-modal="true" aria-labelledby="validation-title">
              <button className="booking-validation-modal__close" type="button" onClick={() => setValidationMessage(null)} aria-label="Close requirement message"><X /></button>
              <span><Sparkles size={25} /></span>
              <p className="eyebrow">Before You Continue</p>
              <h2 id="validation-title">{validationMessage.title}</h2>
              <p>{validationMessage.message}</p>
              <button className="button button--forest" type="button" onClick={() => setValidationMessage(null)}>Choose Now</button>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
