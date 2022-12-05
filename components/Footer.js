import Image from 'next/image'
import React from 'react'
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import FooterOverlay from './FooterOverlay'
import NewsLetter from './NewsLetter'
import spoon from '../public/spoon.png'

function Footer() {
  return (
    <div className='app__footer section__padding'>
        <FooterOverlay/>
        <NewsLetter/>

        <div className='app__footer-links'>
          <div className='app__footer-links_contact'>
            <h1 className='app__footer-headtext'>Contact Us</h1>
            <p className='p__opensans'>2930 Bristol Street Costa Mesa, CA 92626</p>
            <p className='p__opensans'>(949) 419-0100﻿</p>
            <p className='p__opensans'>(949) 419-0101﻿</p>
          </div>

          <div className='app__footer-links_logo'>
            <img src='https://images.squarespace-cdn.com/content/v1/5d38be67c7d842000198f198/1567541699196-BJ3HTDXANI83S5GZ1QSM/Habana-Gold-Logo-03.png' alt='footer_logo' />
            <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>         
            <Image src={spoon} className="spoon__img" style={{marginTop: 15}}/>
            <div className='app__footer-links_icons'>
              <FiFacebook/>
              <FiTwitter/>
              <FiInstagram/>
            </div>
          </div>

          <div className='app__footer-links_work'>
            <h1 className='app__footer-headtext'>Working Hours</h1>
            <p className='p__opensans'>Monday-Friday</p>
            <p className='p__opensans'>10:00 Am - 02:00 Am</p>
            <p className='p__opensans'>Saturday-Sunday</p>
            <p className='p__opensans'>10:00 Am – 03:00 Am</p>
          </div>
        </div>

        <div className='footer__copyright'>
          <p className='p__opensans'>© 2021 Geritcht. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer