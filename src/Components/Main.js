import React, { useEffect,  useRef } from 'react'
import { NavLink } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css"
import About from './About'
import Connect from './Connect'
import Skills from './Skills'
import Projects from './Projects'
import resume from './Background/resume.pdf'

function Main() {
  useEffect(() =>{
    Aos.init({ duration: 2000 })
  })
  const executeScroll = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const div1 = useRef();
  const div2 = useRef();
  const div3 = useRef();
  const div4 = useRef();
  const div5 = useRef();
  return (
    <div className='main' >
      <div className='link' ref={div5}>
      <ul className='links'>
        <li ><NavLink exact="true" activeclassname='active' to='/' className='page' >Home</NavLink></li>
        <li  to='/about' smooth='true' duration={500} onClick={()=>executeScroll(div1)} className='page'>About </li>
        <li  to='/skills' smooth='true' duration={500} onClick={()=>executeScroll(div2)} className='page'>Skills</li>
        <li  smooth="true" offset={100} duration={500} activeclassname='active' onClick={()=>executeScroll(div3)} to='/projects' className='page'>Projects</li>
        <li  to='./connect'  smooth='true' duration={500} className='page' onClick={()=>executeScroll(div4)}>Contact</li>
      </ul>
     </div>
     <div className='basic' data-aos="flip-left">
      <h1  className='intro'>Basil Dayigil</h1>
      <div className='jobs'>Frontend <br /> Web-Developer</div>
      <div className='resume'>
      <a href={resume} download="resume.pdf" >
       Download resume
      </a>
   </div>
     </div>  
     <div  ref={div1} data-aos='fade-down' className='about'>
      <About />
     </div>
     <div ref={div2} data-aos='fade-right' className='stunt' >
      <Skills />
     </div>
     <div ref={div3} data-aos='fade-left' className='stuff'>
      <Projects />
     </div>
     <div ref={div4} data-aos='fade-up' className='meet'>
      <Connect div5={div5} executeScroll ={executeScroll} />
     </div>
    </div>
  )
}

export default Main
