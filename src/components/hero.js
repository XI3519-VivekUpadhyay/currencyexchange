import React from 'react'
import './components/hero'
import navbar from './navbar'
import Crypto from '../assets/hero.png.JPG'

const hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/*Left Side*/}
            <div className='left'>
                <p>Buy & sell Crypto 24/7 using your retirement acount</p>
                <h1>Invest in Cryptocurrency</h1>
                <p>Buy, sell , and store hundreds of Cryptocurrency</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            
            {/*Right side*/}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt=''/>
                </div>
            </div>
    </div>
  )
}


export default hero
