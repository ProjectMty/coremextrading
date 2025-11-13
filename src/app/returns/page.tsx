import Navbar from "@/components/Navbar/Navbar";
import Costs_Returns from "@/components/Returns/Costs/Costs";
import Hero_Returns from "@/components/Returns/Hero/Hero";
import Operations_Returns from "@/components/Returns/Operations/Operations";
import Products_Returns from "@/components/Returns/Products/Products";
import Formulario from '@/components/Formulario';
import GetStarted from '@/components/GetStarted';
import Contact from '@/components/Contact';
import Processing_Returns from "@/components/Returns/Processing/Processing";

export default function Returns() {
    return (
        <main>
            <Navbar />
            <Hero_Returns />
            <Products_Returns />
            <Processing_Returns/>
            <Costs_Returns />
            <Operations_Returns />
            <GetStarted />
            <Formulario />
            <Contact />
        </main>
    )
}