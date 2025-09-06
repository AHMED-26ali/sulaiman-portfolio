import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Branches from '@/components/sections/Branches';
import WhyUs from '@/components/sections/WhyUs';
import Vision from '@/components/sections/Vision';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Branches />
        <WhyUs />
        <Vision />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}