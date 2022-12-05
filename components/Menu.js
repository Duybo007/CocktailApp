import React, { useState} from 'react'


function Menu() {
    const [url, setUrl] = useState("bar")
    let srcUrl = ""
    if (url === "bar"){
        srcUrl = "https://images.unsplash.com/photo-1543826173-1beeb97525d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1684&q=80"
    } else if ( url === "food"){
        srcUrl = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    } else if ( url === "desserts"){
        srcUrl = "https://images.unsplash.com/photo-1611329695518-1763319f3551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1683&q=80"
    }

    const [barHover, setBarHover] = useState('hover')
    const [foodHover, setFoodHover] = useState('')
    const [deHover, setDeHover] = useState('')

  return (
    <div className='app__menu' id='menu'>
        <div className="bg-img">
        <img src={srcUrl}/>
        </div>
        
        <div className='app__menu-cate'>
            <h1 onMouseEnter={()=> {
                setUrl("bar")
                setBarHover('hover')
                setFoodHover("")
                setDeHover("")
                }} className={barHover}>Bar Menu</h1>
            <h1 onMouseEnter={()=> {
                setUrl("food")
                setFoodHover('hover')
                setBarHover("")
                setDeHover("")
                }} className={foodHover}>Food Menu</h1>
            <h1 onMouseEnter={()=> {
                setUrl("desserts")
                setDeHover('hover')
                setBarHover("")
                setFoodHover("")
                }} className={deHover}>Desserts Menu</h1>
        </div>
    </div>
  )
}

export default Menu