import React, { useEffect } from 'react'
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init()
  }, []

  )

  let bio = [
    {
      id: 1,
      title: " Sandip Aole",
      heading: "Name:"
    },
    {
      id: 2,
      title: " chat@sandipaole@gmailcom",
      heading: "Email:"
    },
    {
      id: 3,
      title: "8765339853",
      heading: "Phone:"
    },
    {
      id: 4,
      title: "02/02/1995",
      heading: "DOB:"
    }
  ]
  return (
    <>
      <section id="about">
        <div className="container-fluid " >


          <div className="row about align-items-center ">
            <div className="col-md-6  img">
<br /><br />
              <img data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='rounded-circle border border-warning border-3 ' style={{marginLeft:"10%"}} src="Images\background.png" alt="" width='80%' height='' />
            </div>

            <div className="col-md-6  py-5 shadow p-5 rounded-5">

              <h2 className='mx-auto' style={{ fontFamily: 'fantasy', textAlign: "center", textDecorationLine: "underline" }}>About Me</h2>
              <p><strong className="fs-5" style={{ fontFamily: 'serif' }}></strong>Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, JavaScript, CSS, Bootstrap & React. Strong background in project management and customer relations.</p>
              {
                bio.map((e) => {
                  return (
                    <div key={e.id}>
                      <label htmlFor="heading" style={{ color: "white" }} >{e.heading}</label>

                      <br />
                      <label htmlFor="title">{e.title}</label>
                      <hr />
                    </div>

                  )
                }
                )
              }
               <br />
              <a className="btn bg-warning text-dark rounded-5 px-3" href="resume\Front-End Fundamentals_ A practical guide to front-end web development. ( PDFDrive ).pdf" download type="submit">Download CV</a>
            </div>
          </div>
        </div>

      </section>


    </>

  )
}

export default About


               
              