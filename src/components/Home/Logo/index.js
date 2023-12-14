import './index.scss';
import portrait from '../../../assets/images/portrait.png'
import LogoA from '../../../assets/images/Logo.png'
import {useEffect, useRef } from 'react'
import gsap from 'gsap-trial';


const Logo = () => {
    
    return (
      <div className='portrait-container'>
          <img src={portrait} className='portrait' alt='self portrait' />
      </div>
    )
}

export default Logo