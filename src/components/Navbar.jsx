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
    <div className="d-flex contactsimple ">
        <div className="gap-1">
        <p style={{color: '#ffffff99'}}>Phone no:
            <span className="text-white ml-1">+00 1234 567</span>
              or email us:
              <span className="text-white">emailsample@email.com</span>
               </p>
               </div>
            <div className="d-flex 2contactsimple">
        <p style={{color: '#ffffff99'}}>Mon - Fri / 9:00-21:00, Sat - Sun / 10:00-20:00</p>
<div className="d-flex socailmediaicon">
  <LuFacebook className="social-icon mx-2 text-white" />
  <CiTwitter className="social-icon mx-2 text-white" />
  <FaInstagram className="social-icon mx-2 text-white" />
  <FaSnapchat className="social-icon mx-2 text-white" />

</div>


        </div>

    </div>
<Navbar className="bg-dark mx-auto navbar1 p-2 py-2 px-2" style={{ width: '82%', borderRadius: '5px', height: '80px'  }} data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home"><img src={logo} alt="" width={"80px"} /></Navbar.Brand>
    <Nav className="">
      <Nav.Link href="#home" className="text-white mx-3">Home</Nav.Link>
      <Nav.Link href="#features" className="text-white mx-3">About</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3">Chef</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3">Menu</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3">Reservation</Nav.Link>
      <Nav.Link href="#pricing" className="text-white mx-3">Contact</Nav.Link>
    </Nav>
  </Container>
</Navbar>

    </>
  );
}

export default AppNavbar;
