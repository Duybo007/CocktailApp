import React, { useRef, useState, useEffect } from 'react'
import {MdOutlineRestaurantMenu} from "react-icons/md"
import { doc, updateDoc } from "firebase/firestore";
import { db } from './Firebase';
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { modifySchema } from '../schemas';

function Modify({onClose, open, code, info}) {
  const datePickerId = new Date().toISOString().split("T")[0];
  const [modifyCon, setModifyCon] = useState(false)
  const [haveModified, setHaveModified] = useState(false)
  const router = useRouter()

  // const modify = async(e) => {
  //   e.preventDefault()
  //   const modifyRef = doc(db, "booking", `${code}`);
  //   await updateDoc(modifyRef, {
  //     people: peopleRef.current.value,
  //     date: dateRef.current.value,
  //     time: timeRef.current.value
  //   })
  //   setModifyCon(true)
  //   setHaveModified(true)
  // }
// If user has clicked modify => wait 3s => home page
  useEffect(()=> {
    if(haveModified){
      const timer = setTimeout(()=> {
        router.push('/')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [haveModified])
  
  const onSubmit= async( values, actions) => {
    const modifyRef = doc(db, "booking", `${code}`);
    await updateDoc(modifyRef, {
      people: values.people,
      date: values.date,
      time: values.time,
      name: info.name,
      email: info.email
    })
    setModifyCon(true)
    setHaveModified(true)
    console.log("MODIFIED")
  }
  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
        people:"",
        date:"",
        time:"5:00 PM"
    },
    validationSchema: modifySchema,
    onSubmit
  })
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
                  <form onSubmit={handleSubmit} className='content'>
                    <h1 className='headtext__cormorant'>Modify Reservation</h1>
                    <div className='app__newsletter-input flex__center  rev-input modify-input'>
                      <div 
                      className="rev-input">
                          <input
                          id="people"
                          type="number" 
                          onChange={handleChange} 
                          value={values.people} 
                          placeholder="Guests" 
                          min="1"
                          onBlur={handleBlur}
                          className={errors.people && touched.people? "input-error": ""}/>
                          {errors.people && touched.people && <p className="error">{errors.people}</p>}
                      </div>
                      <div className="rev-input">
                          <input 
                              id="date"
                              type="date" 
                              min={datePickerId} 
                              onChange={handleChange} 
                              value={values.date}
                              onBlur={handleBlur}
                              className={errors.date && touched.date? "input-error": ""}/>
                          {errors.date && touched.date && <p className="error">{errors.date}</p>}
                      </div>
                      <div className="rev-input">
                          <select 
                              id="time"
                              onChange={handleChange} 
                              value={values.time}
                              onBlur={handleBlur}
                              className={errors.time && touched.time? "input-error": ""}>
                              <option  value="">5:00 PM</option>
                              <option value="6:00 PM">6:00 PM</option>
                              <option value="7:00 PM">7:00 PM</option>
                              <option value="8:00 PM">8:00 PM</option>
                              <option value="9:00 PM">9:00 PM</option>
                              <option value="10:00 PM">10:00 PM</option>
                              <option value="11:00 PM">11:00 PM</option>
                          </select>
                          {errors.time && touched.time && <p className="error">{errors.time}</p>}
                      </div>            
                    </div>
                    <div >
                      <button disabled={isSubmitting} type="submit" className='custom__button modify-btn'>Modify</button>
                    </div>
                  </form>
                ) }
                
            </div>
        </div>
    </div>
  )
}

export default Modify