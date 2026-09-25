import Home from './pages/Home';
import Booking from './pages/Booking';
import GiftCard from './pages/GiftCard';
import GroupEvents from './pages/GroupEvents';
import Services from './pages/Services';
import SpaFacilities from './pages/SpaFacilities';
import SiteExperience from './components/common/SiteExperience';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  let page = <Home />;
  if (path === '/book-now') page = <Booking />;
  else if (path === '/gift-card') page = <GiftCard />;
  else if (path === '/spa-facilities') page = <SpaFacilities />;
  else if (path === '/group-events') page = <GroupEvents />;
  else if (path === '/services' || path.startsWith('/services/')) page = <Services />;
  return <><SiteExperience path={path} />{page}</>;
}
