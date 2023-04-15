import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qjv19rf', 'template_v49rfy7', form.current, 'K8Xaq-p8Wseogtc3Y')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className='contacttitle'>
          <h1> Contact Us!</h1>
        </div>
        <div className='contactsentence'>
          <h3> Further inquiries? Get in contact with one of our customer support representatives! </h3>
        </div>
        <div className='contact__container2'>

        <div className='contactform'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder=' Your Name' required />
            <input type='email' name='email' placeholder=' Your Email' required/>
            <textarea name='message' rows='7'placeholder='Your Message' required></textarea>
            <button type='submit' className='btnmessage'> Send Message</button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact