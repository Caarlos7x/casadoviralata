
import Hero from "../../components/hero/Hero";
import TopToolBar from "../../components/topToolBar/TopToolBar";
import '../../styles/global.css';
import AboutUs from "../aboutUs/AboutUs";
import Shop from "../market/Store";


function HomePage() {
  
  return (
    <>
    <TopToolBar />
    <Hero />
    <AboutUs />
    <Shop />
    </>



  );
}

export default HomePage;