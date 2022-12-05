import React from 'react'
import Image from 'next/image'
import chef from '../public/chef.png'
import quote from '../public/quote.png'
import SubHeading from './SubHeading'

function Chef() {
  return (
    <div className='app__bg app__wrapper section__padding chef'>
        <div className='app__wrapper_img app__wrapper chef-img'>
            <Image src={chef} alt="chef"/>
        </div>
        <div className='app__wrapper_info chef-content'>
            <SubHeading title="Chef's Word"/>
            <h1 className='headtext__cormorant'>What We Believe In</h1>

            <div className='app__chef-content'>
                <div className='app__chef-content_quote'>
                    <Image src={quote}/>
                    <p className='p__opensans'>
                    People who love to eat are always the best people.
                    </p>
                </div>
                <p className='p__opensans'>If You Really Want To Make A Friend, Go To Someone's House And Eat With Him...The People Who Give You Their Food Give You Their Heart.</p>
            </div>

            <div className='app__chef-sign'>
                <h2>Kelvin Lou</h2>
                <p className='p__opensans'>Chef & Founder</p>
                <img src='https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/Kevin-Luo.png'/>
            </div>
        </div>
    </div>
  )
}

export default Chef