import { About, Contact, Cta, Faqs, Footer, Hero, Navbar, Reviews, Services, Stats, Working } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Working />
      <Reviews />
      <Faqs />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
}

