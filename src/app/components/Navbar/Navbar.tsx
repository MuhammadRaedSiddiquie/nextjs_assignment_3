import React from 'react';


function Navbar() {
  return (
    <nav className="w-full flex h-12 justify-center items-center bg-[#121212] fixed top-0">
        <ul className='flex gap-14'>
            <li><a href="#home"><h3 className='text-white text-lg franklin font-thick select-none cursor-pointer    '>HOME</h3></a></li>
            <li><a href="#about"><h3 className='text-white text-lg franklin font-thick select-none cursor-pointer'>ABOUT</h3></a></li>
            <li><a href="#skills"><h3 className='text-white text-lg franklin font-thick select-none cursor-pointer'>SKILLS</h3></a></li>
            <li><a href="#projects"><h3 className='text-white text-lg franklin font-thick select-none cursor-pointer'>PROJECTS</h3></a></li>
            <li><a href="#contact"><h3 className='text-white text-lg franklin font-thick select-none cursor-pointer '>CONTACT</h3></a></li>
        </ul>
    </nav>
  )
}

export default Navbar
