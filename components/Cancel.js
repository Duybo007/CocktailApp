import React from 'react'
import {MdOutlineRestaurantMenu} from "react-icons/md"

function Cancel({open, onClose}) {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modalContainer'>
            <img src='https://axwwgrkdco.cloudimg.io/v7/__gmpics__/87b28e10e190462dab6104cfcc9acd5a?width=1000'/>
            <div className='modalRight'>
                <MdOutlineRestaurantMenu className='closeBtn' onClick={onClose} fontSize={27}/>
                <div className='content'>
                    <h1 className='headtext__cormorant'>Cancellation Confirmation</h1>
                    <p className='p__opensans'>Your reservation has been cancelled</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cancel