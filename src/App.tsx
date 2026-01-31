import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServiceDigitization from './pages/ServiceDigitization';
import ServiceRecovery from './pages/ServiceRecovery';
import ServiceStorage from './pages/ServiceStorage';
import ServiceManagement from './pages/ServiceManagement';
import ContactPage from './pages/ContactPage';
import RealCases from './pages/RealCases';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import GDPR from './pages/GDPR';
import Demonstracao from './pages/Demonstracao';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/digitization" element={<ServiceDigitization />} />
            <Route path="/recovery" element={<ServiceRecovery />} />
            <Route path="/storage" element={<ServiceStorage />} />
            <Route path="/management" element={<ServiceManagement />} />
            <Route path="/contactos" element={<ContactPage />} />
            <Route path="/casos-reais" element={<RealCases />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsConditions />} />
            <Route path="/rgpd" element={<GDPR />} />
            <Route path="/demonstracao" element={<Demonstracao />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
