import Hero from "./components/Hero";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
const App = () => (
  <>
    <div className="container">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />

      <Footer />
    </div>
  </>
);

export default App;
