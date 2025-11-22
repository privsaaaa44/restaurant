import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import B1 from "../assets/B1.jpg";
import B2 from "../assets/B2.jpg";
import "../App.css";
import "../index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import chef from "../assets/chef.png"
import sb1 from "../assets/SB1.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import breakfast1 from "../assets/breakfast1.jpg"
import breadicon from "../assets/breadicon.png"
import foodicon from "../assets/foodicon.png"

const Home = () => {
  
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
const [showPopup, setShowPopup] = useState(false); // to show/hide popup
const [bookingDetails, setBookingDetails] = useState({}); // store booking info

const [guests, setGuests] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();

  if (!startDate) {
    alert("Please select a check-in date!");
    return;
  }
  if (!startTime) {
    alert("Please select a time!");
    return;
  }
  if (!guests) {
    alert("Please select the number of guests!");
    return;
  }

  const now = new Date();
  // Prevent past time on same day
  if (startDate.toDateString() === now.toDateString() && startTime < now) {
    alert("You cannot select a past time!");
    return;
  }

  // Collect all booking info
  const booking = {
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value,
    phone: document.getElementById("phoneInput").value,
    date: startDate.toLocaleDateString(),
    time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    guests
  };

  // Save to state for popup
  setBookingDetails(booking);

  // Save to localStorage
  localStorage.setItem("lastBooking", JSON.stringify(booking));

  // Show popup
  setShowPopup(true);
};



  return (
    <>
    <div>
  <section  id="home-banner">
      <Carousel fade controls={false} indicators={true} >
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img src={B1} className="d-block w-100 home-hero-img" alt="slide1" />
            <div className="carousel-overlay"></div>
            <Carousel.Caption className="hero-caption">
              <h1 className="hero-title animate-slide-in">Cooking Since</h1>
              <div className="food-section text-center my-4">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-grow-1 line"></div>
                  <span className="px-3 food-title">1950</span>
                  <div className="flex-grow-1 line"></div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img src={B2} className="d-block w-100 home-hero-img" alt="slide2" />
            <div className="carousel-overlay"></div>
            <Carousel.Caption className="hero-caption">
              <h1 className="hero-title animate-slide-in">Best Quality</h1>
              <div className="food-section text-center my-4">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-grow-1 line"></div>
                  <span className="px-3 food-title">FOOD</span>
                  <div className="flex-grow-1 line"></div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
</section>
</div>
      <div className="d-flex justify-content-center" style={{ background: "#fff", height: "550px" }}>
        <div className="p-3 " style={{ width: "380px", background: "#E52B33"}}>
          <h1 className="text-white text-center mt-5" style={{ fontSize: "22px", marginRight: "91px" }}>
            Book Your Table
          </h1>
          <form
            className="text-center"
            style={{ marginRight: "2px", fontSize: "14px" }}
            onSubmit={handleSubmit}
          >
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

<input
  type="email"
  id="emailInput"
  className="text-white p-2 py-2 px-2 mt-3"
  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$"
  title="Please enter a valid email ending with .com"
  required
  placeholder="Email"
  style={{ width: "280px" }}
/>

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


            {/* Date Picker */}
            <div className="position-relative mt-3" style={{ width: "280px", marginLeft: "33px" }}>
<DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  placeholderText="Check in"
  className="text-white p-2 pe-5 px-2 datepicker-input"
  style={{ width: "100%" }}
  minDate={new Date()}  // prevents past dates
/>


              <FaRegCalendarAlt
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "white",
                }}
              />
            </div>

            {/* Time Picker */}
            <div className="position-relative mt-3" style={{ width: "280px", marginLeft: "33px" }}>
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
      ? new Date() // current time if today
      : new Date().setHours(9, 0) // else 9 AM
  }
  maxTime={new Date().setHours(22, 0)} // 10 PM
/>

              <FaRegClock
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "white",
                  fontSize: "16px",
                }}
              />
            </div>
{/* Guests Select */}
<div className="position-relative mt-3" style={{ width: "280px", marginLeft: "33px" }}>
<select
  className="text-white p-2 px-2 datepicker-input"
  style={{
    width: "100%",
    background: "transparent",
    border: "1px solid white",
    borderRadius: "2px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    color: "white",
    paddingRight: "30px",
  }}
  value={guests}
  onChange={(e) => setGuests(e.target.value)}
  required
>
  <option value="" disabled>
    Guests
  </option>
  <option value="1" className="text-dark">1 Guest</option>
  <option value="2" className="text-dark">2 Guests</option>
  <option value="3" className="text-dark">3 Guests</option>
  <option value="4" className="text-dark">4 Guests</option>
  <option value="5" className="text-dark">5 Guests</option>
</select>


  {/* Optional: Add a dropdown arrow icon like date/time pickers */}
  <span
    style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "white",
      fontSize: "16px",
    }}
  >
    ▼
  </span>
</div>

            <button id="sumitbutton"
              type="submit"
              className="mt-3"
              style={{ width: "280px", height: "50px", outline: "none", boxShadow: 'none' }}
            >
              Book Your Table Now
            </button>
          </form>
        </div>
        <div className="miniaboutsection"   style={{ backgroundImage: `url(${chef})`, marginBottom: "-100px" }}>
        <div  style={{marginTop: "100px"}}>
          <h1 className="re">About</h1>
          <h1 className="re2">Welcome to <br />
            Flavora</h1>
            <p className="hello">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        {/* <div>
          <img className="chefimg" src={chef} alt="chefimage" width={66}  />
        </div> */}
      </div>
      </div>
      {showPopup && (
  <div className="booking-popup" style={{
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
    minWidth: "300px"
  }}>
    <h2>Booking Confirmed!</h2>
    <p>Date: {bookingDetails.date}</p>
    <p>Time: {bookingDetails.time}</p>
    <p>Guests: {bookingDetails.guests}</p>
{showPopup && (
  <>
    {/* Overlay */}
    <div
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

    {/* Centered Popup */}
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
        onClick={() => {
          setShowPopup(false);          // hide popup
          setBookingDetails({});         // clear popup info
          setStartDate(null);            // reset form
          setStartTime(null);
          setGuests("");
          localStorage.removeItem("lastBooking"); // remove from storage
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

  </div>
)}

      <div>
<section
  className="position-relative absoluteimg"
  style={{
    backgroundImage: `url(${sb1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "100%"
  }}
>
  <div className="overlay"></div>

  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      color: "white",
      textAlign: "center",
      width: "100%"
    }}
  >
    <h1 className="" style={{ textTransform: "uppercase", fontSize: "16px", letterSpacing: "5px", fontWeight: "700" }}>
      Now Bookings
    </h1>
    <h1 style={{fontWeight: "700", fontSize: "40px"}}>Private Dinners & Happy Hours</h1>
  </div>
</section>
      </div>
      <div>
        <section>
          <div className="text-center" style={{marginTop: "100px"}}>
           <h1 className="re">Specialties</h1>
          <h1 className="re2">Our Menu</h1>
<Container style={{ marginTop: "50px" }}>
  {/* ROW 1 */}
  <div style={{ marginBottom: "50px" }}> {/* Gap between rows */}
    <Row className="bg-white gx-4 gy-3">
      {[1, 2, 3].map((col, colIndex) => (
        <Col xs={12} md={4} key={colIndex} className="menu-item p-2" style={{ background: "#fcfcfc", borderRadius: "2px" }}>
          <h1 className="mt-4" style={{ fontSize: "22px", fontWeight: "700", textTransform: "uppercase", marginBottom: "2em" }}>
            Breakfast
          </h1>

          {[1, 2, 3].map((item, index) => (
            <div key={index} className="menu-item2" style={{ position: "relative", marginBottom: "1rem" }}>
              {index === 0 && (
                <>
                  <img src={breadicon} alt="breadicon" className="icon-left border-2 border-gray" />
                  <img src={foodicon} alt="" className="icon-right" />
                </>
              )}
              <div className="d-flex ing">
                <div>
                  <img src={breakfast1} alt={`Breakfast ${item}`} className="img111" />
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: "500", marginRight: "83px" }}>
                    Beef Roast
                    <br />
                    <span style={{ marginRight: "28px" }}>Source</span>
                  </h3>
                  <p style={{ color: "#000000cc", marginRight: "15px" }}>
                    Meat, Potatoes, Rice,
                    <br />
                    <span style={{ marginRight: "83px" }}>Tomatoe</span>
                  </p>
                </div>
                <div>
                  <p style={{ color: "#e52b34", fontSize: "20px", fontWeight: "600", lineHeight: "1.3" }}>$29</p>
                </div>
              </div>
              {index < 2 && <hr className="firsthr" />}
            </div>
          ))}
        </Col>
      ))}
    </Row>
  </div>

  {/* ROW 2 */}
  <div style={{ marginBottom: "50px" }}>
    <Row className="bg-white gx-4 gy-3">
      {[1, 2, 3].map((col, colIndex) => (
        <Col xs={12} md={4} key={colIndex} className="menu-item p-2" style={{ background: "#fcfcfc", borderRadius: "2px" }}>
          <h1 className="mt-4" style={{ fontSize: "22px", fontWeight: "700", textTransform: "uppercase", marginBottom: "2em" }}>
            Breakfast
          </h1>

          {[1, 2, 3].map((item, index) => (
            <div key={index} className="menu-item2" style={{ position: "relative", marginBottom: "1rem" }}>
              {index === 0 && (
                <>
                  <img src={breadicon} alt="breadicon" className="icon-left border-2 border-gray" />
                  <img src={foodicon} alt="" className="icon-right" />
                </>
              )}
              <div className="d-flex ing">
                <div>
                  <img src={breakfast1} alt={`Breakfast ${item}`} className="img111" />
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: "500", marginRight: "83px" }}>
                    Beef Roast
                    <br />
                    <span style={{ marginRight: "28px" }}>Source</span>
                  </h3>
                  <p style={{ color: "#000000cc", marginRight: "15px" }}>
                    Meat, Potatoes, Rice,
                    <br />
                    <span style={{ marginRight: "83px" }}>Tomatoe</span>
                  </p>
                </div>
                <div>
                  <p style={{ color: "#e52b34", fontSize: "20px", fontWeight: "600", lineHeight: "1.3" }}>$29</p>
                </div>
              </div>
              {index < 2 && <hr className="firsthr" />}
            </div>
          ))}
        </Col>
      ))}
    </Row>
  </div>
</Container>

            </div>
 
        </section>
      </div>
      
    </>
  );
};

export default Home;
