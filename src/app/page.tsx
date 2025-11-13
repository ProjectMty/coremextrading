import HeaderHero from '@/components/HeaderHero';
import Services from '@/components/Services';
import Resources from '@/components/Resources';
import Markets from '@/components/Markets';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import GetStarted from '@/components/GetStarted';
import Contact from '@/components/Contact';
import Body from '@/components/Body';
import Partners from '@/components/Partners';
import Formulario from '@/components/Formulario';
import Navbar from '@/components/Navbar/Navbar';


export default function HomePage() {

  
  return (
    <main>
      <Navbar/>
      <HeaderHero />
      <Body />
      <Services />
      <Resources />
      <Markets />
      <Partners />
      <Pricing />
      <FAQ />
      <GetStarted />
    <Formulario />
      <Contact />
    </main>
  );
}
