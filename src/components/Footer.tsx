import { Link, NavLink } from "react-router-dom";
import { navigationFooter } from "../utils/data";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Footer(){

   

    return(
        <footer className="mt-auto py-4 bg-blueColor w-full h-[450px] "  style={{  fontFamily: "Shantell Sans, cursive" }}>
            <div className="max-w-[1200px] w-full h-full m-auto  flex flex-col items-center justify-between">
                <div style={{ fontFamily: 'Montserrat Alternates, sans-serif'}}>
                    <h2 className="text-lg lg:text-4xl font-extrabold text-skyBlue tracking-[0.2em]" >Korkem Tamyr</h2>
                    <p className="text-xs lg:text-[15px] mt-0 lg:tracking-[0.15em] text-[#93AECA75] font-medium">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start justify-between w-full xs:w-[90%] text-left px-3">
                    <div className="text-dirtBlue">
                        <h3 className="text-white text-sm xs:text-base md:text-xl lg:text-2xl font-semibold">Contacts:</h3>
                        <p className="group"><NavLink className="text-xs xs:text-sm md:text-base  flex items-center gap-1 xs:gap-2 mt-2 group-hover:text-white transition-all duration-150" to={''}><Phone color="#8C93C7"  className="w-[16px] h-[16px] xs:w-[20px] xs:h-[20px] group-hover:stroke-white transition-stroke duration-150"/>+7 700 111 5555</NavLink></p>
                        <p className="group"><NavLink className="text-xs xs:text-sm md:text-base  flex items-center gap-1 xs:gap-2  mt-1 group-hover:text-white transition-all duration-150" to={''}><Mail color="#8C93C7"  className="w-[16px] h-[16px] xs:w-[20px] xs:h-[20px] group-hover:stroke-white transition-stroke duration-150"/>korkemtamyr@gmail.com</NavLink></p>
                    </div>
                    <div className="mt-5 xs:mt-7 sm:mt-0">
                        <h3 className=" text-sm  xs:text-base  md:text-xl text-white lg:text-2xl font-semibold">Navigation:</h3>
                        <ul className="grid grid-cols-2 gap-x-8 mt-2">
                            {navigationFooter.map((nav) => (
                                <li className='text-dirtBlue text-left py-1 font-medium text-xs xs:text-sm lg:text-base capitalize hover:text-white transition-all duration-150 '><NavLink to={nav.link}>{nav.name}</NavLink></li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center self-end sm:self-start gap-2">
                        <Link to={''} className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] flex items-center justify-center  rounded-xl bg-[#93AECA35] "><Instagram color="#93AECA" className="w-[20px] h-[20px]  xs:w-[30px] xs:h-[30px]"/></Link>
                        <Link to={''} className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] flex items-center justify-center rounded-xl bg-[#93AECA35] "><Youtube color="#93AECA" className="w-[20px] h-[20px]  xs:w-[30px] xs:h-[30px]"/></Link>
                    </div>
                </div>
                
                <div className="w-full px-5">
                    <div className="h-[2px] w-full bg-skyBlue"></div>
                    <div className="text-xs xs:text-sm text-skyBlue mt-3">
                        <p>© 2024-2025 Korkem tamyr</p>
                        <span>Made by Gdgkds</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}