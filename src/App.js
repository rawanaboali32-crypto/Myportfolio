
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer"


function App() {
  const [scrollIs, setScrollIs] = useState(false)
  useEffect(()=>{
window.addEventListener("scroll",()=>{
  if(window.scrollY >300){
     setScrollIs(true)
  }else{
      setScrollIs(false)
  }
})
  },[])
  return (
<div id="up" className='contanier'>
  <Header />

  <Hero />
  <div className='divider' />
  <Main />
   <div className='divider' />
  <Contact />
   <div className='divider' />
  <Footer />
  
     <a style={{opacity:scrollIs ? 1  :0 ,transition:"1s"}} href="#up">
     <button className='icon-keyboard_arrow_up scrooltop'></button>
  </a>
 
 
 

</div>
  )
}

export default App;
