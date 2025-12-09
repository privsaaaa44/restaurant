import sb2 from '../assets/sb2.jpg';
import l1 from '../assets/l1.png';
import { FaChevronRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import ab from '../assets/ab.jpg';
import { Link } from 'react-router-dom';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import AOS from "aos";
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

// MenuCard Component - Separate component to display each menu category
const MenuCard = ({ title, data }) => {
  return (
    <div
      className="menu-item p-2 Col"
      style={{
        background: "#fcfcfc",
        borderRadius: "2px",
        padding: "20px",
        margin: "0 20px",
      }}
      data-aos="fade-up"
    >
      <h1
        className="mt-4"
        style={{
          fontSize: "22px",
          fontWeight: "700",
          textTransform: "uppercase",
          marginBottom: "2em",
        }}
      >
        {title}
      </h1>

      {data.map((item, index) => (
        <div key={index} className="menu-item2" style={{ marginBottom: "1rem" }}>
          <div className="d-flex ing">
            <img src={item.img} alt={item.name} className="img111" />

            <div style={{ marginLeft: "10px", flexGrow: 1 }}>
              <h3
                className="jhshfbg"
                style={{ fontSize: "17px", fontWeight: "500" }}
              >
                {item.name}
                <br />
                <span className="lemon">{item.source}</span>
              </h3>

              <p className="abcf" style={{ color: "#000000cc" }}>
                {item.details}
                <br />
                <span className="ayaan">{item.source2}</span>
              </p>
            </div>

            <p
              className="priccepara"
              style={{
                color: "#e52b34",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item.price}
            </p>
          </div>

          {index < 2 && <hr className="firsthr" />}
        </div>
      ))}
    </div>
  );
};

const Menu = () => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [guests, setGuests] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [errors, setErrors] = useState({ date: "", time: "", guests: "" });

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // BREAKFAST
  const breakfastItems = [
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$12",
      img: breakfast1,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$10",
      img: breakfast2,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$8",
      img: breakfast3,
    },
  ];

  // LUNCH
  const lunchItems = [
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$25",
      img: lunch1,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$18",
      img: lunch2,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$32",
      img: lunch3,
    },
  ];

  // DINNER
  const dinnerItems = [
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$28",
      img: dinner1,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$24",
      img: dinner2,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$35",
      img: dinner3,
    },
  ];

  // DESSERT
  const dessertItems = [
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$14",
      img: dessert1,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$10",
      img: dessert2,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$12",
      img: dessert3,
    },
  ];

  // WINE
  const wineItems = [
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$40",
      img: wine1,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$35",
      img: wine2,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$38",
      img: wine3,
    },
  ];

  // DRINK & TEA
  const drinkTeaItems = [
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$8",
      img: tea1,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$10",
      img: tea2,
    },
    {
      name: "Beef Roast",
      source: "Source",
      details: "Meat, Potatoes, Rice",
      source2: "Tomatoe",
      price: "$9",
      img: tea3,
    },
  ];

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
      {/* ABOUT BANNER SECTION */}
      <div className="about1div">
        <section
          className="firstsection"
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
            className="abouttextsection"
          >
            <div>
              <h1 className="aboutpageheading text-center">Menu</h1>
              <div className="collapseone">
                <h3
                  className="fs-6 text-white backtohome"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <Link
                    to="/Home"
                    className="text-decoration-none text-white"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      textDecoration: "none",
                    }}
                  >
                    HOME <span><FaChevronRight size={20} /></span>
                  </Link>
                  <span style={{ marginLeft: "8px" }}>MENU</span>
                  <span
                    className="fs-5 fw-bold"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FaChevronRight size={20} />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MENU ITEMS SECTION */}
      <section className="text-center">
        <div className="text-center" style={{ marginTop: "100px" }}>
          <h1 className="re specialties heading">Specialties</h1>
          <h1 className="re2 ourmenuheading">Our Menu</h1>
          <div style={{ marginTop: "50px" }}>
            {/* ROW 1 - Breakfast, Lunch, Dinner */}
            <div
              className="Row bg-white gx-4 gy-3"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <MenuCard title="Breakfast" data={breakfastItems} />
              <MenuCard title="Lunch" data={lunchItems} />
              <MenuCard title="Dinner" data={dinnerItems} />
            </div>

            {/* ROW 2 - Dessert, Wine, Drink & Tea */}
            <div
              className="Row bg-white gx-4 gy-3"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <MenuCard title="Dessert" data={dessertItems} />
              <MenuCard title="Wine" data={wineItems} />
              <MenuCard title="Drink & Tea" data={drinkTeaItems} />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <div className="p-3 menusectionone" style={{ width: "100%", background: "#E52B33", display: "flex", justifyContent: "center", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          <form 
            className="text-center menusectionform"
            style={{ marginRight: "0", fontSize: "14px" }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-white text-center mt-5 menusectionh1" style={{ fontSize: "22px", marginRight: "0", marginBottom: "40px" }}>
              Book Your Table
            </h1>

            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
              {/* Name Input */}
              <input
                type="text"
                id="nameInput"
                className="text-white p-2 py-2 px-2 menusectioninputname"
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
                className="text-white p-2 py-2 px-2 menusectioninputemail"
                title="Please enter a valid email ending with .com"
                required
                placeholder="Email"
                style={{ width: "280px" }}
              />

              {/* Phone Input */}
              <input
                type="tel"
                id="phoneInput"
                className="text-white p-2 py-2 px-2 menusectioninputphone"
                pattern="[0-9]{11}"
                title="Please enter an 11-digit phone number"
                required
                placeholder="Phone"
                style={{ width: "280px" }}
              />
            </div>

            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
              {/* Check-in Date Picker */}
              <div className="position-relative menusectioninputdatediv" style={{ width: "280px" }}>
                <div className="d-flex align-items-center position-relative menusectioninputdatedivsecond" style={{ width: "100%" }}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Check in"
                    className="text-white p-2 pe-5 px-2 datepicker-input menusectioninputdate"
                    minDate={new Date()}
                    style={{ flex: 1, width: "100%" }}
                  />
                  <FaRegCalendarAlt className="newicon menusectioninputdateicon"
                    style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none" }}
                  />
                </div>
                {errors.date && <p className="error-text menusectionerror-text">{errors.date}</p>}
              </div>

              {/* Time Picker */}
              <div className="position-relative menusectioninputtimediv" style={{ width: "280px" }}>
                <div className="d-flex align-items-center position-relative menusectioninputtimedivsecond" style={{ width: "100%" }}>
                  <DatePicker
                    selected={startTime}
                    onChange={(time) => setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select time"
                    className="text-white p-2 pe-5 px-2 datepicker-input menusectioninputtime"
                    minTime={
                      startDate && startDate.toDateString() === new Date().toDateString()
                        ? new Date()
                        : new Date().setHours(9, 0)
                    }
                    maxTime={new Date().setHours(22, 0)}
                    style={{ flex: 1, width: "100%" }}
                  />
                  <FaRegClock className="newicon menusectioninputtimeicon"
                    style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none", fontSize: "16px" }}
                  />
                </div>
                {errors.time && <p className="error-text menusectionerror-text2">{errors.time}</p>}
              </div>

              {/* Guests Select */}
              <div className="position-relative menusectioninputguestdiv" style={{ width: "280px" }}>
                <div className="d-flex align-items-center position-relative menusectioninputguestdivsecond" style={{ width: "100%" }}>
                  <select
                    className="text-white p-2 px-2 datepicker-input menusectioninputguest"
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
                    <option value="" disabled className='menusectioninputguestoption'>Guests</option>
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i + 1} value={i + 1} className="text-dark">{i + 1} Guest{i > 0 ? 's' : ''}</option>
                    ))}
                  </select>
                  <TbTriangleInverted className="newicon menusectioninputguesticon"
                    style={{ position: "absolute", right: "10px", color: "white", pointerEvents: "none", fontSize: "16px" }}
                  />
                </div>
                {errors.guests && <p className="error-text menusectionerror-text3">{errors.guests}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button id="sumitbutton" type="submit" className="mt-4 btn btn-outline-light menusectionsubmitbutton" style={{ width: "auto", padding: "10px 40px" }}>
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
    </>
  );
};

export default Menu;