import Image from 'next/image'
import React from 'react'
import findus from '../public/findus.png'
import SubHeading from './SubHeading'

function FindUs() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
        <div className='app__wrapper_info'>
            <SubHeading title="Contact"/>
            <h1 className='headtext__cormorant' style={{morginBottom:'3rem'}}>Find Us</h1>
            <div className='app__wrapper-content'>
                <p className='p__opensans'>Habana at the Lab, 2930 Bristol Street Costa Mesa, CA 92626</p>
                <p className='p__cormorant' style={{color :'#DCCA87', margin: '2rem 0'}}>Open Hours</p>
                <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
                <p className='p__opensans'>Sat – Sun: 10:00 am – 03:00 am</p>
            </div>
            <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
        </div>

        <div className='app__wrapper_img'>
            <Image src={findus}/>
        </div>
    </div>
  )
}

export default FindUs