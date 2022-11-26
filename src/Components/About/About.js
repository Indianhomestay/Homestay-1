import React from 'react';
import './About.css';
import aboutimage1 from '../../Assets/aboutimage1.jpg';
import aboutimage2 from '../../Assets/aboutimage2.jpg';
import { AiOutlineStar } from 'react-icons/ai';
import { SlBadge } from 'react-icons/sl';

const About = () => {
  const enterfunc1 = ()=>{
    document.getElementById('icons').style.color='#C69749';
  }
  const enterfunc2 = ()=>{
    document.getElementById('icons2').style.color='#C69749';
  }
  const outfunc1 = ()=>{
    document.getElementById('icons').style.color='black';
  }
  const outfunc2 = ()=>{
    document.getElementById('icons2').style.color='black'
  }
  
  // document.getElementById('test').addEventListener('mouseout',()=>{
  //   document.getElementById('icons').style.color ='black'
  // })
  
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutimage1} alt='...' />
        <img src={aboutimage2} alt='...' />
      </div>
      <div className='about-right'>
        <p>Welcome Home</p>
        <p>some word about us</p>
        <div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </div>
        </div>
        <div className='rank'>
          <div onMouseEnter={enterfunc1} onMouseOut={outfunc1}><div> <AiOutlineStar size={55} id='icons' className='about-icon' /> </div><div>Consistently High Guest Satisfaction Since 2012</div></div>
          <div onMouseEnter={enterfunc2} onMouseOut={outfunc2}><div> <SlBadge size={55} id='icons2' className='about-icon' /> </div><div>Top Ranked Value Homestay in New York, USA</div></div>
        </div>
        <button className='btn'>Explore More &#8594;</button>
      </div>
    </div>
  )
}

export default About
