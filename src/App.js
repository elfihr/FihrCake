
import './App.css';
import Navbar from './component/Navbar';
import Footer from './page/Footer';
import Hero from './page/Hero';
import Menu from './page/Menu'
import Testimonials from './page/Testimonials';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
