import Navbar from "./navbar";
import Hero from "./components/hero";
import Footer from "./footer";
import SocialProof from "./components/social-proof";
import Features from "./components/features";
import FirstCTA from "./components/first-cta";
import WhyUs from "./components/why-us";
import SecondCTA from "./components/second-cta";
import SmoothScrolling from "./components/smooth-scrolling";
// import { Testimonials } from "./components/testimonials";

function App() {
  return (
    <SmoothScrolling>
      <main>
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <FirstCTA />
        <WhyUs />
        {/* <Testimonials /> */}
        <SecondCTA />
        <Footer />
      </main>
    </SmoothScrolling>
  );
}

export default App;
