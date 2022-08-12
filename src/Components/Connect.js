import React, { useEffect } from 'react'
import whatsapp from './icons/whatsapp1.png'
import github from  './icons/git2.png'
import facebook from './icons/fb1.png'
import twitter from './icons/twitter1.png'
import mail from './icons/mail.png'
import animate from './icons/animated.gif'
import Aos from 'aos'
import "aos/dist/aos.css"

function Connect ({executeScroll,div5}) {
    useEffect(() =>{
    Aos.init({ duration: 2000 })
  })
  return (
    <div >
      <div className='top'>
      <h2 className='flows'>It's now time for me to know you.</h2>
       <div className='hmu'>let's connect through any of my social network handles </div> 
       </div>
     <div className='socials'>  
    <a href='https://twitter.com/Vasco_Dayigil?t=8mvieti1AySDjgZyFVwgOg&s=09' data-aos='zoom-left' className='chat'><img src={twitter} className='pic' alt='pic' /></a> <br />
    <a href='https://www.linkedin.com/in/basil-dayigil-62659421b' data-aos='flip-right' className='chat'><img src={require('./icons/linked2.png')} alt='pic' className='pic'/></a><br />
    <a href='https://www.facebook.com/basil.dayigil.3' className='chat' data-aos='flip-up' ><img src={facebook} className='pic' alt='pic' /></a><br />
    <a href='https://github.com/Vasakee' className='chat' data-aos='flip-down'><img src={github} className='pic' alt='pic' /></a><br /> 
    <a href='https://wa.me/2349046824242' className='chat'><img src={whatsapp} data-aos='flip-left' className='pic' alt='pic' /></a><br />
     </div>
     <div className='mail'>
     for formal purposes, click the mail icon below; <br />
     <a href='mailto:basildayigil@gmail.com'><img src={mail} className='formal' alt='pic' /></a>
     <div onClick={()=>executeScroll(div5)}><img src={animate} alt='pic' /></div>
     </div>
    </div>
  )
}

export default Connect 
