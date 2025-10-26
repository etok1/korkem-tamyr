import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'; 
import { ChevronDown, Instagram } from 'lucide-react';
import { navigation } from '../../utils/data';
import { useLanguage } from '../../utils/context';

interface mediaProps{
    name: string,
    link: string,
    icon: React.ReactNode
}

const media:mediaProps[] = [
    {
        name: 'instagram link',
        link: 'https://www.instagram.com/korkem_tamyr?igsh=dDR4eXAyYXQ2aHli', 
        icon: <Instagram width={25} height={25}  color='#1E3A8A'/>,
    },
]

export default function DesktopHeader() {
   const {language, setLanguage} = useLanguage()

        const handleLanguageChange = (newLanguage: 'en' | 'kz') => {
            setLanguage(newLanguage);
        };
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
                    {navigation[language].map((nav) => (
                    <li key={nav.name} className="group text-nightBlue font-sansPT font-bold text-sm no-underline py-5 block relative  " aria-label={nav.name}>
                        <NavLink 
                        to={nav.link || '/'} 
                        className="flex items-center justify-center gap-1 relative hover:bg-nightBlue  hover:text-white px-2 py-2 rounded-xl"
                        >
                        {nav.name} {nav.name === 'Ерекшеліктері'|| nav.name === 'Highlights' ? <ChevronDown className={`transition-transform duration-200 group-hover:rotate-180`}/> : ''}
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
                    <div className='flex flex-col items-center text-black' style={{ fontFamily: "Playpen Sans, cursive" }}>
                        <button 
                            className={`${language === 'en' ? 'font-bold text-nightBlue' : 'text-gray-500'} border-b-2 border-gray-300`} 
                            onClick={() => handleLanguageChange('en')} 
                        >
                            EN
                        </button>
                        <button 
                            className={`${language === 'kz' ? 'font-bold text-nightBlue' : 'text-gray-500'}`} 
                            onClick={() => handleLanguageChange('kz')}
                        >
                            KZ
                        </button>
                    </div>
                </ul>
            
            </nav>
            
   </header>
  );
}
