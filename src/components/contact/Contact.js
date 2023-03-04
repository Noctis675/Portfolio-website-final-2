import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { sender } from '../../Store';
import './Contact.css'
import AOS from "aos";
import "aos/dist/aos.css";



const Contact = () => {
 useEffect (()=>{
  AOS.init ()
 },[]
 
 )



  let { mode } = useContext(sender)
  let { register, handleSubmit, formState: { errors }, reset } = useForm()


  let contactForm = (data, e) => {
    e.preventDefault()
    console.log(data);
    axios.post("https://portfolio-website-9902d-default-rtdb.firebaseio.com/form.json", data)
    reset()
  }


  return (
    <>
    <section id="contact">

      <div className={`container-fluid  bg-${mode ? "dark" : "light"}`}>
        <br />
        <div className="row contact">
          <div className="col-md-6  text-center text-warning py-5"  >
            <br /><br />
            <h2>Contact Me </h2>
            <br /><br />

            <img src="Images\toppng.com-contact-form-envelope-icon-png-transparent-1397x921.png" alt="" width="25%" height="" />

            <h5 className="mt-5">Follow Me On</h5>
            <ul className="mt-4 d-flex flex-row justify-content-center" style={{ listStyle: "none", paddingRight: "43px" }}>
            <li className='px-3' style={{ fontSize: "50px" }}> <a href=" https://www.facebook.com/ "><FaFacebookSquare/></a> 
              </li>
              <li className='px-3' style={{ fontSize: "50px" }}>
                <a href="https://twitter.com/"><FaTwitterSquare /></a>
              </li>
              <li className='px-3' style={{ fontSize: "50px" }}>
                <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
              </li>
              <li className='px-3' style={{ fontSize: "50px" }}>
              <a href="https://github.com/"> <FaGithubSquare /></a> 
              </li>

              </ul>
          </div>

          <div className="col-md-6 mt-1  ">
            <br /><br />
            <form data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500" action="" style={{ width: "100%" }} onSubmit={handleSubmit(contactForm)}>

              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label text-warning"> Your Name</label>
                <input  type="name" className="form-control" name='Name' {...register("Name", { required: "Name is required!" })} id="" />
                <p className='text-danger'>{errors.Name?.message}</p>

              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label text-warning"> Your Email</label>

                <input type="email" className="form-control" name='Email' {...register("Email", { required: "Email is required!", pattern: { value:/^\S+@\S+$/i, message:"This is not valid email",},})} id="" />
                <p className='text-danger'>{errors.Email?.message}</p>

              </div>

              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="check" className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label text-warning">Your Phone No</label>
                <input type="number" className="form-control" name='Phone' {...register("Phone", { required: "Phone is required!", minLength: { value: 10, message: "minimum 10 digits required!" }, maxLength: { value: 10, message: "maximum 10 digits required!" } })} />
                <p className='text-danger'>{errors.Phone?.message}</p>
              </div>

              <div className='mb-3'>
                <label htmlFor="message" className='form-label text-warning' >Any Query</label>
                
                <textarea type="message"  rows="5" className='form-control ' ></textarea>
                
                 
              </div>
                       <br />
              <button type="submit" className="btn btn-secondary btn-outline-warning">Submit</button>
            </form>
                  <br />
          </div>
        </div>

      </div>
      </section>
              
      <footer className="bg-dark text-center text-lg ">

        <div className="text-center p-3">

          <h6 className="text-light" href="">  Copyright <span style={{ color: "burlywood" }}>© 2023 </span>SA. All Rights Reserved

          </h6>
          <h6 className="text-warning">  Designed By Sandip Aole </h6>
        </div>

      </footer>

              



              

          

     



    </>

  )
}



export default Contact










            