import { Container, Nav, Navbar } from "react-bootstrap";
import '../App.css'
import '../index.css'
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import logo from '../assets/logo.png'

function AppNavbar() {
  return (
    <>
 <div className="d-flex contactsimple px-3 py-2" style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    zIndex: 20
}}>
    <div className="d-flex gap-3">
        <p style={{color: '#ffffff99', margin: 0}}>
            Phone no: <span className="text-white ml-1">+00 1234 567</span> or email us: 
            <span className="text-white ml-1">emailsample@email.com</span>
        </p>
    </div>
    <div className="d-flex align-items-center gap-3">
        <p style={{color: '#ffffff99', margin: 0}}>
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

<Navbar
  className="bg-dark mx-auto navbar1 p-2 py-2 px-2 fixed-top mt-1"
  style={{
    width: "82%",
    borderRadius: "5px",
    height: "80px",
    position: "absolute",
    top: "45px",     // moved below contact bar
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 15,
     boxShadow: "0 4px 15px rgba(0,0,0,0.3)" 
  }}
  data-bs-theme="dark"
>

  <Container>
    <Navbar.Brand href="#home"><img src={logo} alt="" width={"80px"} /></Navbar.Brand>
    <Nav className="nav-links">
      <Nav.Link href="#home" className="text-white mx-3 nav-links" active>Home</Nav.Link>
      <Nav.Link href="#features" className="text-white mx-3 nav-links">About</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3 nav-links">Chef</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3 nav-links">Menu</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3 nav-links">Reservation</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3 nav-links">Contact</Nav.Link>
    </Nav>
  </Container>
</Navbar>

    </>
  );
}

export default AppNavbar;
