import React, { useState} from 'react'


function Menu() {
    const [barHover, setBarHover] = useState('hover')
    const [foodHover, setFoodHover] = useState('')
    const [deHover, setDeHover] = useState('')
    const [barAppear, setBarAppear] =useState("appear")
    const [foodAppear, setFoodAppear] =useState("dis")
    const [deAppear, setDeAppear] =useState("dis")
  return (
    <div className='app__menu' id='menu'>
        <div className="bg-img">
            <img src="https://images.unsplash.com/photo-1543826173-1beeb97525d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1684&q=80"
            alt="bar" className={barAppear}/>
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="food" className={foodAppear}/>
            <img src="https://images.unsplash.com/photo-1611329695518-1763319f3551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1683&q=80"
            alt="de" className={deAppear}/>
        </div>
        
        <div className='app__menu-cate'>
            <h1 onMouseEnter={()=> {
                setFoodAppear("dis")
                setBarAppear("appear")
                setDeAppear("dis")
                setBarHover('hover')
                setFoodHover("")
                setDeHover("")
                }} className={barHover}>Bar Menu</h1>
            <h1 onMouseEnter={()=> {
                setFoodAppear("apear")
                setBarAppear("dis")
                setDeAppear("dis")
                setFoodHover('hover')
                setBarHover("")
                setDeHover("")
                }} className={foodHover}>Food Menu</h1>
            <h1 onMouseEnter={()=> {
                setFoodAppear("dis")
                setBarAppear("dis")
                setDeAppear("appear")
                setDeHover('hover')
                setBarHover("")
                setFoodHover("")
                }} className={deHover}>Desserts Menu</h1>
        </div>
    </div>
  )
}

export default Menu