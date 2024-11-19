import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><MainHero /><About /><Services /></>} />
          <Route path="/business-registration" element={<BusinessRegister />} />
          <Route path="/permits-licenses" element={<PaL />} />
          <Route path="/permits-licenses/indigency" element={<CoI />} />
          <Route path="/permits-licenses/residency" element={<CoR />} />
          <Route path="/permits-licenses/clearance" element={<BarangayClearance />} />
          <Route path="/contact" element={<Contact />} /> {/* New contact page route */}
        </Routes>
        <CallToAction />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
