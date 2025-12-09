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


const Menu = () => {
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
                 <h1 className='aboutpageheading text-center'>Menu</h1>
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
                    MENU
                     <span className='fs-5 fw-bold' style={{ display: 'flex', alignItems: 'center' }}>
                       <FaChevronRight size={20} />
                     </span>
                   </h3>
                 </div>
               </div>
             </div>
           </section>
         </div>
         
   </>
  )
}

export default Menu
