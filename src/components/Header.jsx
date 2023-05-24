import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{display:'flex',marginTop:'10vh',gap:'2vh'}}>
    <button className='btn btn-success'>
    <Link style={{color:'white'}} to="/"  >Home</Link>
    </button>
<h1 styles={{color:'white'}}>LEARNING LOGIN....</h1>

    </div>
  )
}

export default Header