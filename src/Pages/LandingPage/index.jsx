import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Hero from "../../Components/LandingPage/Hero";
import Counters from "../../Components/LandingPage/Counters";
import WhyChooseUs from "../../Components/LandingPage/WhyChooseUs";
import CoursesCategory from "../../Components/LandingPage/CoursesCategory";
import AboutUs from "../../Components/LandingPage/AboutUs";
import GetInTouch from "../../Components/LandingPage/GetInTouch";
import FAQ from "../../Components/LandingPage/FAQ";
import FaqComponent from "../../Components/LandingPage/FaqComponet";
import WaitingList from "../../Components/LandingPage/WaitingList";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Counters />
      <AboutUs />
      <GetInTouch />
      <WhyChooseUs />
      <CoursesCategory />
      <WaitingList />
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default LandingPage;
