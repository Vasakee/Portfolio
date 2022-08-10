import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

function Projects() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
       <h1 className='works'>Projects</h1>
       <div className='crypto' data-aos='flip-left'>
        A  crptocurrency  dashboard ,  showing  the  crptocurrency  name,  the  current  price (in naira), the percentage increase or decrease <br /> 
        <div className='git' ><a href='https://vasakee.github.io/my-cryptocurrency-dashboard/' className='git' > Open</a> </div>
       </div>
       <hr />
       <div className='weather' data-aos='flip-right'>
        A weather app , showing the various weather conditions in different loctaions across the earth.
        <div className='git'><a href='https://vasakee.github.io/my-weather-app/' className='git'>Open</a></div>
       </div>
       <hr />
       <div className='expense' data-aos='fade-down'>
        An income tracker for tracking income .
        <div className='git'><a href='https://vasakee.github.io/my-expense-tracker/' className='git'>Open</a></div>
       </div>
       <hr />
    </div>
  )
}

export default Projects
