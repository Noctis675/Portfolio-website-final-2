import { hover } from '@testing-library/user-event/dist/hover'
import React, { useContext } from 'react'

import { sender } from '../../Store'
import './Home.css'



const Home = () => {
    let { mode } = useContext(sender)




    return (
        <>
            <section id="home">
                <div className={`container-fluid bg-${mode ? "dark" : "light"}`} >
                    <div className="row home align-items-center">
                               
                           

                        <div className="col-md-12">

                            
                                Hello, I'm <span className="auto-input" style={{ color: "red" }}> <strong style={{ WebkitTextStroke: ' 1px black' }}> Sandip Aole</strong></span>
                                <br />
                                A Front-End Developer <br />
                                <a className="btn bg-success text-light rounded-5 px-4" href="#contact" type="submit">Get in Touch</a>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            </>
    )}

   



export default Home
































