import React from 'react'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
   <>
   <footer>
    <div className="row justify-content-center">
        <div className="col-1">
            <img src={logo} alt="" className='footerlogo' style={{width: "200px"}} />
        </div>
        <div className="col-1">
            <div className='d-flex' style={{gap: "42px"}}>
                <a href="" className='d-flex' style={{textDecoration: "none", color: "black", gap: "10px"}}>Home
                    <p >|</p>
                </a>
                <a href="" style={{textDecoration: "none", color: "black",}}>About</a>
                <a href="" style={{textDecoration: "none", color: "black",}}>Chef</a>
                <a href="" style={{textDecoration: "none", color: "black",}}>Menu</a>
                <a href="" style={{textDecoration: "none", color: "black",}}>Reservation</a>
                <a href="" style={{textDecoration: "none", color: "black",}}>Contact</a>
            </div>
        </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
