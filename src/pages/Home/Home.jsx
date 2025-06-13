import React from "react";
import HeroSection from "./sections/HeroSection.jsx";
import Header from "../../components/Header.jsx";
import ExpertiseSection from "./sections/ExpertiseSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Footer from "../../components/Footer.jsx";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <WorkSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Home;