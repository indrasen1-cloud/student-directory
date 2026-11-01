import React from 'react'
import Contact from './Contact'
import About from './About'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <h1>Student Directory</h1>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               
            </ul>
        </div>
    </div>
  )
}

export default Navbar