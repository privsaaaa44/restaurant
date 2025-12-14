import errorimage from "../assets/errorimage.jpg"
import AOS from "aos";
            import "aos/dist/aos.css";
            import { useEffect } from "react";
            import { TbTriangleInverted } from "react-icons/tb";
            import { FcBookmark } from "react-icons/fc";
            import lunch2 from "../assets/lunch2.jpg"
            import lunch3 from "../assets/lunch3.jpg"
            import dinner1 from "../assets/dinner1.jpg"
            import dinner2 from "../assets/dinner2.jpg"
            import dinner3 from "../assets/dinner3.jpg"
            import dessert1 from "../assets/dessert1.jpg"
            import dessert2 from "../assets/dessert2.jpg"
            import dessert3 from "../assets/dessert3.jpg"
            import wine1 from "../assets/wine1.jpg"
            import wine2 from "../assets/wine2.jpg"
            import wine3 from "../assets/wine3.jpg"
            import tea1 from "../assets/tea1.jpg"
            import tea2 from "../assets/tea2.jpg"
            import tea3 from "../assets/tea3.jpg"
            import l1 from "../assets/l1.png"
            import i1 from "../assets/i1.png"
            import i2 from "../assets/i2.png"
            import chef4 from "../assets/chef4.png"
            import React, { useState } from "react";
            import { Carousel } from "react-bootstrap";
            import B1 from "../assets/B1.jpg";
            import B2 from "../assets/B2.jpg";
            import "../App.css";
            import chef2 from "../assets/chef2.png"
            import chef3 from "../assets/chef3.png"
            import {
              MDBCarousel,
              MDBCarouselItem
            } from "mdb-react-ui-kit";
            import { MDBBtn } from 'mdb-react-ui-kit';

            import "../index.css";
            import DatePicker from "react-datepicker";
            import "react-datepicker/dist/react-datepicker.css";
            import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
            import chef from "../assets/chef.png"
            // import sb1 from "../assets/sb1.jpg"
            // import sb1 from "../assets/sb1.jpg"
            import Container from 'react-bootstrap/Container';
            import Row from 'react-bootstrap/Row';
            import Col from 'react-bootstrap/Col';
            import breakfast1 from "../assets/breakfast1.jpg"
            import breadicon from "../assets/breadicon.png"
            import foodicon from "../assets/foodicon.png"
            import breakfast2 from "../assets/breakfast2.jpg"
            import breakfast3 from "../assets/breakfast3.jpg"
            import lunch1 from "../assets/lunch1.jpg"
            import sb2 from "../assets/sb2.jpg"
            import chef1 from "../assets/chef1.png"


            const Home = () => {

              const [activeIndex, setActiveIndex] = useState(0);

              const [startDate, setStartDate] = useState(null);
              const [startTime, setStartTime] = useState(null);
              const [guests, setGuests] = useState("");
              const [showPopup, setShowPopup] = useState(false);
              const [bookingDetails, setBookingDetails] = useState({});
              const [errors, setErrors] = useState({ date: "", time: "", guests: "" });
            useEffect(() => {
              AOS.init({
                duration: 500, // animation duration
                easing: "ease-in-out", // animation easing
                once: true, // animation happens only once
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
                img: breakfast1
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$10",
                img: breakfast2
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$8",
                img: breakfast3
              }
            ];

            // LUNCH
            const lunchItems = [
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$25",
                img: lunch1
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$18",
                img: lunch2
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$32",
                img: lunch3
              }
            ];

            // DINNER
            const dinnerItems = [
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$28",
                img: dinner1
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$24",
                img: dinner2
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$35",
                img: dinner3
              }
            ];

            // DESSERT
            const dessertItems = [
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$14",
                img: dessert1
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$10",
                img: dessert2
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$12",
                img: dessert3
              }
            ];

            // WINE
            const wineItems = [
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$40",
                img: wine1
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$35",
                img: wine2
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$38",
                img: wine3
              }
            ];

            // DRINK & TEA
            const drinkTeaItems = [
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$8",
                img: tea1
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$10",
                img: tea2
              },
              {
                name: "Beef Roast",
                source: "Source",
                details: "Meat, Potatoes, Rice",
                source2: "Tomatoe",
                price: "$9",
                img: tea3
              }
            ];



            // const lunchItems = [
            //   {
            //     name: "Beef Roast",
            //     source: "Source",
            //     details: "Meat, Potatoes, Rice, ",
            //     source2: "Tomatoe",
            //     price: "$29",
            //     img1: lunch1
            //   },
            //   {
            //     name: "Beef Roast",
            //     source: "Source",
            //     details: "Meat, Potatoes, Rice,",
            //     source2: "Tomatoe",
            //     price: "$30",
            //     img: breakfast2
            //   },
            //   {
            //   name: "Beef Roast",
            //     source: "Source",
            //     details: "Meat, Potatoes, Rice, ",
            //     source2: "Tomatoe",
            //     price: "$29",
            //     img: breakfast3
            //   }
            // ];



            const handleSubmit = (e) => {
              e.preventDefault();

              // Email validation
              const email = document.getElementById("emailInput").value;
              if (!email.endsWith(".com")) {
                alert("Email must end with .com");
                return;
              }
              
              // Initialize validation
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

              // Prepare booking object
              const booking = {
                name: document.getElementById("nameInput").value,
                email,
                phone: document.getElementById("phoneInput").value,
                date: startDate.toLocaleDateString(),
                time: startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                guests,
              };

              // Save booking in state
              setBookingDetails(booking);

              // Save booking to localStorage
              localStorage.setItem("lastBooking", JSON.stringify(booking));
              console.log("Booking saved:", booking); // Debug

              // Show popup
              setShowPopup(true);

              // Optionally, reset inputs (without clearing localStorage)
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
                <div>
              <section  id="home-banner">
                  <Carousel fade controls={false} indicators={true} >
                    {/* Slide 1 */}
                    <Carousel.Item>
                      <div className="carousel-image-wrapper">
                        <img src={B1} className="d-block w-100 home-hero-img" alt="slide1" />
                        <div className="carousel-overlay"></div>
                  <Carousel.Caption className="hero-caption">
              <div data-aos="fade-up">
                <h1 className="hero-title animate-slide-in">Cooking Since</h1>
                <div className="food-section text-center my-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="line"></div>
                    <span className="px-3 food-title">1951</span>
                    <div className="line"></div>
                  </div>
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
              <div data-aos="fade-up">
                <h1 className="hero-title animate-slide-in">Best Quality</h1>
                <div className="food-section text-center my-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="line"></div>
                    <span className="px-3 food-title">FOOD</span>
                    <div className="line"></div>
                  </div>
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


                  <div>
<section
  className="position-relative absoluteimg"
  style={{
    backgroundImage: `url(${errorimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "100%"
  }}
>
              <div className="overlay"></div>

              <div
              className="sb1mg"
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
                <h1 className="sb1h1" style={{ textTransform: "uppercase", fontSize: "16px", letterSpacing: "5px", fontWeight: "700" }}>
                  Now Bookings
                </h1>
                <h1 className="sb1h11" style={{fontWeight: "700", fontSize: "40px"}}>Private Dinners & Happy Hours</h1>
              </div>
            </section>
                  </div>
                  <div>
                    <section className="text-center">
                      <div className="text-center" style={{marginTop: "100px"}}>
                      <h1 className="re specialties heading">Specialties</h1>
                      <h1 className="re2  ourmenuheading">Our Menu</h1>
            <div style={{ marginTop: "50px" }}>

            {/* ROW 1 */}
            <div
              className="Row bg-white gx-4 gy-3"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px"
              }}
            >
              {[1, 2, 3].map((col, colIndex) => {
                const mapping = [
                  { title: "Breakfast", data: breakfastItems },
                  { title: "Lunch", data: lunchItems },
                  { title: "Dinner", data: dinnerItems }
                ];

                const { title, data } = mapping[colIndex];

                return (
                  <div
                    key={colIndex}
                    className="menu-item p-2 Col"
                    style={{
                      background: "#fcfcfc",
                      borderRadius: "2px",
                      padding: "20px",
                      margin: "0 20px"
                    }}
                      data-aos="fade-up"
              data-aos-delay={colIndex * 200} 
                  >
                    <h1
                      className="mt-4"
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        marginBottom: "2em"
                      }}
                    >
                      {title}
                    </h1>

                    {data.map((item, index) => (
                      <div key={index} className="menu-item2" style={{ marginBottom: "1rem" }}>
                        <div className="d-flex ing">
                          <img src={item.img} alt={item.name} className="img111" />

                          <div style={{ marginLeft: "10px", flexGrow: 1 }}>
                            <h3 className="jhshfbg" style={{ fontSize: "17px", fontWeight: "500" }}>
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

                          <p className="priccepara" style={{ color: "#e52b34", fontSize: "20px", fontWeight: "600" }}>
                            {item.price}
                          </p>
                        </div>

                        {index < 2 && <hr className="firsthr" />}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>



              {/* ROW 2 – SAME STRUCTURE */}
            <div
              className="Row bg-white gx-4 gy-3"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px"
              }}
              
            >
              {[1, 2, 3].map((col, colIndex) => {
                const mapping = [
                  { title: "Dessert", data: dessertItems },
                  { title: "Wine", data: wineItems },
                  { title: "Drink & Tea", data: drinkTeaItems }
                ];

                const { title, data } = mapping[colIndex];

                return (
                  <div
                    key={colIndex}
                    className="menu-item p-2 Col"
                    style={{
                      background: "#fcfcfc",
                      borderRadius: "2px",
                      padding: "20px",
                      margin: "0 20px"
                    }}
                      data-aos="fade-up"
                  data-aos-delay={colIndex * 200}
                  >
                    <h1
                      className="mt-4"
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        marginBottom: "2em"
                      }}
                    > 
                      {title}
                    </h1>

                    {data.map((item, index) => (
                      <div key={index} className="menu-item2" style={{ marginBottom: "1rem" }}>
                        <div className="d-flex ing">
                          <img src={item.img} alt={item.name} className="img111" />

                          <div style={{ marginLeft: "10px", flexGrow: 1 }}>
                            <h3 className="jhshfbg" style={{ fontSize: "17px", fontWeight: "500" }}>
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

                          <p className="priccepara" style={{ color: "#e52b34", fontSize: "20px", fontWeight: "600" }}>
                            {item.price}
                          </p>
                        </div>

                        {index < 2 && <hr className="firsthr" />}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>


            </div>


                        </div>
            
                    </section>
                  </div>
                        <div>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
            <section
              className="position-relative absoluteimg newone"
              style={{
                backgroundImage: `url(${sb2})`,
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
                <div className="contenb" data-aos="fade-up" data-aos-delay="200">
            <h1 className="re testominalheading">Testimony</h1>
                      <h1 className="re2 fw-bold happycustomerheading">Happy Customer</h1>         
                      </div>
            <br />
            <br />
                  <div className="row text-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-md-12">
                      {/* Carousel wrapper */}
                      <div
                        id="carouselBasicExample"
                        className="carousel slide carousel-dark"
                        data-mdb-ride="carousel"
                        data-mdb-carousel-init
                      >
                        {/* Inner */}
                        <div className="carousel-inner">
                          {/* Single item */}
                          <div className="carousel-item active">
                            <p className="lead font-italic mx-4 mx-md-5 text-justify">
                          Far far away, behind the word mountains, far from the countries
                          <br /> Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <div className="mt-5 mb-4">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle img-fluid shadow-1-strong"
                                alt="sample image"
                                width="100"
                                height="100"
                              />
                            </div>
                  <p className="text-white fs-4">- Teresa May</p>
                            <p className="text-secondary fs-6">Customer</p>
                          </div>

                          {/* Single item */}
                          <div className="carousel-item">
                              <p className="lead font-italic mx-4 mx-md-5 text-justify">
                          Far far away, behind the word mountains, far from the countries
                          <br /> Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <div className="mt-5 mb-4">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                                className="rounded-circle img-fluid shadow-1-strong"
                                alt="sample image"
                                width="100"
                                height="100"
                              />
                            </div>
                            <p className="text-white fs-4">- Teresa May</p>
                            <p className="text-secondary fs-6">Customer</p>
                          </div>

                          {/* Single item */}
                          <div className="carousel-item">
                          <p className="lead font-italic mx-4 mx-md-5 text-justify">
                          Far far away, behind the word mountains, far from the countries
                          <br /> Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <div className="mt-5 mb-4">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                className="rounded-circle img-fluid shadow-1-strong"
                                alt="sample image"
                                width="100"
                                height="100"
                              />
                            </div>
                              <p className="text-white fs-4">- Teresa May</p>
                            <p className="text-secondary fs-6">Customer</p>
                          </div>
                        </div>
                        {/* Inner */}

                        {/* Controls */}
                        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev" data-mdb-button-init>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next" data-mdb-button-init>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
                      </div>
                      {/* Carousel wrapper */}
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
         
            <div>
              <section className="oursecretssection">
                    <div className="row row2">
                      <div className="i1img" style={{ backgroundImage: `url(${i1})` }}></div>
                      <div className="i2img" style={{backgroundImage: `url(${i2})`}}></div>
                      <div className="icontent ms-5 mt-5" style={{width: "548px"}} data-aos="fade-up" data-aos-delay="200">
                          <h1 className="re thisisoursecretsheading">This is our secrets</h1>
                      <h1 className="re2 perfectingredientsheading">Perfect Ingredients</h1>
                      <p className="helloiamfirstone text-justify lh-lg text-secondary w-auto secretpara" >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <button className="btn btn-outline-danger newbtn secretbutton">
                      Learn More
                    </button>
                      </div>
                    </div>
              
              </section>
            </div>
                <div className="lastdiv">
                  <section className="lastsection" >
                  <div  style={{backgroundImage: `url(${l1})`}} className="lastsectionimg" >
                   <h1 className="text-white fw-bold">We Make Delicious & Nutritious Food</h1>
                   <button className="btn btn-outline-light lastbutton mt-1">Book a Table Now</button>
                  </div>
                  </section>
                </div>
                </>
                
              );
            };

            export default Home;
