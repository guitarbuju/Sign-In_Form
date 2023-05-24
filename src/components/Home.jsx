import React from 'react'
import './HomeStyles.css'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='wrapper'>


    <h1>WELCOME TO MY PAGE</h1>
        <div className='butongroup'>       
        <button id='signin' className="btn btn-primary" >
          <Link style={{ color: "white" }} to="/signIN">
            Sign In
          </Link>
          </button>

          <button type= 'submit' id='login' className="btn btn-warning" >
          <Link style={{ color: "white" }} to="/login">
            Log In
          </Link>
          </button>
           
        </div>
    </div>
  )
}

export default Home