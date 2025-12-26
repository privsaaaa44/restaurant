import sb2 from '../assets/sb2.jpg';
import l1 from '../assets/l1.png';
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import ab from '../assets/ab.jpg';
import { Link } from 'react-router-dom';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import AOS from "aos";
import chef4 from "../assets/chef4.png"
import chef2 from "../assets/chef2.png"
import chef3 from "../assets/chef3.png"
import chef from "../assets/chef.png"
import chef1 from "../assets/chef1.png"
import "aos/dist/aos.css";
import breakfast1 from "../assets/breakfast1.jpg";
import breakfast2 from "../assets/breakfast2.jpg";
import breakfast3 from "../assets/breakfast3.jpg";
import lunch1 from "../assets/lunch1.jpg";
import lunch2 from "../assets/lunch2.jpg";
import lunch3 from "../assets/lunch3.jpg";
import dinner1 from "../assets/dinner1.jpg";
import dinner2 from "../assets/dinner2.jpg";
import dinner3 from "../assets/dinner3.jpg";
import dessert1 from "../assets/dessert1.jpg";
import dessert2 from "../assets/dessert2.jpg";
import dessert3 from "../assets/dessert3.jpg";
import wine1 from "../assets/wine1.jpg";
import wine2 from "../assets/wine2.jpg";
import wine3 from "../assets/wine3.jpg";
import tea1 from "../assets/tea1.jpg";
import tea2 from "../assets/tea2.jpg";
import tea3 from "../assets/tea3.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { TbTriangleInverted } from "react-icons/tb";


const Reservation = () => {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [guests, setGuests] = useState("");
    const [errors, setErrors] = useState({ date: "", time: "", guests: "" });
    const [showPopup, setShowPopup] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    useEffect(() => {
      AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
      });
    }, []);

    const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const email = document.getElementById("emailInput").value;
    if (!email.endsWith(".com")) {
      alert("Email must end with .com");
      return;
    }

    let valid = true;
    const newErrors = { date: "", time: "", guests: "" };

    if (!startDate) {
      newErrors.date = "Please select a check-in date!";
      valid = false;
    }

    if (!startTime) {
      newErrors.time = "Please select a time!";
      valid = false;
    }

    if (!guests) {
      newErrors.guests = "Please select the number of guests!";
      valid = false;
    }

    const now = new Date();
    if (
      startDate &&
      startDate.toDateString() === now.toDateString() &&
      startTime < now
    ) {
      newErrors.time = "You cannot select a past time!";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    const booking = {
      name: document.getElementById("nameInput").value,
      email,
      phone: document.getElementById("phoneInput").value,
      date: startDate.toLocaleDateString(),
      time: startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      guests,
    };

    setBookingDetails(booking);
    setShowPopup(true);

    // Reset inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("phoneInput").value = "";
    setStartDate(null);
    setStartTime(null);
    setGuests("");
    setErrors({ date: "", time: "", guests: "" });
  };

  return (
    <>
        <div className='about1div'>
            {/* ABOUT BANNER SECTION */}
            <section
              className='firstsection'
              style={{
                position: "relative",
                backgroundImage: `url(${ab})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgb(0 0 0 / 30%)",
                }}
              ></div>
    
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  color: "white",
                  textAlign: "center",
                  width: "100%",
                }}
              className='abouttextsection'  
              >
                <div>
                  <h1 className='aboutpageheading text-center'>
Book A Table Now</h1>
                  <div className='collapseone'>
                    <h3
                      className='fs-6 text-white fs-6 backtohome'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                       
                      }}
                    >
                      <Link
                        to="/Home"
                        className="text-decoration-none text-white"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          textDecoration: 'none',
                        }}
                      >
                        HOME <span><FaChevronRight size={20} /></span>
                      </Link>
                      Reservation
                      <span className='fs-5 fw-bold' style={{ display: 'flex', alignItems: 'center' }}>
                        <FaChevronRight size={20} />
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>
   {/* BOOKING FORM */}
          <div className="p-3 menusectionone reservationsectionone booking-section" style={{ padding: "60px 20px", background: "#E52B34" }}>
            <div style={{ maxWidth: "890px", width: "100%", margin: "0 auto" }}>
              <form 
                className="text-center menusectionform"
                style={{ marginRight: "0", fontSize: "14px" }}
                onSubmit={handleSubmit}
              >
                <h1 className="text-white pt-4 text-center menusectionh1 " style={{ fontSize: "24px", fontWeight: "700", marginBottom: "40px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Book Your Table
                </h1>
    
                          <div className='inputnamephoneemail' style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginBottom: "15px" }}>
                  {/* Name Input */}
                  <input
                    type="text"
                    id="nameInput"
                    className="text-white p-2 py-2 px-2"
                    pattern="[A-Za-z\s]+"
                    title="Only letters and spaces are allowed"
                    required
                    placeholder="Name"
                    style={{ width: "280px" }}
                  />
    
                  {/* Email Input */}
                  <input
                    type="email"
                    id="emailInput"
                    className="text-white p-2 py-2 px-2"
                    title="Please enter a valid email ending with .com"
                    required
                    placeholder="Email"
                    style={{ width: "280px" }}
                  />
    
                  {/* Phone Input */}
                  <input
                    type="tel"
                    id="phoneInput"
                    className="text-white p-2 py-2 px-2"
                    pattern="[0-9]{11}"
                    title="Please enter an 11-digit phone number"
                    required
                    placeholder="Phone"
                    style={{ width: "280px" }}
                  />
                </div>
    
    
                        <div className='inputtimedateguestpicker' style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginBottom: "15px" }}>
                  {/* Check-in Date Picker */}
                  <div className="position-relative" style={{ width: "280px"}}>
                    <div className="d-flex align-items-center position-relative" style={{ width: "100%" }}>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Check in"
                        className="text-white p-2 pe-5 px-2 datepicker-input"
                        minDate={new Date()}
                        style={{ flex: 1 }}
                      />
                      <FaRegCalendarAlt className="newicon"
                        style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none" }}
                      />
                    </div>
                    {errors.date && <p className="error-text">{errors.date}</p>}
                  </div>
    
                  {/* Time Picker */}
                  <div className="position-relative" style={{ width: "280px" }}>
                    <div className="d-flex align-items-center position-relative" style={{ width: "100%" }}>
                      <DatePicker
                        selected={startTime}
                        onChange={(time) => setStartTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="Select time"
                        className="text-white p-2 pe-5 px-2 datepicker-input"
                        minTime={
                          startDate && startDate.toDateString() === new Date().toDateString()
                            ? new Date()
                            : new Date().setHours(9, 0)
                        }
                        maxTime={new Date().setHours(22, 0)}
                        style={{ flex: 1 }}
                      />
                      <FaRegClock className="newicon"
                        style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none", fontSize: "16px" }}
                      />
                    </div>
                    {errors.time && <p className="error-text">{errors.time}</p>}
                  </div>
    
                  {/* Guests Select */}
                  <div className="position-relative" style={{ width: "280px" }}>
                    <div className="d-flex align-items-center position-relative" style={{ width: "100%" }}>
                      <select
                        className="text-white p-2 px-2 datepicker-input"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        style={{
                          flex: 1,
                          background: "transparent",
                          border: "1px solid white",
                          borderRadius: "2px",
                          appearance: "none"
                        }}
                      >
                        <option value="" disabled>Guests</option>
                        {Array.from({ length: 11 }, (_, i) => (
                          <option key={i+1} value={i+1} className="text-dark">{i+1} Guest{i > 0 ? 's' : ''}</option>
                        ))}
                      </select>
                      <TbTriangleInverted className="newicon"
                        style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none", fontSize: "16px" }}
                      />
                    </div>
                    {errors.guests && <p className="error-text">{errors.guests}</p>}
                  </div>
                </div>
    
                {/* Submit Button */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                  <button 
                    id="sumitbutton" 
                    type="submit" 
                    className="w-75 btn btn-outline-light "
              
                  >
                    Book Your Table Now
                  </button>
                </div>
              </form>
            </div>
          </div>
    
          {/* BOOKING POPUP */}
          {showPopup && (
            <>
              <div
                className="bookingoverlay"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: 9998,
                }}
              ></div>
    
              <div
                className="booking-popup"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#E52B33",
                  color: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  textAlign: "center",
                  zIndex: 9999,
                  minWidth: "300px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                }}
              >
                <h2>Booking Confirmed!</h2>
                <p>Name: {bookingDetails.name}</p>
                <p>Email: {bookingDetails.email}</p>
                <p>Phone: {bookingDetails.phone}</p>
                <p>Date: {bookingDetails.date}</p>
                <p>Time: {bookingDetails.time}</p>
                <p>Guests: {bookingDetails.guests}</p>
    
                <button
                  className="formclosepoppingbutton"
                  onClick={() => {
                    setShowPopup(false);
                    setBookingDetails({});
                  }}
                  style={{
                    marginTop: "20px",
                    background: "black",
                    color: "white",
                    border: "none",
                    padding: "8px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </>
          )}

                {/* SECRETS SECTION - Always visible */}
                <section className="oursecretssection">
                  <div className="row row2">
                    <div
                      className="i1img"
                      style={{
                        backgroundImage: `url(${i1})`,
                        height: "500px",
                      }}
                    ></div>
        
                    <div
                      className="i2img"
                      style={{
                        backgroundImage: `url(${i2})`,
                        height: "500px",
                      }}
                    ></div>
        
                    <div
                      className="icontent ms-5 mt-5"
                      style={{ width: "548px" }}
                      data-aos="fade-up" data-aos-delay="200"
                    >
                      <h1 className="re thisisoursecretsheading">This is our secrets</h1>
                      <h1 className="re2 perfectingredientsheading">Perfect Ingredients</h1>
                      <p className="helloiamfirstone text-justify lh-lg text-secondary w-auto secretpara">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
        
                      <button className="btn btn-outline-danger newbtn secretbutton">
                        Learn More
                      </button>
                    </div>
                  </div>
                </section>
                <style>
                  {
                    `
                    @media (min-width: 1024px) {
                       footer {
                    margin-top: 600px !important;
                    }
                    section.oursecretssection {
    margin-bottom: -94px !important;
}
                                  .p-3.menusectionone.reservationsectionone {
    width: 80.5% !important;
    margin-left: 126px !important;
    min-width: 80.5% !important;
}
    .reservationoursecretssection {
    margin-top: 100px !important;
    }
        .text-white.pt-4.text-center.menusectionh1 {
        margin-left: 0.5rem !important;
    }
                    }
    

                 
                    `
                  }
                </style>
                          <style>
  {`
  @media (max-width: 768px){
   .d-flex.justify-content-center.allform {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    width: 100% !important;
    margin-top: 228px !important; 
    padding: 0 !important;
  }
    
  }
/* Add these styles to your CSS file or in a <style> tag */

/* Form container responsive styling */
@media (max-width: 768px) {
  .d-flex.justify-content-center.allform {
    flex-direction: column;
    gap: 0;
    align-items: center;
    height: auto !important;
    padding: 0 !important;
    margin-top: 0 !important;
  }

  /* Form wrapper - full width red background */
  .d-flex.justify-content-center.allform .p-3 {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
  }

  /* Form itself should be centered */
  .d-flex.justify-content-center.allform form {
    max-width: 380px;
    margin: 0 auto !important;
  }

  /* Heading alignment */
  .d-flex.justify-content-center.allform h1 {
    margin-right: 0 !important;
    text-align: center;
    margin-left: 0 !important;
    text-align: left !important;
  }

  /* All form inputs full width within form container */
  .d-flex.justify-content-center.allform input {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* Date picker containers */
  .d-flex.justify-content-center.allform .position-relative {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .d-flex.justify-content-center.allform .position-relative .d-flex {
    width: 100% !important;
  }

  .d-flex.justify-content-center.allform .datepicker-input {
    width: 100% !important;
  }

  /* Select dropdown */
  .d-flex.justify-content-center.allform select.datepicker-input {
    width: 100% !important;
  }

  /* Submit button */
  .d-flex.justify-content-center.allform button#sumitbutton {
    width: 100% !important;
  }

  /* Mini about section - hide on mobile or stack below */
  .miniaboutsection {
    width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
    margin-top: 0 !important;
  }

  .pe-5 {
    padding-right: 13rem !important;
}
}

@media (max-width: 480px) {
  .d-flex.justify-content-center.allform form {
    max-width: 100%;
    padding: 0 10px;
  }    h3.jhshfbg {
      
        text-align: left !important;
        margin-left: 22% !important;
    }    p.abcf {
             text-align: left !important;
        margin-left: 22% !important;
    }
}
    /* Carousel caption positioning for mobile */
  @media (max-width: 768px) {
    .hero-caption {
      bottom: 25% !important;
      top: auto !important;
    }
    
    .hero-title {
      font-size: 43px !important;
    }
    
    .food-title {
      font-size: 18px !important;
    }

    /* Remove white gap above form section */
    .d-flex.justify-content-center.allform {
      margin-top: 0 !important;
    }

    #home-banner {
      margin-bottom: 0 !important;
    }
  }

  @media (max-width: 480px) {
    .hero-caption {
      bottom: 25% !important;
    }
    	    .menu-item.p-2.Col.aos-init.aos-animate {
padding: 11% !important;
}
    .hero-title {
      font-size: 43px !important;
    }
    
    .food-title {
      font-size: 18px !important;
    }
  }

  @media (max-width: 768px){
   .d-flex.justify-content-center.allform {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    width: 100% !important;
    padding: 0 !important;
  }
  }  
  /* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 991px) */
@media (max-width: 991px) {
  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 300px !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 600px !important;
    margin: 30px 20px !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 32px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }

  .secretbutton {
    margin-top: 20px !important;
  }
}

/* Mobile styles (max-width: 767px) */
@media (max-width: 767px) {
  .oursecretssection {
    padding: 40px 0 !important;
  }

  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
    margin: 0 !important;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 250px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 30px 0 !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 16px !important;
    text-align: center !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: center !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: center !important;
    padding: 0 10px !important;
  }

  .secretbutton {
    display: block !important;
    margin: 20px auto 0 !important;
    width: 200px !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .i1img, .i2img {
    height: 200px !important;
  }

  .icontent {
    padding: 0 15px !important;
    margin: 20px 0 !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    width: 180px !important;
    font-size: 14px !important;
    padding: 8px 16px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 180px !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }
}
  /* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 991px) */
@media (max-width: 991px) {
  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 300px !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 600px !important;
    margin: 30px 20px !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 32px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }

  .secretbutton {
    margin-top: 20px !important;
  }
}

/* Mobile styles (max-width: 767px) */
@media (max-width: 767px) {
  .oursecretssection {
    padding: 40px 0 !important;
  }
section.position-relative.absoluteimg.newone {
    height: 80vh !important;
}
    p.lead.font-italic.mx-4.mx-md-5.text-justify.newway {
    /* margin-left: 35px !important; */
    /* margin-right: 10px !important; */
    padding-left: 18% !important;
    padding-right: 17% !important;
}
    
  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
    margin: 0 !important;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 100vh !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 30px 0 !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 16px !important;
    text-align: center !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: center !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: center !important;
    padding: 0 10px !important;
  }

  .secretbutton {
    display: block !important;
    margin: 20px auto 0 !important;
    width: 200px !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 0 15px !important;
    margin: 20px 0 !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    width: 180px !important;
    font-size: 14px !important;
    padding: 8px 16px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }
}/* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .oursecretssection .row2 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .i1img, .i2img {
    width: 50% !important;
    height: 100vh !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 700px !important;
    margin: 30px auto !important;
    padding: 0 30px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 34px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }
}

/* Mobile styles (max-width: 768px) */
@media (max-width: 768px) {
  .oursecretssection {
    padding: 0 !important;
    background: white !important;
  }

  .oursecretssection .row2 {
    display: flex !important;
    flex-wrap: wrap !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* Chef image LEFT - exactly 50% width, tall height */
  .i1img {
    width: 50% !important;
    height: 400px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    padding: 0 !important;
    order: 1 !important;
    flex: 0 0 50% !important;
  }

  /* Restaurant image RIGHT - exactly 50% width, tall height */
  .i2img {
    width: 50% !important;
    height: 400px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    padding: 0 !important;
    order: 2 !important;
    flex: 0 0 50% !important;
  }

  /* Content below - full width 100% */
  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
    order: 3 !important;
    background: white !important;
    flex: 0 0 100% !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
    text-align: left !important;
    margin-bottom: 10px !important;
    color: #e52b34 !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: left !important;
    margin-bottom: 15px !important;
    color: #000 !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: left !important;
    padding: 0 !important;
    line-height: 1.7 !important;
    margin-bottom: 20px !important;
    color: #666 !important;
  }

  .secretbutton {
    display: inline-block !important;
    margin: 0 !important;
    width: auto !important;
    padding: 10px 25px !important;
    background: transparent !important;
    border: 1px solid #e52b34 !important;
    color: #e52b34 !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .oursecretssection {
    padding: 30px 0 !important;
  }

  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 25px 15px !important;
  }

  .thisisoursecretsheading {
    font-size: 13px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    font-size: 14px !important;
    padding: 8px 20px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 20px 12px !important;
  }

  .thisisoursecretsheading {
    font-size: 12px !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }

  .secretbutton {
    font-size: 13px !important;
    padding: 7px 18px !important;
  }
}
/* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .oursecretssection .row2 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .i1img, .i2img {
    width: 50% !important;
    height:100vh !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 700px !important;
    margin: 30px auto !important;
    padding: 0 30px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 34px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }
}

/* Mobile styles (max-width: 768px) */
@media (max-width: 768px) {
  .oursecretssection {
    padding: 0 !important;
    background: white !important;
  }

  .oursecretssection .row2 {
    display: flex !important;
    flex-wrap: wrap !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* Chef image LEFT - exactly 50% width, tall height */
  .i1img {
    width: 50% !important;
    height: 100vh !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    padding: 0 !important;
    order: 1 !important;
    flex: 0 0 50% !important;
  }

  /* Restaurant image RIGHT - exactly 50% width, tall height */
  .i2img {
    width: 50% !important;
    height: 400px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    margin-left: -10% !important;
    padding: 0 !important;
    order: 2 !important;
    flex: 0 0 50% !important;
  }

  /* Content below - full width 100% */
  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
    order: 3 !important;
    background: white !important;
    flex: 0 0 100% !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
    text-align: left !important;
    margin-bottom: 10px !important;
    color: #e52b34 !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: left !important;
    margin-bottom: 15px !important;
    color: #000 !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: left !important;
    padding: 0 !important;
    line-height: 1.7 !important;
    margin-bottom: 20px !important;
    color: #666 !important;
  }

  .secretbutton {
    display: inline-block !important;
    margin: 0 !important;
    width: auto !important;
    padding: 10px 25px !important;
    background: transparent !important;
    border: 1px solid #e52b34 !important;
    color: #e52b34 !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .oursecretssection {
    padding: 30px 0 !important;
  }

  .i1img, .i2img {
    height: 100vh!important;
  }

  .icontent {
    padding: 25px 15px !important;
  }

  .thisisoursecretsheading {
    font-size: 13px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    font-size: 14px !important;
    padding: 8px 20px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 20px 12px !important;
  }

  .thisisoursecretsheading {
    font-size: 12px !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }

  .secretbutton {
    font-size: 13px !important;
    padding: 7px 18px !important;
  }
}  `}
</style>
           <style>
  {`
  @media (max-width: 768px){
   .d-flex.justify-content-center.allform {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    width: 100% !important;
    margin-top: 228px !important; 
    padding: 0 !important;
  }
    
  }
/* Add these styles to your CSS file or in a <style> tag */

/* Form container responsive styling */
@media (max-width: 768px) {
  .d-flex.justify-content-center.allform {
    flex-direction: column;
    gap: 0;
    align-items: center;
    height: auto !important;
    padding: 0 !important;
    margin-top: 0 !important;
  }

  /* Form wrapper - full width red background */
  .d-flex.justify-content-center.allform .p-3 {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
  }

  /* Form itself should be centered */
  .d-flex.justify-content-center.allform form {
    max-width: 380px;
    margin: 0 auto !important;
  }

  /* Heading alignment */
  .d-flex.justify-content-center.allform h1 {
    margin-right: 0 !important;
    text-align: center;
    margin-left: 0 !important;
    text-align: left !important;
  }

  /* All form inputs full width within form container */
  .d-flex.justify-content-center.allform input {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* Date picker containers */
  .d-flex.justify-content-center.allform .position-relative {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .d-flex.justify-content-center.allform .position-relative .d-flex {
    width: 100% !important;
  }

  .d-flex.justify-content-center.allform .datepicker-input {
    width: 100% !important;
  }

  /* Select dropdown */
  .d-flex.justify-content-center.allform select.datepicker-input {
    width: 100% !important;
  }

  /* Submit button */
  .d-flex.justify-content-center.allform button#sumitbutton {
    width: 100% !important;
  }

  /* Mini about section - hide on mobile or stack below */
  .miniaboutsection {
    width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
    margin-top: 0 !important;
  }

  .pe-5 {
    padding-right: 13rem !important;
}
}

@media (max-width: 480px) {
  .d-flex.justify-content-center.allform form {
    max-width: 100%;
    padding: 0 10px;
  }    h3.jhshfbg {
      
        text-align: left !important;
        margin-left: 22% !important;
    }    p.abcf {
             text-align: left !important;
        margin-left: 22% !important;
    }
}
    /* Carousel caption positioning for mobile */
  @media (max-width: 768px) {
    .hero-caption {
      bottom: 25% !important;
      top: auto !important;
    }
    
    .hero-title {
      font-size: 43px !important;
    }
    
    .food-title {
      font-size: 18px !important;
    }

    /* Remove white gap above form section */
    .d-flex.justify-content-center.allform {
      margin-top: 0 !important;
    }

    #home-banner {
      margin-bottom: 0 !important;
    }
  }

  @media (max-width: 480px) {
    .hero-caption {
      bottom: 25% !important;
    }
    	    .menu-item.p-2.Col.aos-init.aos-animate {
padding: 11% !important;
}
    .hero-title {
      font-size: 43px !important;
    }
    
    .food-title {
      font-size: 18px !important;
    }
  }

  @media (max-width: 768px){
   .d-flex.justify-content-center.allform {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
    width: 100% !important;
    padding: 0 !important;
  }
  }  
  /* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 991px) */
@media (max-width: 991px) {
  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 300px !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 600px !important;
    margin: 30px 20px !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 32px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }

  .secretbutton {
    margin-top: 20px !important;
  }
}

/* Mobile styles (max-width: 767px) */
@media (max-width: 767px) {
  .oursecretssection {
    padding: 40px 0 !important;
  }

  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
    margin: 0 !important;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 250px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 30px 0 !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 16px !important;
    text-align: center !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: center !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: center !important;
    padding: 0 10px !important;
  }

  .secretbutton {
    display: block !important;
    margin: 20px auto 0 !important;
    width: 200px !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .i1img, .i2img {
    height: 200px !important;
  }
    .p-3.menusectionone {
               min-height: 55vh !important;
    }
  .icontent {
    padding: 0 15px !important;
    margin: 20px 0 !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    width: 180px !important;
    font-size: 14px !important;
    padding: 8px 16px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 180px !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }
}
  /* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 991px) */
@media (max-width: 991px) {
  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 300px !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 600px !important;
    margin: 30px 20px !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 32px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }

  .secretbutton {
    margin-top: 20px !important;
  }
}

/* Mobile styles (max-width: 767px) */
@media (max-width: 767px) {
  .oursecretssection {
    padding: 40px 0 !important;
  }
section.position-relative.absoluteimg.newone {
    height: 80vh !important;
}
    p.lead.font-italic.mx-4.mx-md-5.text-justify.newway {
    /* margin-left: 35px !important; */
    /* margin-right: 10px !important; */
    padding-left: 18% !important;
    padding-right: 17% !important;
}
    
  .oursecretssection .row2 {
    flex-direction: column;
    align-items: center;
    margin: 0 !important;
  }

  .i1img, .i2img {
    width: 100% !important;
    height: 100vh !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 30px 0 !important;
    padding: 0 20px !important;
  }

  .thisisoursecretsheading {
    font-size: 16px !important;
    text-align: center !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: center !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: center !important;
    padding: 0 10px !important;
  }

  .secretbutton {
    display: block !important;
    margin: 20px auto 0 !important;
    width: 200px !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .i1img, .i2img {
    height: 100vh !important;
  }
h1.text-white.pt-4.text-center.menusectionh1 {
    margin-right: 14% !important;
    /* padding-top: 11% !important; */
}
  .icontent {
    padding: 0 15px !important;
    margin: 20px 0 !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    width: 180px !important;
    font-size: 14px !important;
    padding: 8px 16px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }
}/* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .oursecretssection .row2 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .i1img, .i2img {
    width: 50% !important;
    height: 100vh !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 700px !important;
    margin: 30px auto !important;
    padding: 0 30px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 34px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }
}

/* Mobile styles (max-width: 768px) */
@media (max-width: 768px) {
  .oursecretssection {
    padding: 0 !important;
    background: white !important;
  }

  .oursecretssection .row2 {
    display: flex !important;
    flex-wrap: wrap !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* Chef image LEFT - exactly 50% width, tall height */
  .i1img {
    width: 50% !important;
    height: 400px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    padding: 0 !important;
    order: 1 !important;
    flex: 0 0 50% !important;
  }

  /* Restaurant image RIGHT - exactly 50% width, tall height */
  .i2img {
    width: 50% !important;
    height: 400px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    padding: 0 !important;
    order: 2 !important;
    flex: 0 0 50% !important;
  }

  /* Content below - full width 100% */
  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
    order: 3 !important;
    background: white !important;
    flex: 0 0 100% !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
    text-align: left !important;
    margin-bottom: 10px !important;
    color: #e52b34 !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: left !important;
    margin-bottom: 15px !important;
    color: #000 !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: left !important;
    padding: 0 !important;
    line-height: 1.7 !important;
    margin-bottom: 20px !important;
    color: #666 !important;
  }

  .secretbutton {
    display: inline-block !important;
    margin: 0 !important;
    width: auto !important;
    padding: 10px 25px !important;
    background: transparent !important;
    border: 1px solid #e52b34 !important;
    color: #e52b34 !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .oursecretssection {
    padding: 30px 0 !important;
  }

  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 25px 15px !important;
  }

  .thisisoursecretsheading {
    font-size: 13px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    font-size: 14px !important;
    padding: 8px 20px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 20px 12px !important;
  }

  .thisisoursecretsheading {
    font-size: 12px !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }

  .secretbutton {
    font-size: 13px !important;
    padding: 7px 18px !important;
  }
}
/* Our Secrets Section - Responsive Styles */

/* Tablet styles (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .oursecretssection .row2 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  .i1img, .i2img {
    width: 50% !important;
    height:100vh !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .icontent {
    width: 100% !important;
    max-width: 700px !important;
    margin: 30px auto !important;
    padding: 0 30px !important;
  }

  .thisisoursecretsheading {
    font-size: 18px !important;
  }

  .perfectingredientsheading {
    font-size: 34px !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 15px !important;
  }
}

/* Mobile styles (max-width: 768px) */
@media (max-width: 768px) {
  .oursecretssection {
    padding: 0 !important;
    background: white !important;
  }

  .oursecretssection .row2 {
    display: flex !important;
    flex-wrap: wrap !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* Chef image LEFT - exactly 50% width, tall height */
  .i1img {
    width: 50% !important;
    height: 100vh !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    padding: 0 !important;
    order: 1 !important;
    flex: 0 0 50% !important;
  }

  /* Restaurant image RIGHT - exactly 50% width, tall height */
  .i2img {
    width: 50% !important;
    height: 400px !important;
    background-size: cover !important;
    background-position: center !important;
    margin: 0 !important;
    margin-left: -10% !important;
    padding: 0 !important;
    order: 2 !important;
    flex: 0 0 50% !important;
  }

  /* Content below - full width 100% */
  .icontent {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 30px 20px !important;
    order: 3 !important;
    background: white !important;
    flex: 0 0 100% !important;
  }

  .thisisoursecretsheading {
    font-size: 14px !important;
    text-align: left !important;
    margin-bottom: 10px !important;
    color: #e52b34 !important;
  }

  .perfectingredientsheading {
    font-size: 28px !important;
    text-align: left !important;
    margin-bottom: 15px !important;
    color: #000 !important;
  }

  .secretpara {
    width: 100% !important;
    font-size: 14px !important;
    text-align: left !important;
    padding: 0 !important;
    line-height: 1.7 !important;
    margin-bottom: 20px !important;
    color: #666 !important;
  }

  .secretbutton {
    display: inline-block !important;
    margin: 0 !important;
    width: auto !important;
    padding: 10px 25px !important;
    background: transparent !important;
    border: 1px solid #e52b34 !important;
    color: #e52b34 !important;
  }
}

/* Small mobile styles (max-width: 480px) */
@media (max-width: 480px) {
  .oursecretssection {
    padding: 30px 0 !important;
  }

  .i1img, .i2img {
    height: 100vh!important;
  }

  .icontent {
    padding: 25px 15px !important;
  }

  .thisisoursecretsheading {
    font-size: 13px !important;
  }

  .perfectingredientsheading {
    font-size: 24px !important;
  }

  .secretpara {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .secretbutton {
    font-size: 14px !important;
    padding: 8px 20px !important;
  }
}

/* Extra small mobile (max-width: 360px) */
@media (max-width: 360px) {
  .i1img, .i2img {
    height: 100vh !important;
  }

  .icontent {
    padding: 20px 12px !important;
  }

  .thisisoursecretsheading {
    font-size: 12px !important;
  }

  .perfectingredientsheading {
    font-size: 22px !important;
  }

  .secretpara {
    font-size: 12px !important;
  }

  .secretbutton {
    font-size: 13px !important;
    padding: 7px 18px !important;
  }
}  `}
</style>   
    </>
  )
}

export default Reservation