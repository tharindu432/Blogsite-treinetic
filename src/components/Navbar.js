import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    //navBar Items 
    const navItems = [
        {link: 'Home', path: '/'},
        {link: 'About', path: '/about'},
        {link: 'Blogs', path: '/blogs'},
        {link: 'Contact', path: '/contact'},
    ]
  return (
    <div>
      <header className='bg-dark'> 
        <nav className='px-4 py-4'>

       <Link to='/' className='text-white h1 font-weight-bold text-decoration-none'><span className='text-warning'>T</span>-BLOG</Link>
    
        </nav>
      </header>
    </div>
  )
}

export default Navbar