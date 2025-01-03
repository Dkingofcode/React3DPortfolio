import React, { useState } from 'react';
import { navLinks } from '../constants';


const NavItems = () => {
    return (
       <ul className='nav-ul'>
          {navLinks.map(( {id, href, name }) => (
            <li key={id} className='nav-li'>
              <a href={href} className='nav-li_a' onClick={() => {}}>
                {name}
              </a>
            </li>
          ))} 
       </ul> 
    )
}



const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previsOpen) =>  !previsOpen);
  }



  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
         <a href='/' className='text-neutral-400  rounded-lg font-bold text-xl hover:text-white transition-colors'><img style={{ border: "1px solid grey", borderRadius: "20px" }} src="/luke-jonesunsplash.jpg" width={40} height={36} alt='logo' /></a>
        
        <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label="Toggle menu">
            <img src={isOpen ? "assets/open.svg" : "assets/close.svg"}  alt='toggle' className='w-6 h-6' />
        </button>

       <nav className='sm:flex hidden'>
          <NavItems  />
       </nav>
    </div>
</div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems  />
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
