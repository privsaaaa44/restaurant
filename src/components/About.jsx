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

// Data for stats
const stats = [
  { label: "Tasty Dishes", value: 100 },
  { label: "Dishes Served", value: 4000 },
  { label: "Restaurants", value: 10 },
  { label: "Happy Customers", value: 10000 },
];

// AnimatedCounter component
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const [countStarted, setCountStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countStarted) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16); // approx. 60fps

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [countStarted, value]);

  return <span ref={ref}>{count}</span>;
};

// About section
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
              <h1 className='aboutpageheading text-center'>About</h1>
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
                  ABOUT
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
      </div>

      <div className='timelinediv'>
        <section
          className="position-relative absoluteimg timelinsection"
          style={{
            backgroundImage: `url(${abs1})`,
            backgroundSize: "cover",
            backgroundPosition: "50% -116.5px",
            height: "265px",
            width: "100%",
            marginTop: "422px",
          }}
        >
          <div className="overlay timelineoverlay"></div>

          <div
            className="sb1mg aboutsectiontext"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              color: "white",
              height: "265px",
              textAlign: "center",
              width: "100%",
            }}
          >
      {/* Example Stats Section with Animated Counters */}
      <div className="stats-section text-center my-5">
        {stats.map((stat, index) => (
          <div key={index} className="mt-4 p-2 d-1" style={{ display: 'inline-block', margin: '0 20px' }}>
            <h2 className="fs-1"><AnimatedCounter value={stat.value} /></h2>
            <p className="text-white fs-6">{stat.label}</p>
          </div>
        ))}
      </div>
            {/* Overlay content if needed */}
          </div>
        </section>
      </div>


      <style>
        {`
          footer {
            // margin-top: 481px !important;
          }
            .stats-section.text-center.my-5 {
    display: flex;
    justify-content: center;
    gap: 72px !important;
}
    .lastdivabout {
  margin-top: 0px !important;
}
        `}
      </style>
                 <div className="lastdiv lastdivabout">
                        <section className="lastsection" >
                        <div  style={{backgroundImage: `url(${l1})`}} className="lastsectionimg" >
                         <h1 className="text-white fw-bold">We Make Delicious & Nutritious Food</h1>
                         <button className="btn btn-outline-light lastbutton mt-1">Book a Table Now</button>
                        </div>
                        </section>
                      </div>
                              <div>
                                              
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
    </>
  );
};

export default About;
