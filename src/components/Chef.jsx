import sb2 from '../assets/sb2.jpg';
import l1 from '../assets/l1.png';
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import ab from '../assets/ab.jpg';
import { Link } from 'react-router-dom';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import abs1 from '../assets/abs1.jpg';
import chef4 from "../assets/chef4.png"
import chef2 from "../assets/chef2.png"
import chef3 from "../assets/chef3.png"
import chef from "../assets/chef.png"
import chef1 from "../assets/chef1.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { TbTriangleInverted } from "react-icons/tb";






const Chef = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [guests, setGuests] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [errors, setErrors] = useState({ date: "", time: "", guests: "" });

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
    localStorage.setItem("lastBooking", JSON.stringify(booking));
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
                <h1 className='aboutpageheading text-center'>Chef</h1>
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
                   CHEF
                    <span className='fs-5 fw-bold' style={{ display: 'flex', alignItems: 'center' }}>
                      <FaChevronRight size={20} />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
            <div>
                      <section style={{background: "#FAFAFA", paddingTop: "100px", paddingBottom: "100px"}}>
                      <div style={{paddingBottom: "50px"}} data-aos="fade-up">
                            <h1 className="re text-center chefheading">Chef</h1>
                              <h1 className="re2 fw-bold text-center masterchefheading">Our Master Chef</h1>
                      </div>
                        <div className="row justify-content-center">
                          <div className="col-1" data-aos="fade-up" >
                            <div className="chef-img"  style={{ backgroundImage: `url(${chef1})` }}
                    >
        
                            </div>
                            <div className="chef-info">
                    <h1 className="firstchefname mt-2">John Gustavo</h1>
                    <h3 className="firstchefname1 mt-2">CEO, Co Founder</h3>
                    <p className="firstchefname3 mt-3 text-justify">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
        
                            </div>
                          </div>
                        <div className="col-1" data-aos="fade-up">
                            <div className="chef-img"  style={{ backgroundImage: `url(${chef2})` }}
                    >
        
                            </div>
                            <div className="chef-info">
                    <h1 className="firstchefname mt-2">John Gustavo</h1>
                    <h3 className="firstchefname1 mt-2">CEO, Co Founder</h3>
                    <p className="firstchefname3 mt-3 text-justify">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
        
                            </div>
                          </div>
                            <div className="col-1" data-aos="fade-up">
                            <div className="chef-img"  style={{ backgroundImage: `url(${chef3})` }}
                    >
        
                            </div>
                            <div className="chef-info">
                    <h1 className="firstchefname mt-2">John Gustavo</h1>
                    <h3 className="firstchefname1 mt-2">CEO, Co Founder</h3>
                    <p className="firstchefname3 mt-3 text-justify">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
        
                            </div>
                          </div>
                          <div className="col-1" data-aos="fade-up">
                            <div className="chef-img"  style={{ backgroundImage: `url(${chef4})` }}
                    >
        
                            </div>
                            <div className="chef-info">
                    <h1 className="firstchefname mt-2">John Gustavo</h1>
                    <h3 className="firstchefname1 mt-2">CEO, Co Founder</h3>
                    <p className="firstchefname3 mt-3 text-justify">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
        
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                                <div className="d-flex justify-content-center" style={{ background: "#fff", height: "550px" }}>
                                        <div className="p-3 " style={{ width: "380px", background: "#E52B33"}}>
                                  <form
                                  className="text-center"
                                  style={{ marginRight: "2px", fontSize: "14px" }}
                                  onSubmit={handleSubmit}
                                >
                                          <h1 className="text-white text-center mt-5" style={{ fontSize: "22px", marginRight: "91px" }}>    Book Your Table
                                </h1>
                                  {/* Name Input */}
                                  <input
                                    type="text"
                                    id="nameInput"
                                    className="text-white p-2 py-2 px-2 mt-2"
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
                                    className="text-white p-2 py-2 px-2 mt-3"
                                    title="Please enter a valid email ending with .com"
                                    required
                                    placeholder="Email"
                                    style={{ width: "280px" }}
                                  />
                    
                                  {/* Phone Input */}
                                  <input
                                    type="tel"
                                    id="phoneInput"
                                    className="text-white p-2 py-2 px-2 mt-3"
                                    pattern="[0-9]{11}"
                                    title="Please enter an 11-digit phone number"
                                    required
                                    placeholder="Phone"
                                    style={{ width: "280px" }}
                                  />
                    
                                  {/* Check-in Date Picker */}
                                  <div className="position-relative mt-3 mx-auto" style={{ width: "280px"}}>
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
                                  <div className="position-relative mt-3" style={{ width: "280px", marginLeft: "33px" }}>
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
                                  <div className="position-relative mt-3" style={{ width: "280px", marginLeft: "33px" }}>
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
                    
                                  {/* Submit Button */}
                                  <button id="sumitbutton" type="submit" className="mt-4 w-75 btn btn-outline-light ">
                                    Book Your Table Now
                                  </button>
                                </form>
                    
                                        </div>
                                        <div className="miniaboutsection"  data-aos="fade-up"
                                  data-aos-delay="200"   style={{ backgroundImage: `url(${chef})`, marginBottom: "-100px" }}>
                                      <div style={{marginTop: "100px"}} data-aos="fade-up"  data-aos-delay="200">
                                  <h1 className="re aboutheading">About</h1>
                                  <h1 className="re2 welcomeheading">Welcome to <br /> Flavora</h1>
                                  <p className="hello aboutpara">
                                  Flavora Restaurant creates an experience where every plate carries its own narrative. Influenced by world cuisines and built on fresh, seasonal produce, Flavora presents thoughtfully crafted dishes, attentive service, and a warm setting. From slow-developed entrées to lively small bites, each recipe is made to emphasize harmony, fragrance, and depth. The environment is shaped for comfort, conversation, and lasting memories.
                                  </p>
                                </div>
                    
                                        {/* <div>
                                          <img className="chefimg" src={chef} alt="chefimage" width={66}  />
                                        </div> */}
                                      </div>
                                      </div>
                                {showPopup && (
                                  <>
                                    {/* Overlay */}
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
                    
                                    {/* Single Popup Card */}
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
                    
                                <button className="formclosepoppingbutton"
                                  onClick={() => {
                                    setShowPopup(false);          
                                    setBookingDetails({});        
                                    setStartDate(null);           
                                    setStartTime(null);           
                                    setGuests("");                
                                    setErrors({ date: "", time: "", guests: "" });
                                    document.getElementById("nameInput").value = "";  
                                    document.getElementById("emailInput").value = ""; 
                                    document.getElementById("phoneInput").value = ""; 
                                    localStorage.removeItem("lastBooking");
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





   <style>
    
    {`/* Extra small mobile (max-width: 360px) */
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

/* Responsive styles for Book Your Table form and miniaboutsection */
@media (max-width: 768px) {
  /* Main container - stack vertically */
  .d-flex.justify-content-center[style*="height: 550px"] {
    flex-direction: column !important;
    height: auto !important;
    padding: 0 !important;
  }

  /* Red form section - full width on mobile */
  .d-flex.justify-content-center[style*="height: 550px"] > .p-3 {
    width: 100% !important;
    max-width: 100% !important;
    padding: 30px 20px !important;
  }

  /* Form itself centered */
  .d-flex.justify-content-center[style*="height: 550px"] form {
    max-width: 380px;
    margin: 0 auto !important;
  }

  /* Miniaboutsection - full width below form */
  .miniaboutsection {
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
    margin-bottom: 0 !important;
    padding: 40px 20px !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .miniaboutsection > div {
    margin-top: 0 !important;
  }

  .miniaboutsection .aboutheading {
    font-size: 14px !important;
    text-align: left !important;
  }

  .miniaboutsection .welcomeheading {
    font-size: 28px !important;
    text-align: left !important;
    line-height: 1.3 !important;
  }

  .miniaboutsection .aboutpara {
    font-size: 14px !important;
    text-align: center !important;
    line-height: 1.6 !important;
    margin-top: 15px !important;
  }
}

@media (max-width: 480px) {
  .miniaboutsection {
    padding: 30px 15px !important;
  }

  .miniaboutsection .aboutheading {
    font-size: 13px !important;
  }

  .miniaboutsection .welcomeheading {
    font-size: 24px !important;
  }

  .miniaboutsection .aboutpara {
    font-size: 13px !important;
  }
}  `}</style>    </>

)
}

export default Chef
