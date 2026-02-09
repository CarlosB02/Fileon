import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTitle from './components/PageTitle';

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
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTitle />
      <Navbar />
      <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/digitalizacao" element={<ServiceDigitization />} />
            <Route path="/recuperacao" element={<ServiceRecovery />} />
            <Route path="/armazenamento-web" element={<ServiceStorage />} />
            <Route path="/gestao-documental" element={<ServiceManagement />} />
            <Route path="/contactos" element={<ContactPage />} />
            <Route path="/casos-reais" element={<RealCases />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsConditions />} />
            <Route path="/rgpd" element={<GDPR />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
