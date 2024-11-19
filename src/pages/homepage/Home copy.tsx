
import Footer from "../../components/layout/footer";
import Hero from "../../components/sections/Hero";
import TopToolBar from "../../components/topToolBar/TopToolBar";
import '../../styles/global.css';
import AboutUs from "../../components/sections/AboutUs";
import Adopt from "../../components/sections/Adopt";
import Shop from "../../components/sections/Store";


function HomePage() {
  
  return (
    <>
    <TopToolBar />
    <Hero />
    <AboutUs />
    <Shop />
    <Adopt />
    <Footer />
    </>



  );
}

export default HomePage;