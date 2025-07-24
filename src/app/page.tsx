//* Components
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import Services from '@/components/Services';
import GetStarted from '@/components/GetStarted';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Results />
            <Services />
            <GetStarted />
            <Pricing />
            <FAQ />
        </>
    );
}
