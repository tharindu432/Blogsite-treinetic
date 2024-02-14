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
        <nav className='d-flex align-items-center px-4 py-4 justify-content-between'>

       <Link to='/' className='text-white h1 font-weight-bold text-decoration-none'><span className='text-warning'>T</span>-Blog</Link>
       
       <ul>
         {navItems.map((item, index) => (
            <Link key={index} to={item.path} className='text-white text-decoration-none mx-3'>
                {item.link}
            </Link>
        ))}
       </ul>

        </nav>
      </header>
    </div>
  )
}

export default Navbar