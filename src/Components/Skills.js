import React, { useEffect } from 'react'
import react from './icons/react.png'
import js from './icons/js1.png'
import html from './icons/html.png'
import css from './icons/css.png'
import Aos from 'aos'
import "aos/dist/aos.css"



function Skills() {
    useEffect(() =>{
    Aos.init({ duration: 1000 })
  })
  return (
    <div >
     <h1 className='skill'>Services</h1>
    <ul className='spec'> 
    <div className='wd'>
     <li className='wds'> Website Design  </li>
       <div data-aos='flip-up'>Lets create you an awesome Website from scratch!</div>
     </div> 
     <div className='wd'>  
      <li className='wds'>Website Development </li>
       <div data-aos='flip left'>Lets develop what you already have!</div>
      </div>
      <div className='wd'>
      <li className='wds'>UI/UX Designs</li>
      <div data-aos='flip-down'>Lets give your Website a nice User interface / User experience for your users</div>
      </div>
    </ul> 
     <h1 className='language'>Skills</h1>
     <div className='tools'>
       <span className='tool' ><img src={html} className='tool' alt='tool' /></span> <span className='tool'><img src={css} className='tool' alt='tool'/></span> 
       <span className='tool'><img src={js} className='tool' alt='tool' /></span> <span className='tool'><img src={react} className='tool' alt='tool'/></span>
     </div>
    </div>
  )
}

export default Skills
