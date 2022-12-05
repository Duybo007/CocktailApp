import React, { useRef } from 'react'
import SubHeading from './SubHeading'
import {BsArrowRightShort, BsArrowLeftShort, BsInstagram} from 'react-icons/bs'
import gallery01 from '../public/gallery01.png'
import gallery02 from '../public/gallery02.png'
import gallery03 from '../public/gallery03.png'
import gallery04 from '../public/gallery04.png'
import Image from 'next/image'

function Gallery() {
    const scrollRef = useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef;
        if(direction === 'left'){
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }
    const images = [gallery01, gallery02, gallery03, gallery04]
  return (
    <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
            <SubHeading title="Instagram"/>
            <h1 className='headtext__cormorant'>Our Signatures</h1>
            <p className='p__opensans' style={{color: '#AAA', marginTOP: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className='custom__button'>View More</button>
        </div>
        <div className='app__gallery-images'>
            <div className='app__gallery-images_container' ref={scrollRef}>
                {images.map((image, index) => (
                    <div className='app__gallery-images_card flex__center' key={`gallery_image-${index +1}`}>
                        <Image src={image} alt="gallery"/>
                        <BsInstagram className='app__gallery-icon'/>
                    </div>
                ))}
            </div>
            <div className='app__gallery-images_arrows'>
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')}/>
                <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery