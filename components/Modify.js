import React, { useRef, useState, useEffect } from 'react'
import {MdOutlineRestaurantMenu} from "react-icons/md"
import { doc, updateDoc } from "firebase/firestore";
import { db } from './Firebase';
import { useRouter } from 'next/router'

function Modify({onClose, open, code}) {
  const datePickerId = new Date().toISOString().split("T")[0];
  const [people, setPeople] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [modifyCon, setModifyCon] = useState(false)
  const [haveModified, setHaveModified] = useState(false)
  const peopleRef = useRef(null)
  const dateRef = useRef(null)
  const timeRef = useRef(null)
  const router = useRouter()

  const modify = async(e) => {
    e.preventDefault()
    const modifyRef = doc(db, "booking", `${code}`);
    await updateDoc(modifyRef, {
      people: peopleRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value
    })
    setModifyCon(true)
    setHaveModified(true)
  }
// If user has clicked modify => wait 3s => home page
  useEffect(()=> {
    if(haveModified){
      const timer = setTimeout(()=> {
        router.push('/')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [haveModified])
  
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modalContainer'>
            <img src='https://axwwgrkdco.cloudimg.io/v7/__gmpics__/87b28e10e190462dab6104cfcc9acd5a?width=1000'/>
            <div className='modalRight'>
                <MdOutlineRestaurantMenu className='closeBtn' onClick={onClose} fontSize={27}/>
                {modifyCon? (
                  <div className="modify-suc">
                    <p >Successfully Modified Reservation</p>
                  </div>
                  
                ) : (
                  <form className='content'>
                    <h1 className='headtext__cormorant'>Modify Reservation</h1>
                    <div className='app__newsletter-input flex__center  rev-input modify-input'>
                      <input ref={peopleRef} type="number" onChange={(e) => setPeople(e.target.value)} value={people} placeholder="Guests" min="1"/>
                      <input ref={dateRef} type="date" min={datePickerId} onChange={(e) => setDate(e.target.value)} value={date}/>
                      <select ref={timeRef} onChange={(e) => setTime(e.target.value)} value={time}>
                        <option  value="">Time</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                      </select>
                    </div>
                    <div >
                      <button onClick={modify} className='custom__button modify-btn'>Modify</button>
                    </div>
                  </form>
                ) }
                
            </div>
        </div>
    </div>
  )
}

export default Modify