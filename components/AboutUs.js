import React from 'react'
import Image from 'next/image'
import knife from '../public/knife.png'

function AboutUs() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
        <div className='app__aboutus-overlay flex__center'>
            <img src='https://static.wixstatic.com/media/f9be3a_83ae6e5f478e45d6a7fad44ff37d7f93~mv2.png' alt='habana'/>
        </div>
        <div className='app__aboutus-content flex__center'>
            <div className='app__aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <Image src='/spoon.png' width="45" height="15" alt="spoon" className='spoon__img'/>
                <p className='p__opensans'>Cuban cuisine with irresistible mojitos and cocktails. Transport yourself and come experience a little part of Cuba</p>
                <button type='button' className='custom__button'>Learn More</button>
            </div>
            <div className='app__aboutus-content_knife flex__center'>
                <Image  src={knife}/>
            </div>
            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <Image src='/spoon.png' width="45" height="15" alt="spoon" className='spoon__img'/>
                <p className='p__opensans'>Originally opened in 1995, Habana has become an Orange County staple, offering the coastal community a lush Cuban and Pan-Latin experience through its authentic cuisine and cocktail program. Spanning 20 years as a favorite culinary destination, Habana lends itself perfectly for date night, celebrations and simple moments that have created memories for many.</p>
                <button type='button' className='custom__button'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs