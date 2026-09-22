import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import PrintLab from '@/components/PrintLab';
import Process from '@/components/Process';
import Monogram from '@/components/Monogram';
import PhotoLab from '@/components/PhotoLab';
import Facility from '@/components/Facility';
import Stats from '@/components/Stats';
import ProjectForm from '@/components/ProjectForm';
import VisitUs from '@/components/VisitUs';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="bg-[var(--ivory)]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <PrintLab />
        <Process />
        <Monogram />
        <PhotoLab />
        <Facility />
        <Stats />
        <Marquee dark />
        <ProjectForm />
        <VisitUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
