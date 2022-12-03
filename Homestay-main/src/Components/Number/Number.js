import React from 'react';
import './Number.css';

const Number = () => {
  return (
    <div className='number'>
      <div className='number-left'>
        <p>number speaks</p>
        <p>the perfect place to stay</p>
      </div>
      <div className='number-right'>
            <div>14<br/><span>cottages</span></div>
            <div>80<br/><span>accress of green spaces</span></div>
            <div>32<br/><span>bedrooms</span></div>
            <div>95%<br/><span>satisfied customers</span></div>
      </div>
    </div>
  )
}

export default Number
