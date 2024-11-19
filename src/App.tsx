
import './styles/global.css';
import Footer from './components/layout/footer';
import TopToolBar from './components/topToolBar/TopToolBar';
import Index from './pages/homepage/Index';

function App() {

  return (
    <>
      <TopToolBar />
      <Index />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
