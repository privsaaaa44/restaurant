import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Chef from './components/Chef';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "@fontsource/dancing-script/700.css"; 
import "@fontsource/dancing-script/600.css";
import "@fontsource/dancing-script/400.css";
import "@fontsource/dancing-script/500.css";
function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Chef" element={<Chef />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
