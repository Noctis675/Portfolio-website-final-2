import React, { useContext } from 'react'
import { sender } from '../../Store'
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";
import './style.css'

const Navbar = () => {
  let {mode,setMode} =useContext (sender)
  


  return (
    <>
    <nav className={`fixed-top navbar navbar-expand-lg bg-${mode?"dark":"light"}`} >
  <div className="container-fluid   border-0 ">
  <a className="navbar-brand p-2" href="#"> <img src="Images\clipart2295440.png" alt="" width="100%" height="30px" style={{border:"1px solid blue",fontFamily:'serif',WebkitTextStroke:' 1px red',color:'Highlight',fontSize:'20px',marginBottom:"10px"}}></img> </a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " >
      
       <li className="nav-item">
        
          <a className="nav-link active text-warning " aria-current="page" href="#home">Home</a>
        </li>
        
        <li className="nav-item">
   
          <a className="nav-link active text-warning"  aria-current="page" href="#about">About</a>
          
        </li>
        
        <li className="nav-item">
        
          <a className="nav-link active text-warning" href="#skills">Skills</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active text-warning" href="#services">Services</a>
        </li>
        
        
        <li className="nav-item">
          <a className="nav-link active text-warning" href="#contact">Contact</a>
        </li>
      </ul>
      <div className="d-flex" role="search">
      <button style={{color:"blue"}}onClick={()=>setMode(!mode)} className={`border-0 bg-${mode?"dark":"light"}`}>{mode? <BsFillSunFill className='text-warning fs-3'/>:<BsFillMoonStarsFill className='fs-4'/>} </button>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar