import React,{useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lk22sdf', 'template_xxkk40l', form.current, {
        publicKey: 'VdmvD6zO_EuJ9kzhp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Mail sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  
  return (
    <section className='contact'>
        <div id='title'>
        <h1>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input type='text' className='names' placeholder='Your Name' name="from_name"></input>
            <input type='email' className='email' placeholder='Your Email' name="from_email"></input>
            <textarea className='msg' name='message' placeholder='Your Message' rows={5}></textarea>
            <button type='submit' className='submitBtn' value='Send'>Submit</button>
            
        </form>
  
        </div>
    </section>
  )
}

export default Contact
