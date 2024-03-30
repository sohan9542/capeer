import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Care from "@/components/Care";
import Transforming from "@/components/Trasforming";
import Faq from "@/components/Faq";
import Start from "@/components/Start";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full px-5 lg:px-0">
        <Hero />
        <Company />
        <Care />
       
        {/* 
        
       
       
        */}
      </div>
      <Transforming />
      <div className="w-full px-5 lg:px-0">
      <Faq />
    
        </div>
        <Start />
        <Footer />
    
    </>
  );
}
