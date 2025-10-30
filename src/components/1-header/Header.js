import React, { useEffect, useState } from 'react';
import"./header.css";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
 const[showModel ,SetShowModel]=useState(false);


 useEffect(()=>{
  if(theme === "light"){
 document.body.classList.remove("dark");
document.body.classList.add("light")
  }else{
     document.body.classList.remove("light");
document.body.classList.add("dark")
  }
   
 },[theme])
  return (
    <header className=' flex'>
    <button  onClick={()=>{SetShowModel(true)}} className='menu icon-menu flex' ></button>
       
      
    <div   />
      
    <nav>
    <ul className='flex'>
      <li><a href=''>About</a></li>
       <li><a href=''>Articles</a></li>
        <li><a href=''>Projects</a></li>
     <li><a href=''>Speaking</a></li>
      <li><a href=''>Contact</a></li>
    </ul>

    </nav>
     <button onClick={()=>{
      localStorage.setItem("currentMode", theme === "dark" ?"light" :"dark")
      setTheme(localStorage.getItem("currentMode"))
     }} className='moon flex'>
     {theme ==="dark" ? ( <span className='icon-moon-o'></span>) :( <span className='icon-sun'></span>)}
     
      </button>
  {showModel &&(
 <div className='fixed'>
    
        <ul className='model'>
         <li><button className="icon-cross" onClick={()=>{SetShowModel(false)}} /></li>
         <li><a href=''>About</a></li>
       <li><a href=''>Articles</a></li>
        <li><a href=''>Projects</a></li>
     <li><a href=''>Speaking</a></li>
      <li><a href=''>Contact</a></li>
        </ul>
   

      </div>
  )}
     
    </header>
  )
}
