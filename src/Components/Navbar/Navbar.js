import React from 'react'
import './Navbar.css'
import logo from '../../Assets/dphilogo.png'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logobox'>
           <img src={logo}/>
           <span>DPhi</span>
        </div>
    </div>
  )
}

export default Navbar