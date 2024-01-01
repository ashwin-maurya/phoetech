import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ServicesPage from "./components/Pages/ServicesPage";
import ScrollToTop from "./components/common/ScrollToTop";
const App = () => (
  <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="container relative">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </>
);

export default App;
