//* Components
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import Services from '@/components/Services';
import GetStarted from '@/components/GetStarted';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Results />
            <Services />
            <GetStarted />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
}
