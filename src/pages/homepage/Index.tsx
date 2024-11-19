import React, { useState, useEffect } from 'react';
import Hero from "../../components/sections/Hero";
import AboutUs from "../../components/sections/AboutUs";
import Adopt from "../../components/sections/Adopt";
import Store from "../../components/sections/Store";

import '../../styles/global.css';
import { FaArrowUp } from "react-icons/fa";

function Index() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="store">
        <Store />
      </div>
      <div id="adopt">
        <Adopt />
      </div>

      {/* Botão de rolar para o topo */}
      <button
        className={`btn-scroll-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default Index;
