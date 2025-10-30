import React, { useRef } from 'react';
import "./hero.css";
import developerCode from "../../animation/animationsdeveloper.json";
import Lottie from 'react-lottie-player';
import { motion, scale } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className='hero flex'>
<div className='left-section '>
<div className='parent-avatar flex'>
<motion.img initial={{transform:"scale(0)"}} animate={{transform:"scale(1.1)"}} transition={{damping:6 ,type:"spring" ,stiffness:100}} src="/img/roor2.jpg" className='avatar' alt=""/>
<div className='icon-verified'></div>
</div>
<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:"2"}} className='title'>Information engineer and Front-end developer </motion.h1>
<p className='sub-title'>Im Rawan Abo ali ,an information engineer, graduated from information engineering, living in Syria, Tartous, a website designer,
where I develop technology that empowers regular people to explore space on their terms.</p>


<div className='icons flex'>
<div className='icon icon-twitter'></div>
<div className='icon icon-instagram'></div>
<div className='icon icon-github '></div>
<div className='icon icon-linkedin'></div>
</div>
</div>

<div className='right-section animation'>
<Lottie lottieRef={lottieRef}  onLoadedImage={()=>{lottieRef.current.setspeed(0.5);}} animationData={developerCode} loop={true} />
</div>
    </section>
  )
}
