    import { LuFacebook } from "react-icons/lu";
    import { FaInstagram } from "react-icons/fa6";
    import { FiTwitter } from "react-icons/fi";
    import { Link, useLocation } from "react-router-dom";

    import React from "react";
    import logo from "../assets/logo.png";
    import emailicon from "../assets/emailicon.png";
    import phoneicon from "../assets/phoneicon.png";

    const Footer = () => {
      const location = useLocation();

      const isActive = (path) => {
        return location.pathname === path;
      };

      const navLinks = [
        { name: "Home", path: "/Home" },
        { name: "About", path: "/About" },
        { name: "Chef", path: "/Chef" },
        { name: "Menu", path: "/Menu" },
        { name: "Reservation", path: "/Reservation" },
        { name: "Contact", path: "/Contact" }
      ];

      return (
        <>
          <footer>
            <div className="row justify-content-center row3">
              {/* Logo */}
              <div className="col-1 col12 footer-logo">
                <img
                  src={logo}
                  alt=""
                  className="footerlogo mt-3"
                  style={{ width: "200px" }}
                />
                <p className="text-justify mt-2">
                  Crafted dining solutions that keep your cravings running smoothly.
                </p>
              </div>

              {/* Navigation Links */}
              <div className="col-1 col12 footer-nav">
                <div
                  className="d-flex"
                  style={{ gap: "52px", marginTop: "100px", marginLeft: "-21px" }}
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="bikulnewone"
                      style={{
                        color: isActive(link.path) ? "#E52B33" : "black",
                        fontWeight: isActive(link.path) ? "bold" : "normal",
                        transition: "all 0.3s ease"
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Contact Info */}
                <div
                  className="d-flex gap-6 justify-content-center"
                  style={{ marginTop: "20px", marginLeft: "91px" }}
                >
                  <div className="d-flex gap-2">
                    <img src={emailicon} alt="" />
                    <a href="mailto:falvoura44@gmail.com" style={{ textDecoration: "none", color: "black" }}>
                      falvoura44@gmail.com
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <img src={phoneicon} alt="" />
                    <a href="tel:+923152453522" style={{ textDecoration: "none", color: "black" }}>
                      +923152453522
                    </a>
                  </div>
                </div>
              </div>

              <hr className="footerhr" />

              {/* Social Icons & Copyright */}
              <div className="d-flex justify-content-between footer-bottom">
                <div className="d-flex gap-3 socailmediaicon" style={{ marginLeft: "89px" }}>
                  <div className="text-center social-icon socail-icon1234">
                    <a href="#" className="1234" style={{ color: "white", marginTop: "-4px" }}>
                      <FiTwitter className="mt-1" />
                    </a>
                  </div>
                  <div className="text-center social-icon socail-icon1234">
                    <a href="#" className="1234" style={{ color: "white", marginTop: "-4px" }}>
                      <LuFacebook className="mt-1" />
                    </a>
                  </div>
                  <div className="text-center social-icon socail-icon1234">
                    <a href="#" className="1234" style={{ color: "white", marginTop: "-4px" }}>
                      <FaInstagram className="mt-1" />
                    </a>
                  </div>
                </div>
                <div className="aDVOUH">
                  <p className="yes me-5">Copyright © 2025 Flavoura</p>
                </div>
              </div>
            </div>

            {/* Mobile left-aligned styling */}
            <style jsx>{`
              @media (max-width: 768px) {
                .row3 {
                  flex-direction: column !important;
                  align-items: flex-start !important;
                }
                .col12 {
                  margin-left: 0 !important;
                  text-align: left !important;
                  width: 100% !important;
                }
                .footer-logo {
                  display: flex !important;
                  flex-direction: column !important;
                  align-items: flex-start !important;
                  margin-bottom: 20px !important;
                }
                img.footerlogo.mt-3 {
                  width: 131px !important;
                  margin-left: -16px !important;
                }
                .col-1.col12.footer-nav {
                  margin-top: -77px !important;
                }
                .footer-nav > .d-flex:first-of-type {
                  flex-direction: column !important;
                  gap: 10px !important;
                  margin-left: 0 !important;
                  margin-top: 15px !important;
                  align-items: flex-start !important;
                }
                .footer-nav > .d-flex.gap-6 {
                  flex-direction: column !important;
                  align-items: flex-start !important;
                  margin-left: 0 !important;
                  margin-top: 10px !important;
                }
                .footer-bottom {
                  flex-direction: column !important;
                  align-items: flex-start !important;
                  gap: 15px !important;
                }
                .socailmediaicon {
                  margin-left: 0 !important;
                  justify-content: flex-start !important;
                }
                .social-icon {
                  width: 35px !important;
                  height: 35px !important;
                  display: flex !important;
                  justify-content: center !important;
                  align-items: center !important;
                  background-color: #e52b34 !important;
                  border-radius: 50% !important;
                  margin: 5px 0 !important;
                }
                .d-flex.gap-3.socailmediaicon {
                  margin-top: 69px !important;
                }
                .footerhr {
                  display: none;
                }
                .d-flex.justify-content-center {
                  gap: 16px;
                }
                a.1234 {
                  margin-top: -4px;
                }
                footer {
                  overflow-x: hidden !important;
                }
              }
            `}</style>
          </footer>
        </>
      );
    };

    export default Footer;