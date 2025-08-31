import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'; 
import { ChevronDown, Instagram } from 'lucide-react';
import { navigation } from '../../utils/data';

interface mediaProps{
    name: string,
    link: string,
    icon: React.ReactNode
}

export default function DesktopHeader() {
   
const media:mediaProps[] = [
    {
        name: 'instagram link',
        link: 'https://www.instagram.com/korkem_tamyr?igsh=dDR4eXAyYXQ2aHli', 
        icon: <Instagram width={25} height={25}  color='#1E3A8A'/>,
    },
]

    //  {
    //     name: 'youtube link',
    //     link: '/', 
    //     icon: <Youtube width={25} height={25} color='#1E3A8A'/>,
    // }

  return (
    <header className='hidden lg:flex h-[120px] px-6 py-5 bg-headerWhite flex-row justify-between items-center' style={{ fontFamily: "Playpen Sans, cursive" }}>
        
            <div className='flex flex-row items-center gap-3'>
                <NavLink to='/'><img src={logo} alt="logo" width={100}/></NavLink>
                <div className="flex flex-row gap-2">{media.map((item) => (
                    <NavLink  target="_blank" to={item.link}><button aria-label={item.name}>{item.icon}</button></NavLink>
                ))}</div>
            </div>
            <nav>
                <ul className='flex flex-row items-center md:gap-5 xl:gap-8'>
                    {navigation.map((nav) => (
                    <li key={nav.name} className="group text-nightBlue font-sansPT font-bold text-sm no-underline py-5 block relative  " aria-label={nav.name}>
                        <NavLink 
                        to={nav.link || '/'} 
                        className="flex items-center justify-center gap-1 relative hover:bg-nightBlue  hover:text-white px-2 py-2 rounded-xl"
                        >
                        {nav.name} {nav.name === 'Ерекшеліктері' ? <ChevronDown className={`transition-transform duration-200 group-hover:rotate-180`}/> : ''}
                        </NavLink>
                        
                        {nav.dropdown && (
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                            <ul>
                            {nav.dropdown.map((item) => (
                                <li key={item.name} aria-label={item.name}>
                                <NavLink
                                    to={item.link}
                                    className="block px-4 py-2 hover:bg-gray-100 text-nightBlue hover:text-purpleColor"
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
        
   </header>
  );
}
