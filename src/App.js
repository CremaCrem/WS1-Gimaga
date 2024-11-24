import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainHero from './components/MainHero';
import About from './components/About';
import Services from './components/Services';
import BusinessRegister from './components/BusinessRegister';
import PaL from './components/PaL';
import CoI from './components/CoI';
import CoR from './components/CoR';
import BarangayClearance from './components/BarangayClearance';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import AdminBR from './components/AdminBR';
import AdminPaL from './components/AdminPaL';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/admin' || location.pathname === '/admin-business-registration' || location.pathname === '/admin-permits-licenses';

  return (
    <div>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<><MainHero /><About /><Services /></>} />
        <Route path="/business-registration" element={<BusinessRegister />} />
        <Route path="/permits-licenses" element={<PaL />} />
        <Route path="/permits-licenses/indigency" element={<CoI />} />
        <Route path="/permits-licenses/residency" element={<CoR />} />
        <Route path="/permits-licenses/clearance" element={<BarangayClearance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path='/admin-business-registration' element={<AdminBR/>}/>
        <Route path='/admin-permits-licenses' element={<AdminPaL/>}/>
      </Routes>
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <CallToAction />}
    </div>
  );
}

export default App;
