import React from 'react';
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import { Player } from '@lottiefiles/react-lottie-player';
import emailIcon from "./email-icon.json.json";


import Lottie from "lottie-react"

export default function Contact() {
    const [state, handleSubmit] = useForm("mdkljqov");
  
  return (
    <section className='contact'>
    <h1 className='title'>
      <span className='icon-envelope'></span>
      Contact Us
    </h1>
    <p className='sub-title'>Contact us for more information and Get notified when I publish something new</p>
    <div className='flex' style={{justifyContent:"space-between"}}>
      <form onSubmit={handleSubmit}>
   <div >
     <label htmlFor='email'> Email address:</label>
    <input required type='email' id="email" name="email" />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
   
   </div>
    <div className='flex' style={{marginTop:"24px"}}>
       <label htmlFor='message'> Your Message:</label>
   <textarea style={{width:"100px"}} required  id="message" name='message'></textarea>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
   <button className='Submit' disabled={state.submitting} type="submit">
    {state.submitting ? "submiting..." :"submit"}
   </button>
     {state.succeeded && (<h1 style={{fontSize:"16px", marginTop:"1.7rem"}}>Thanks for joining!</h1>)}
      </form>
    
      <div className='animation'>
       <Lottie animationData={emailIcon} loop={true} />
      </div>
    </div>
    </section>
  )
}
