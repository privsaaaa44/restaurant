import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.jpg";
import "../App.css";
import "../index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import chef from "../assets/chef.png"

const Home = () => {
  
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
const [guests, setGuests] = useState("")
  const handleSubmit = (e) => {
    const handleSubmit = (e) => {
  e.preventDefault();

  // Date validation
  if (!startDate) {
    alert("Please select a check-in date!");
    return;
  }
  const today = new Date();
  if (startDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
    alert("Date cannot be in the past!");
    return;
  }

  // Time validation
  if (!startTime) {
    alert("Please select a time!");
    return;
  }

  const selectedHour = startTime.getHours();
  if (selectedHour < 9 || selectedHour > 22) {
    alert("Please select a time between 9 AM and 10 PM");
    return;
  }

  // Guests validation
  if (!guests) {
    alert("Please select the number of guests!");
    return;
  }

  alert(
    `Booking confirmed!\nDate: ${startDate.toLocaleDateString()}\nTime: ${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\nGuests: ${guests}`
  );

  // Proceed with form submission logic (API call, etc.)
};
    e.preventDefault();

    // Date validation
    if (!startDate) {
      alert("Please select a check-in date!");
      return;
    }
    const today = new Date();
    if (startDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
      alert("Date cannot be in the past!");
      return;
    }

    // Time validation
    if (!startTime) {
      alert("Please select a time!");
      return;
    }

    // Optional: restrict booking hours (e.g., 9 AM - 10 PM)
    const selectedHour = startTime.getHours();
    if (selectedHour < 9 || selectedHour > 22) {
      alert("Please select a time between 9 AM and 10 PM");
      return;
    }

    alert(
      `Booking confirmed!\nDate: ${startDate.toLocaleDateString()}\nTime: ${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    );

    // Proceed with form submission logic (API call, etc.)
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
              type="name"
              className="text-white p-2 py-2 px-2 mt-2"
              id="nameInput"
              pattern="[A-Za-z\s]+"
              title="Only letters and spaces are allowed"
              required
              placeholder="Name"
              style={{ width: "280px" }}
            />
            <input
              className="text-white p-2 py-2 px-2 mt-3"
              type="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$"
              title="Please enter a valid email ending with .com"
              required
              placeholder="Email"
              style={{ width: "280px" }}
            />
            <input
              className="text-white p-2 py-2 px-2 mt-3"
              type="tel"
              pattern="[0-9]{11}"
              title="Please enter an 11-digit phone number"
              id="phone"
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
                style={{ width: "100%" }}
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
    </>
  );
};

export default Home;
