import React, {  useRef, useState } from 'react'
import SubHeading from './SubHeading'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './Firebase';
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { reservSchema } from '../schemas';

function Reservations() {
    const datePickerId = new Date().toISOString().split("T")[0];
    const router = useRouter()
    const [code, setCode] = useState(null)

    const check = (e) => {
        e.preventDefault()
        router.push('/confirm')
    }

    const onSubmit= async( values, actions) => {
        try {
            const docRef = await addDoc(collection(db, "booking"), {
              people: values.people,
              date: values.date,
              time: values.time,
              name: values.name,
              email: values.email
            });
            setCode(docRef.id)
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    }
    const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            people:"",
            date:"",
            time:"5:00 PM",
            name:"",
            email:""
        },
        validationSchema: reservSchema,
        onSubmit
    })

  return (
    <div className='app__footer section__padding ' id='reservation'>
    <form onSubmit={handleSubmit} className='app__newsletter reserve'>
        <div className='app__newsletter-heading'>
            <SubHeading title="Reservations"/>
            <h1 className='headtext__cormorant'>Book A Table</h1>
        </div>

        <div className='app__newsletter-input flex__center reservation'>
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
        <div className="app__newsletter-input flex__center reservation">
        <div className="rev-input">
            <input
                value={values.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="Enter your name"
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="rev-input">
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
        </div>
        </div>
        
        <div className='flex__center rev-btns'>
            <button disabled={isSubmitting} type="submit" className='custom__button rev-btn'>Book Now</button>
            <button onClick={check} className='check rev-btn'>Check My Reservations</button>
        </div>
        {code && (
            <div className='code-num'>
                <p className='p__opensans-code'>Your confirmation code is: <span className='code'>{code}</span></p>
            </div>
        )}
        
    </form>
    </div>
  )
}

export default Reservations