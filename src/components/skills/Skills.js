import React, { useContext, useEffect } from 'react'
import { sender } from '../../Store'
import './style.css'
import './skills.css'
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {
  useEffect(() => {
    AOS.init()
  }, []


  )



  let { mode } = useContext(sender)


  return (
    <>
      <div id='skills'>

        <div className={`container-fluid pt-4 bg-${mode ? "dark" : "light"}`}  >

          <br /><br />
          <h2 className='mx-auto' style={{ fontFamily: 'fantasy', textAlign: "center", textDecorationLine: "underline", color: "burlywood" }}>My Skills</h2>
          

          <div className={`row skills align-items-center text-${mode ? "light" : "dark"}`}>
            <div className="col-lg-4  text-center  rounded-lg shadow-lg p-5 rounded-5" data-aos="flip-left">

              <div className="circle mx-auto aqua">

                <div className="inner-circle">89% </div>
              </div>

              <br />
              <h1 style={{ fontVariant: "all-small-caps", color: "", textShadow: " 0 0 2px blue" }}>HTML & CSS</h1>
            </div>

            <div className="col-lg-4  text-center bg-brown rounded-lg shadow-lg p-5 rounded-5" data-aos="flip-left">

              <div className="circle pink mx-auto">
                <div className="inner-circle">48%</div>
              </div>
              <br />
              <h1 style={{ fontVariant: "all-small-caps", color: "", textShadow: " 0 0 3px red" }}>Javascript</h1>
            </div>
            <div className="col-lg-4  text-center px-1 bg-brown rounded-lg shadow-lg p-5 rounded-5" data-aos="flip-left">
              <div className="circle gold mx-auto">
                <div className="inner-circle">80%</div>
              </div>
              <br />
              <h1 style={{ fontVariant: "all-small-caps", color: "", textShadow: " 0 0 3px gold" }}>BOOTSTRAP & REACT</h1>
            </div>
          </div>

        </div>
        </div>

</>
)
}






export default Skills


      


