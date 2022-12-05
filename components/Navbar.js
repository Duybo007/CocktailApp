import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {MdOutlineRestaurantMenu} from "react-icons/md"

function Navbar() {
  const [toggle, setToggle]= useState(false)
  useEffect(()=>{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    } else {
    document.getElementById("nav").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    }
  }, [])  
    
  return (
    <header className='navbar' id='nav'>
        <div className='navbar-logo'>
            <Link href="/"><img src='https://images.squarespace-cdn.com/content/v1/5d38be67c7d842000198f198/1567541699196-BJ3HTDXANI83S5GZ1QSM/Habana-Gold-Logo-03.png' alt='logo'/></Link>
        </div>
        <ul className='navbar-links'>
            <li className='p__opensans'><a href='/'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#awards'>Awards</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='navbar-book'>
            <a href='#order-online' className='p__opensans'>Order Online</a>
            <div/>
            <a href='#reservation' className='p__opensans'>Reservations</a>
        </div>
        <div className='navbar-smallscreen'>
            <AiOutlineMenu color="#fff" fontSize={27} onClick={()=> setToggle(true)}/>
            {toggle && (
                <div className='navbar-smallscreen-overlay flex__center slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggle(false)}/>
                <ul className='navbar-smallscreen-links'>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#home'>Home</a></li>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#about'>About</a></li>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#menu'>Menu</a></li>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#awards'>Awards</a></li>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#contact'>Contact</a></li>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#contact'>Order Online</a></li>
                <li className='p__opensans' onClick={()=>setToggle(false)}><a href='#reservation'>Reservations</a></li>
                </ul>
                </div>
            )}
            
        </div>
    </header>
  )
}

export default Navbar