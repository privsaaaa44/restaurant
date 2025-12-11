import sb2 from '../assets/sb2.jpg';
import l1 from '../assets/l1.png';
import { FaChevronRight } from "react-icons/fa";
import React from "react";
import ab from '../assets/ab.jpg';
import { Link } from 'react-router-dom';
import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import abs1 from '../assets/abs1.jpg';
import { LuPhone } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { LuMapPin } from "react-icons/lu";


const Contact = () => {
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
               <h1 className='aboutpageheading text-center'>Contact us</h1>
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
                   Contact us
                   <span className='fs-5 fw-bold' style={{ display: 'flex', alignItems: 'center' }}>
                     <FaChevronRight size={20} />
                   </span>
                 </h3>
               </div>
             </div>
           </div>
         </section>
       </div>
 <div className='contactuscardsdiv' >
<h1 className="re text-center chefheading contactsectionheading">Contact Information</h1>  <section className='contactcardssection'>
<div className="row d-flex justify-content-center alignItems-center rowcontactcards">
 <h1 className="re2 fw-bold text-center masterchefheading">Connect with Us Easily</h1>

      <div
        className="col-12 col-sm-6 col-md-4 colcontactcard1"
        style={{
          backgroundColor: "#E52B34",
          color: "white",
          height: "150px",
          borderRadius: "10px",
          width: "300px !important",
          alignItems : "center",
        }}
      >
        <div className='alignItems-center text-center'>
        <LuPhone className='contactsectionicon fs-1 mt-4' />
        <h3 className='mt-2 fs-1'>Call Us</h3>
        <p className='fs-6 text-white'>Ask Our Expert Team</p>
        <a href="" className='text-decoration-none'><p className='text-white'>+92 302 267 4854</p></a>
        <a href="" className='text-decoration-none'><p className='text-white'>+92 302 267 4854</p></a>
</div>
      </div>

     <div
        className="col-12 col-sm-6 col-md-4 colcontactcard1"
        style={{
          backgroundColor: "#E52B34",
          color: "white",
          height: "150px",
          borderRadius: "10px",
          width: "300px !important",
          alignItems : "center",
        }}
      >
        <div className='alignItems-center text-center'>
        <CgMail className='contactsectionicon fs-1 mt-4' />
        <h3 className='mt-2  fs-1'>Email Us</h3>
        <p className='fs-6 text-white'>Send us your queries</p>
        <a href="" className='text-decoration-none'><p className='text-white'>infoflavora44@email.com</p></a>
        <a href="" className='text-decoration-none'><p className='text-white'>infoflavora44@email.com</p></a>
</div>
      </div>

       <div
        className="col-12 col-sm-6 col-md-4 colcontactcard1"
        style={{
          backgroundColor: "#E52B34",
          color: "white",
          height: "150px",
          borderRadius: "10px",
          width: "300px !important",
          alignItems : "center",
        }}
      >
        <div className='alignItems-center text-center'>
        <LuMapPin  className='contactsectionicon fs-1 mt-4' />
        <h3 className='mt-2 ms-3 fs-1'>Visit Us</h3>
        <p className='fs-6 text-white'>Ask Our Expert Team</p>
        <a href="" className='text-decoration-none'><p className='text-white'>Shop # 1, Shama Appartmet, Block 7 F.B Area, Karachi, 75950, Pakistan</p></a>
</div>
      </div>

    </div>
  </section>
</div>
<div>
  <section>

    <div className='d-flex justify-content-center'>
        <div
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1575019171455!2d67.0673732740705!3d24.926703842606077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff7b51555cb%3A0x571f64852f8ac168!2sFlavour-X%20Restaurant!5e0!3m2!1sen!2s!4v1765472188713!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      }}
      />
      <div>
        <h1>Contact Us</h1>
      </div>
      </div> 
  </section>
</div>
<style>
  {
    `
    .rowcontactcards {
  gap: 20px;
}

.colcontactcard1,
.colcontactcard2,
.colcontactcard3 {
  flex: 0 0 300px !important;
  max-width: 300px !important;
  // padding: 30px !important;
  height: 250px !important;
  align-items: center; 
  justify-content: center;
  border: 1px solid rgba(240, 34, 27, 1);
}
  .row.d-flex.justify-content-center.alignItems-center.rowcontactcards {
    gap: 13px !important;
}
    .col-12.col-sm-6.col-md-4.colcontactcard1, .col-12.col-sm-6.col-md-4.colcontactcard2, .col-12.col-sm-6.col-md-4.colcontactcard3 {
    border-radius: 10px !important;
}
.contactuscardsdiv {
padding-top: 100px;
padding-bottom: 100px;
background-color: #FAFAFA;
}    
`
  }
</style>
    </>
  );
};

export default Contact;
