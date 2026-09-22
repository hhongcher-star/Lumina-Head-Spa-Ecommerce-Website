import Home from './pages/Home';
import Facial from './pages/services/Facial';
import FaceWaxing from './pages/services/FaceWaxing';
import GroupEvents from './pages/GroupEvents';
import HairBlowDry from './pages/services/HairBlowDry';
import HeadTreatment from './pages/services/HeadTreatment';
import MensWaxing from './pages/services/MensWaxing';
import Waxing from './pages/services/Waxing';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/group-events') return <GroupEvents />;
  if (path === '/services/facial') return <Facial />;
  if (path === '/services/head-treatment') return <HeadTreatment />;
  if (path === '/services/hair-blow-dry') return <HairBlowDry />;
  if (path === '/services/waxing') return <Waxing />;
  if (path === '/services/waxing/face') return <FaceWaxing />;
  if (path === '/services/waxing/man') return <MensWaxing />;
  return <Home />;
}
