import { CiTwitter } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

import React from 'react'
import logo from "../assets/logo.png"
import emailicon from "../assets/emailicon.png"
import phoneicon from "../assets/phoneicon.png"
import ticon from "../assets/ticon.png"
import ficon from "../assets/ficon.png"
import icon from "../assets/icon.png"
const Footer = () => {
  return (
   <>
   <footer>
    <div className="row justify-content-center row3" >
        <div className="col-1 col12">
            <img src={logo} alt="" className='footerlogo mt-3' style={{width: "200px"}} />
            <p className='text-justify ms-4 mt-2'>Crafted dining solutions that keep your cravings running smoothly.</p>
        </div>
        <div className="col-1 col12">
            <div className='d-flex' style={{gap: "52px",marginTop: "100px", marginLeft: "-21px"}}>
                <a href="" className='bikulnewone' style={{textDecoration: "none", color: "black", gap: "10px"}}>Home 
                 
                </a>
                <a href="" className='bikulnewone' style={{textDecoration: "none", color: "black",}}>About</a>
                <a href="" className='bikulnewone' style={{textDecoration: "none", color: "black",}}>Chef</a>
                <a href="" className='bikulnewone' style={{textDecoration: "none", color: "black",}}>Menu</a>
                <a href="" className='bikulnewone' style={{textDecoration: "none", color: "black",}}>Reservation</a>
                <a href="" className='bikulnewone' style={{textDecoration: "none", color: "black",}}>Contact</a>
            </div>
            <div className='d-flex gap-6 justify-content-center' style={{marginTop: "20px", marginLeft: "91px"}}>
                <div className='d-flex gap-2'>
                <img src={emailicon} alt=""  />
<a href="#" className='mt-1'  style={{textDecoration: "none", color: "black",}}>falvoura44@gmail.com</a>
{/* <span className='mt-1'>|</span> */}
                </div>   
<div className='d-flex gap-2'> 
<img src={phoneicon} alt="" />
<a href="#" className='mt-1' style={{textDecoration: "none", color: "black",}}>+923152453522</a>

</div>
            </div>
        </div>
    <hr className="footerhr" />
    <div className='d-flex justify-content-between'>
<div className='d-flex gap-3 socailmediaicon' style={{marginLeft: "89px"}}>
    <div className="text-center" style={{width: "30px", height: "30px", backgroundColor: "#e52b34", borderRadius: "50%"}}>
        <a href="" style={{textDecoration: "none", color: "white",}}>
            
<FiTwitter className="text-center mt-1" />
            </a>    
    </div>
    <div className="text-center" style={{width: "30px", height: "30px", backgroundColor: "#e52b34", borderRadius: "50%"}}>
{/* <FiTwitter className="text-center mt-1" /> */}
        <a href="" style={{textDecoration: "none", color: "white",}}>

<LuFacebook className="mt-1" />
</a>
    </div>
    <div className="text-center" style={{width: "30px", height: "30px", backgroundColor: "#e52b34", borderRadius: "50%"}}>
{/* <FiTwitter className="text-center mt-1" /> */}
        <a href="" style={{textDecoration: "none", color: "white",}}>

<FaInstagram className="mt-1" />
</a>
    </div>

</div>
<div>
<p style={{marginRight: "84px"}}>Copyright © 2025 All rights reserved Flavoura</p>
</div>
    </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
 