import React from 'react';
import './Header1.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai';
import logo from '../../Assets/logo.png';

const Header1 = () => {
  return (
    <div className='header1'>
      <div className='header1-left'>
        <div>
        <div> <AiOutlineHome className='icon' /> </div>
        <div>7880, Sitong Rd<br/>
        Siliguri
        </div>
        </div>
        <div>
            <div><AiOutlineMail className='icon' /></div>
            <div>Email Us<br/>
            your@example.com
            </div>
        </div>
      </div>
      <div className='header1-middle'>
        <img src={logo} alt='...' />
      </div>
      <div className='header1-right'>
        <div> 
            (+91)1256845632
        </div>
        <div>
            <button className='btn'>Book Your Stay</button>
        </div>
      </div>
    </div>
  )
}

export default Header1
