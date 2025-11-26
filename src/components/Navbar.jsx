import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import '../App.css';
import '../index.css';
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import logo from '../assets/logo.png';

function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className="d-flex contactsimple px-3 py-2"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 20
        }}
      >
        <div className="d-flex gap-3">
          <p style={{ color: '#ffffff99', margin: 0 }}>
            Phone no: <span className="text-white ml-1"><a href="" className="text-decoration-none text-white">+923152453522</a></span> or email us: 
            <span className="text-white ml-1"><a href="" className="text-decoration-none text-white">flavora44@email.com</a></span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <p style={{ color: '#ffffff99', margin: 0 }}>
            Mon - Fri / 9:00-21:00, Sat - Sun / 10:00-20:00
          </p>
          <div className="d-flex gap-3">
            <LuFacebook className="social-icon text-white" />
            <CiTwitter className="social-icon text-white" />
            <FaInstagram className="social-icon text-white" />
            <FaSnapchat className="social-icon text-white" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar
        className={`mx-auto navbar1 p-2 py-2 px-2`}
        style={{
          width: scrolled ? "100%" : "82%",
          borderRadius: scrolled ? "0" : "5px",
          height: "80px",
          position: scrolled ? "fixed" : "absolute",
          top: scrolled ? "0px" : "45px",
          left: scrolled ? "0" : "50%",
          transform: scrolled ? "none" : "translateX(-50%)",
          zIndex: 15,
          backgroundColor: scrolled ? "white" : "transparent",
          boxShadow: scrolled ? "4px 4px 15px 4px rgba(0,0,0,0.3)" : "none",
          transition: "all 0.3s ease"
        }}
        data-bs-theme={scrolled ? "light" : "dark"}
      >
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" width={"80px"} /></Navbar.Brand>
          <Nav className="nav-links">
            {["Home", "About", "Chef", "Menu", "Reservation", "Contact"].map((link, index) => (
              <Nav.Link
                href={`#${link.toLowerCase()}`}
                key={index}
                className={`mx-3 nav-links ${scrolled ? 'text-dark' : 'text-white'}`}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
  