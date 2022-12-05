import React from 'react'
import SubHeading from './SubHeading'
import award01 from '../public/award01.png'
import award02 from '../public/award02.png'
import award03 from '../public/award03.png'
import award05 from '../public/award05.png'
import laurel from '../public/57.png'
import Image from 'next/image'


function Laurels() {
    const awards = [
        {
          imgUrl: award02,
          title: 'Bib Gourmond',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
        },
        {
          imgUrl: award01,
          title: 'Rising Star',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
        },
        {
          imgUrl: award05,
          title: 'AA Hospitality',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
        },
        {
          imgUrl: award03,
          title: 'Outstanding Chef',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
        },
      ];    
    
      const AwardCard = ({ award }) => (
        <div className='app__laurels_awards_card'>
            <Image src={award.imgUrl} alt='award'/>
            <div className='app__laurels_awards-card_contents'>
                <p className='p__cormorant' style={{ color : '#DCCA87'}}>{award.title}</p>
                <p className='p__cormorant' >{award.subtitle}</p>
            </div>
        </div>
      )
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
        <div className='app__wrapper_info'>
            <SubHeading title="Awards & Recognition"/>
            <h1 className='headtext__cormorant'>Our Laurels</h1>
            <div className='app__laurels_awards'>
                {awards.map((award) => <AwardCard award={award} key={award.title}/>)}
            </div>
        </div>

        <div className='app__wrapper_img laurel-img'>
            <Image src={laurel}/>   
        </div>
    </div>
  )
}

export default Laurels