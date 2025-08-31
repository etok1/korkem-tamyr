import { useEffect, useRef, useState } from 'react';
import logo from '../../../public/logo.png'; 
import { ChevronDown, Instagram, Menu, X,  } from 'lucide-react';
import { navigation } from '../../utils/data';
import { NavLink, useLocation } from 'react-router-dom';

const media = [
    {
        name: 'instagram link',
        link: 'https://www.instagram.com/korkem_tamyr?igsh=dDR4eXAyYXQ2aHli', 
        icon: <Instagram width={30} height={30} className='md:h-[20px] md:w-[20px]'  color='#1E3A8A'/>,
    },
     
]

// {
//         name: 'youtube link',
//         link: '', 
//         icon: <Youtube width={30} height={30} className='md:h-[20px] md:w-[20px] lg:h-[20px] lg:w-[20px]' color='#1E3A8A'/>,
//     }
export default function MobileHeader() {
  const [isOpen, setIsOpen] =  useState(false)
   const menuRef = useRef<HTMLDivElement>(null)
   const [openDropDown, setOpenDropDown] = useState<boolean>(false)
 const location = useLocation();
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

useEffect(() => {
  setIsOpen(false)
}, [location])

  return (
   <header className='lg:hidden flex h-[80px] px-10 py-5 bg-headerWhite relative' style={{ fontFamily: "Playpen Sans, cursive" }}>
      <div className="flex items-center justify-between w-full">
        <NavLink to='/'><img src={logo} alt="logo" width={100} className='w-[70px]'/></NavLink>
        <button onClick={handleOpen} aria-label="Toggle menu">{isOpen ? <X color='#1E3A8A' width={30} height={30}/> : <Menu color='#1E3A8A' />}</button>
      </div>

      <div ref={menuRef} className={`${isOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full z-[9999] bg-headerWhite`}>
        <nav className='w-full flex m-5 '>
          <ul className='flex flex-col items-start w-full'>
            {navigation.map((nav) => (
              <li key={nav.name} className="group text-nightBlue font-sansPT font-bold text-sm no-underline block w-full" onClick={() => nav.name === 'Ерекшеліктері' ? setOpenDropDown(!openDropDown) : ''} aria-label={nav.name}>
                <div className="flex items-center justify-between w-fit">
                  <NavLink 
                    to={nav.link || '/'} 
                    className="flex items-center hover:bg-nightBlue hover:text-white px-2 py-2 rounded-xl flex-grow"
                  >
                    {nav.name}
                    
                  </NavLink>
                  {nav.name === 'Ерекшеліктері' ? <ChevronDown className={`transition-transform duration-200 ${openDropDown ? 'rotate-180' : 'rotate-0'}`}/> : ''}
                </div>
                {nav.dropdown && (
                  <div className={` ${openDropDown ? 'block' : 'hidden'} w-fit rounded-md ml-5`}>
                    <ul className="text-right">
                      {nav.dropdown.map((item) => (
                        <li key={item.name} aria-label={item.name} className="w-full border-b-2">
                          <NavLink
                            to={item.link}
                            className="block px-4 py-3 w-full text-nightBlue hover:bg-gray-100 hover:text-purpleColor"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='w-fit flex items-center justify-center gap-4 m-5 mt-2'>
          {media.map((item) => (
            <NavLink to={item.link}  target="_blank" key={item.name}><button aria-label={item.name}>{item.icon}</button></NavLink>
          ))}
        </div>
      </div>
  </header>
  );
}
