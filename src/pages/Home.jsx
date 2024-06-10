import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Recommended_jobs from "../components/Recommended_jobs.jsx";
import Top_company from "../components/Top_company.jsx";
import Featured_jobs from "../components/Featured_jobs.jsx";
import WhyCustomer from "../components/WhyCustomer.jsx"
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recommended_jobs />
      <Top_company/>
      <Featured_jobs/>
      <WhyCustomer/>
      <Footer/>
    </div>
  );
}

export default Home;
