import React from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <div className="wrapper row1">
    <header id="header" className="hoc clear"> 
      <div id="logo" className="fl_left">
        <h1><Link to="/">Blog App</Link></h1>
      </div>
      <div className="fl_right"><Link className="btn" to="/signup">Signup</Link>
      <Link className="btn" to="/login">Login</Link></div>
    </header>
  </div>
    <Navbar/>
    </>
  
  )
}
