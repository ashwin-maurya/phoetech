import Hero from "./components/Hero";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ServicesPage from "./components/Pages/ServicesPage";
const App = () => (
  <>
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </>
);

export default App;
