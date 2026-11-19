import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Services from "../components/Services";
import Marquee from "../components/Marquee";
import Team from "../components/Team";
import Approach from "../components/Approach";
import Testimonials from "../components/Testimonials";
import Awards from "../components/Awards";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Marquee />
      <Team />
      <Approach />
      <Testimonials />
      <Awards />
      <Blog />
      <Footer />
    </>
  );
}
