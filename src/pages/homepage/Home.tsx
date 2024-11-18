
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/Hero";
import TopToolBar from "../../components/topToolBar/TopToolBar";
import '../../styles/global.css';
import AboutUs from "../aboutUs/AboutUs";
import Adopt from "../adopt/Adopt";
import Shop from "../market/Store";


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