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
                 duration: 500, // animation duration
                 easing: "ease-in-out", // animation easing
                 once: true, // animation happens only once
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
    p.lead.font-italic.mx-4.mx-md-5.text-justify {
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
}/* Extra small mobile (max-width: 360px) */
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

/* Timeline Section - Mobile Responsive Styles */
@media (max-width: 768px) {
  .timelinediv {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  section.position-relative.absoluteimg.timelinsection {
    height: auto !important;
    min-height: auto !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding: 50px 0 !important;
    background-size: cover !important;
    background-position: center !important;
  }

  .timelineoverlay {
    background-color: rgba(0, 0, 0, 0.7) !important;
  }

  .aboutsectiontext {
    position: relative !important;
    transform: none !important;
    top: auto !important;
    left: auto !important;
    height: auto !important;
    padding: 0 20px !important;
    margin: 0 !important;
  }

  .stats-section.text-center.my-5 {
    display: flex !important;
    flex-direction: column !important;
    gap: 40px !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .stats-section .d-1 {
    display: block !important;
    margin: 0 !important;
    width: 100% !important;
    padding: 0 !important;
  }

  .stats-section .d-1 h2 {
    font-size: 48px !important;
    margin-bottom: 8px !important;
    margin-top: 0 !important;
    color: white !important;
  }

  .stats-section .d-1 p {
    font-size: 16px !important;
    margin: 0 !important;
    color: white !important;
  }
}

/* Timeline Section - Small Mobile */
@media (max-width: 480px) {
  section.position-relative.absoluteimg.timelinsection {
    padding: 40px 0 !important;
  }

  .stats-section.text-center.my-5 {
    gap: 35px !important;
  }

  .stats-section .d-1 h2 {
    font-size: 42px !important;
  }

  .stats-section .d-1 p {
    font-size: 14px !important;
  }
}    `}
</style>  
    </>
  );
};

export default About;
