import { Link, useLocation } from "react-router-dom";
import Home from './Home'
import About from './About';
import Chef from './Chef';
import Menu from './Menu';
import Reservation from './Reservation';
import Contact from './Contact';
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
  const location = useLocation();

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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Contact Bar (hidden on mobile) */}
      <div
        className="d-none d-md-flex contactsimple px-3 py-2"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1200px',
          zIndex: 20,
          marginLeft: '84px'
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
        expand="lg"
        className={`navbar1 px-3`}
        style={{
          width: scrolled ? "100%" : "1120px",
          borderRadius: scrolled ? "0" : "0px",
          height: "80px",
          position: scrolled ? "fixed" : "absolute",
          top: scrolled ? "0px" : "45px",
          left: scrolled ? "0%" : "50%",
          transform: scrolled ? "none" : "translateX(-50%)",
          zIndex: 15,
          backgroundColor: scrolled ? "white" : "#12070747",
        }}
        data-bs-theme={scrolled ? "light" : "dark"}
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <Link to="/Home">
            <img src={logo} alt="" width={"70px"} />
            </Link>
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu-toggle-btn"
          >
            MENU
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links text-center text-lg-start" id="navbartextcenter">
              {[
                { name: "Home", path: "/Home" },
                { name: "About", path: "/About" },
                { name: "Chef", path: "/Chef" },
                { name: "Menu", path: "/Menu" },
                { name: "Reservation", path: "/Reservation" },
                { name: "Contact", path: "/Contact" }
              ].map((link, index) => (
                <Nav.Link
                  as={Link}
                  to={link.path}
                  key={index}
                  className={`mx-3 nav-links ${
                    isActive(link.path)
                      ? 'text-danger'
                      : scrolled ? 'text-dark' : 'text-white'
                  }`}
                  style={
                    isActive(link.path)
                      ? { fontWeight: 'bold', textDecoration: 'underline' }
                      : {}
                  }
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

      {/* Mobile Styles */}
      <style>
        {`
        a.mx-3.nav-links.text-danger.nav-link {
   color: #E52B33 !important;
}

a.mx-3.nav-links.text-danger.nav-link {
    text-decoration: none !important;
}
          @media (max-width: 767px) {
            .navbar1 {
              width: 100% !important;
              left: 0 !important;
              transform: none !important;
              top: 0 !important;
              box-shadow: none !important;
              background-color: ${scrolled ? "white" : "black"} !important;
            }
            .navbar-container {
              max-width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            div#basic-navbar-nav {
              background-color: ${scrolled ? "white" : "black"} !important;
            }
            a.mx-3.nav-links.text-dark.nav-link {
              color: ${scrolled ? "black" : "gray"} !important;
            }
            .nav-links a {
              color: white !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default AppNavbar;