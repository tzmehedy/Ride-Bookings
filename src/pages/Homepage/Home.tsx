import About from "@/components/modules/HomePage/About";
import CallToAction from "@/components/modules/HomePage/CallToAction";
import DriverInfo from "@/components/modules/HomePage/DriverInfo";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import HowItWorks from "@/components/modules/HomePage/HowItWorks";
import Safety from "@/components/modules/HomePage/Safety";
import Services from "@/components/modules/HomePage/Services";
import Testimonial from "@/components/modules/HomePage/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <HowItWorks/>
      <Services/>
      <Safety/>
      <Testimonial/>
      <DriverInfo/>
      <CallToAction/>
    </>
  );
}
