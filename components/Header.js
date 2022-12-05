import React from 'react'
import SubHeading from './SubHeading'
import Image from 'next/image'
import welcome from '../public/welcome.png'

function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
            <SubHeading title='Chase the new flavour'/>
            <h1 className='header-h1'>The Key to Fine Dining</h1>
            <p className='p__opensans' style={{margin: '2rem 0'}}>The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, we’re here to bring you a sandwich experience you can feel good about.</p>
            <button type='button' className='custom__button'>Explore Menu</button>
        </div>

        <div className='app__wrapper_img'>
            <Image src={welcome} max-width={500} height={500} alt="header img"/>
        </div>
    </div>
  )
}

export default Header