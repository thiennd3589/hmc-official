import React, { useState } from "react";
import CarouselComp from "../../components/LandingComponent/Carousel";
import Missions from "../../components/LandingComponent/Missions";
import Projects from "../../components/LandingComponent/Projects";
import Contact from "../../components/LandingComponent/Contact";
import Header from "../../components/LandingComponent/Header";
import Admins from "../../components/LandingComponent/Admins";
import Footer from "../../components/LandingComponent/Footer";
import SignUpForm from "../../components/LandingComponent/SignUpForm";
import "./styles.scss";

const Landing = ({ style }) => {
  const [visibleForm, setVisibleForm] = useState(false);

  const toggleForm = () => {
    setVisibleForm(!visibleForm);
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="Landing" style={style}>
      <Header />
      <CarouselComp />
      <Missions />
      <Projects />
      <Admins />
      <Contact toggleForm={toggleForm} />
      {visibleForm && <SignUpForm toggleForm={toggleForm} style={style} />}
      <Footer />
      <button className="up-button" onClick={topFunction}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};

export default Landing;
