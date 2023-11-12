import React, { useRef } from 'react'
import "./Contact.css"
import { Typography } from '@mui/material';
import FacebookIcon from "../../assets/facebook.png"
import InstagramIcon from "../../assets/instagram.png"
import  LinkedIn  from '../../assets/whatsapp.png';
import  WhatsApp  from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ud16i8w', 'template_hr4vaps', form.current, 'GcMklfWfJUKMI5z0B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
   
  return (
    <section id='Contact'>
        <div className="contactContainer">
        <form className="contactContainerForm" ref={form} onSubmit={sendEmail} >
          <Typography variant="h2" className='contactHeading'>Contact Me</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            name="from_name"
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="from_email"
           
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            name='message'
          ></textarea>
          <button className='subButton' type="submit" value="Send">Send</button>
           
          
     <div className="links">
        <a href="https://www.facebook.com/hussnain.hafeez.19/" target="black"><img src={FacebookIcon} alt="" className="link" /></a>
        <a href="https://www.instagram.com/mhussnainhafeez_19/" target="black"><img src={InstagramIcon} alt="" className="link" /></a>
        <a href="/"><img src={WhatsApp} alt="" className="link" /></a>
        <a href="https://www.linkedin.com/in/m-hussnain-hafeez-5b1806227/" target='blank'><img src={LinkedIn} alt="" className="link" /></a>
     </div>
        </form>
      </div>
      
    </section>
  )
}

export default Contact
