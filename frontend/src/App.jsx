import Home from './pages/Home';
import Booking from './pages/Booking';
import Facial from './pages/services/Facial';
import FaceWaxing from './pages/services/FaceWaxing';
import GiftCard from './pages/GiftCard';
import GroupEvents from './pages/GroupEvents';
import HairBlowDry from './pages/services/HairBlowDry';
import HeadTreatment from './pages/services/HeadTreatment';
import MensWaxing from './pages/services/MensWaxing';
import SpaFacilities from './pages/SpaFacilities';
import Waxing from './pages/services/Waxing';
import SiteExperience from './components/common/SiteExperience';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  let page = <Home />;
  if (path === '/book-now') page = <Booking />;
  else if (path === '/gift-card') page = <GiftCard />;
  else if (path === '/spa-facilities') page = <SpaFacilities />;
  else if (path === '/group-events') page = <GroupEvents />;
  else if (path === '/services/facial') page = <Facial />;
  else if (path === '/services/head-treatment') page = <HeadTreatment />;
  else if (path === '/services/hair-blow-dry') page = <HairBlowDry />;
  else if (path === '/services/waxing') page = <Waxing />;
  else if (path === '/services/waxing/face') page = <FaceWaxing />;
  else if (path === '/services/waxing/man') page = <MensWaxing />;
  return <><SiteExperience path={path} />{page}</>;
}
