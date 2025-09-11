import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutUs from '@/components/sections/AboutUs';
import Branches from '@/components/sections/Branches';
import WhyUs from '@/components/sections/WhyUs';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Branches />
      <WhyUs />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}