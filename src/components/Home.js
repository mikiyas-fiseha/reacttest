import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav className='navbar'>
          <div className='logo'>
          <h1>TEST</h1>
          </div>

          <div className='menu'>
             <ul className='menulist'>
              <li className='links'><Link  className='links' to='/userlist'>Userlist</Link></li>
              <li className='links'> About</li>
              <li >  <Link  className='links' to='/login'>Login</Link></li>
               <li><Link className='links' to='/registration'>Register</Link> </li>
             </ul>
          </div>
      </nav>
    </div>
  )
}

export default Home