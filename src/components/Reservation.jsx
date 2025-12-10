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
                <div className="p-3 menusectionone reservationsectionone" style={{ width: "100%", background: "#E52B33", display: "flex", justifyContent: "center", padding: "60px 20px" }}>
                  <div style={{ maxWidth: "1200px", width: "100%" }}>
                    <form 
                      className="text-center menusectionform reservationform"
                      style={{ marginRight: "0", fontSize: "14px" }}
                      onSubmit={handleSubmit}
                    >
                      <h1 className="text-white text-center mt-5 menusectionh1 reservationh1" style={{ fontSize: "22px", marginRight: "0", marginBottom: "40px" }}>
                        Book Your Table
                      </h1>
          
                      <div className='inputnamephoneemail reservationinputnamephoneemail' style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
                        {/* Name Input */}
                        <input
                          type="text"
                          id="nameInput"
                          className="text-white p-2 py-2 px-2 menusectioninputname reservationinputname"
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
                          className="text-white p-2 py-2 px-2 menusectioninputemail reservationinputemail"
                          title="Please enter a valid email ending with .com"
                          required
                          placeholder="Email"
                          style={{ width: "280px" }}
                        />
          
                        {/* Phone Input */}
                        <input
                          type="tel"
                          id="phoneInput"
                          className="text-white p-2 py-2 px-2 menusectioninputphone reservationinputphone"
                          pattern="[0-9]{11}"
                          title="Please enter an 11-digit phone number"
                          required
                          placeholder="Phone"
                          style={{ width: "280px" }}
                        />
                      </div>
          
                      <div className='inputtimedateguestpicker reservationinputtimedateguestpicker' style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
                        {/* Check-in Date Picker */}
                        <div className="position-relative menusectioninputdatediv reservationinputdatediv" style={{ width: "280px" }}>
                          <div className="d-flex align-items-center position-relative menusectioninputdatedivsecond reservationinputdatedivsecond" style={{ width: "100%" }}>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              placeholderText="Check in"
                              className="text-white p-2 pe-5 px-2 datepicker-input menusectioninputdate reservationinputdate"
                              minDate={new Date()}
                              style={{ flex: 1, width: "100%" }}
                            />
                            <FaRegCalendarAlt className="newicon menusectioninputdateicon reservationinputdateicon"
                              style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none" }}
                            />
                          </div>
                          {errors.date && <p className="error-text menusectionerror-text reservationerror-text">{errors.date}</p>}
                        </div>
          
                        {/* Time Picker */}
                        <div className="position-relative menusectioninputtimediv reservationinputtimediv" style={{ width: "280px" }}>
                          <div className="d-flex align-items-center position-relative menusectioninputtimedivsecond reservationinputtimedivsecond" style={{ width: "100%" }}>
                            <DatePicker
                              selected={startTime}
                              onChange={(time) => setStartTime(time)}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              dateFormat="h:mm aa"
                              placeholderText="Select time"
                              className="text-white p-2 pe-5 px-2 datepicker-input menusectioninputtime reservationinputtime"
                              minTime={
                                startDate && startDate.toDateString() === new Date().toDateString()
                                  ? new Date()
                                  : new Date().setHours(9, 0)
                              }
                              maxTime={new Date().setHours(22, 0)}
                              style={{ flex: 1, width: "100%" }}
                            />
                            <FaRegClock className="newicon menusectioninputtimeicon reservationinputtimeicon"
                              style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none", fontSize: "16px" }}
                            />
                          </div>
                          {errors.time && <p className="error-text menusectionerror-text2 reservationerror-text2">{errors.time}</p>}
                        </div>
          
                        {/* Guests Select */}
                        <div className="position-relative menusectioninputguestdiv reservationinputguestdiv" style={{ width: "280px" }}>
                          <div className="d-flex align-items-center position-relative menusectioninputguestdivsecond reservationinputguestdivsecond" style={{ width: "100%" }}>
                            <select
                              className="text-white p-2 px-2 datepicker-input menusectioninputguest reservationinputguest"
                              value={guests}
                              onChange={(e) => setGuests(e.target.value)}
                              style={{
                                flex: 1,
                                width: "100%",
                                background: "transparent",
                                border: "1px solid white",
                                borderRadius: "2px",
                                appearance: "none"
                              }}
                            >
                              <option value="" disabled className='menusectioninputguestoption reservationinputguestoption'>Guests</option>
                              {Array.from({ length: 11 }, (_, i) => (
                                <option key={i + 1} value={i + 1} className="text-dark">{i + 1} Guest{i > 0 ? 's' : ''}</option>
                              ))}
                            </select>
                            <TbTriangleInverted className="newicon menusectioninputguesticon reservationinputguesticon"
                              style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none", fontSize: "16px" }}
                            />
                          </div>
                          {errors.guests && <p className="error-text menusectionerror-text3 reservationerror-text3">{errors.guests}</p>}
                        </div>
                      </div>
          
                      {/* Submit Button */}
                      <button id="sumitbutton" type="submit" className="mt-4 w-75 btn btn-outline-light menusectionbutton reservationbutton">
                          Book Your Table Now
                        </button>
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
                <section className="oursecretssection reservationoursecretssection">
                  <div className="row row2">
                    <div
                      className="i1img reservationi1img"
                      style={{
                        backgroundImage: `url(${i1})`,
                        height: "500px",
                      }}
                    ></div>
        
                    <div
                      className="i2img reservationi2img"
                      style={{
                        backgroundImage: `url(${i2})`,
                        height: "500px",
                      }}
                    ></div>
        
                    <div
                      className="icontent ms-5 mt-5 reservationcontent"
                      style={{ width: "548px" }}
                      data-aos="fade-up" data-aos-delay="200"
                    >
                      <h1 className="re thisisoursecretsheading reservationthisisoursecretsheading">This is our secrets</h1>
                      <h1 className="re2 perfectingredientsheading reservationperfectingredientsheading">Perfect Ingredients</h1>
                      <p className="helloiamfirstone text-justify lh-lg text-secondary w-auto secretpara reservationsecretpara">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated
                        they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                      </p>
        
                      <button className="btn btn-outline-danger newbtn secretbutton reservationsecretbutton">
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
                                  .p-3.menusectionone.reservationsectionone {
    width: 80.5% !important;
    margin-left: 126px !important;
    min-width: 80.5% !important;
}
    .reservationoursecretssection {
    margin-top: 100px !important;
    }
                    }
    

                 
                    `
                  }
                </style>
    </>
  )
}

export default Reservation