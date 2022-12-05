import React from 'react'
import Image from 'next/image'

function SubHeading({title}) {
  return (
    <div style={{ marginBottom: '1rem'}}>
        <p className='p__cormorant'>{title}</p>
        <Image src='/spoon.png' width="45" height="15" alt="spoon" className='spoon__img'/>
    </div>
  )
}

export default SubHeading