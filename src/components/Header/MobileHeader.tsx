import { useEffect, useRef, useState } from 'react';
import logo from '../../../public/logo.png'; 
import { Instagram, Menu, X, Youtube } from 'lucide-react';
import { navigation } from '../../utils/data';
import { NavLink } from 'react-router-dom';

const media = [
    {
        name: 'instagram link',
        link: '', 
        icon: <Instagram width={30} height={30} className='md:h-[20px] md:w-[20px]'  color='#1E3A8A'/>,
    },
     {
        name: 'youtube link',
        link: '', 
        icon: <Youtube width={30} height={30} className='md:h-[20px] md:w-[20px] lg:h-[20px] lg:w-[20px]' color='#1E3A8A'/>,
    }
]


export default function MobileHeader() {
  const [isOpen, setIsOpen] =  useState(false)
   const menuRef = useRef<HTMLDivElement>(null)

   useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(event.target as Node)){
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
   }, [isOpen])

  const handleOpen = () => {
      setIsOpen(prevOpen => !prevOpen)
  }

  return (
   <header className='lg:hidden flex h-[80px] px-10 py-5 bg-headerWhite relative'  style={{ fontFamily: 'Montserrat, sans-serif'}}>
        <div className="flex items-center justify-between w-full">
           <NavLink to='/'><img src={logo} alt="logo" width={100} className='w-[70px]'/></NavLink>
            <button onClick={handleOpen} aria-label="Toggle menu">{isOpen ? <X color='#1E3A8A' width={30} height={30}/>  : <Menu color='#1E3A8A' />}</button>
        </div>

        <div ref={menuRef} className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full z-[9999] bg-headerWhite`}>
          <nav className='w-full flex m-5 '>
            <ul className='flex flex-col items-start w-fit '>
                    {navigation.map((nav) => (
                        <li className='text-nightBlue text-left font-sansPT font-bold text-sm no-underline py-1 sm:py-2 inline-block relative hover:text-purpleColor before:transition-all before:duration-300 before:h-[3px] before:content-[""] before:absolute before:bg-purpleColor before:bottom-1 sm:before:bottom-0 hover:before:w-full'><NavLink to={nav.link || '/'}>{nav.name}</NavLink></li>
                    ))}
                </ul>
          </nav>
          <div className=' w-fit flex items-center justify-center gap-4 m-5 mt-2 '>
            {media.map((item) => (
                    <NavLink to={item.link}><button aria-label={item.name}>{item.icon}</button></NavLink>
            ))}
          </div>
        </div>
   </header>
  );
}
