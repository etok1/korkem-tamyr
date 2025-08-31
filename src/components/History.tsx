import { MoveRight } from "lucide-react";
import type { historyType } from "../utils/types";
import { NavLink } from "react-router-dom";

export function HistoryRow({icon, heading, text, link}:historyType ) {
  return (
    <div className='md:max-w-[700px] sm:max-w-[85%] w-full h-full xs:h-[80px] md:h-[95px] flex items-center justify-between bg-whitishColor rounded-[35px] py-1 px-4 xs:py-4 xs:px-5 md:py-6 md:px-6 lg:py-10 lg:px-7 shadow-lg transition-all duration-150 ease-in' style={{ fontFamily: "Playpen Sans, cursive" }}>
        <div className="flex items-center justify-center text-left gap-3 md:gap-5">
            <div>{icon}</div>
            <div className="flex flex-col items-start justify-center h-full gap-1">
                <h3 className="text-xs line-clamp-1 xs:text-lg sm:text-xl font-semibold lg:text-2xl text-purpleColor" >{heading}</h3>
                <p className="text-[10px] w-[90%] xs:text-xs sm:text-sm leading-3 line-clamp-1 sm:leading-5 font-medium text-[#B5B5B5]" style={{ fontFamily: 'Montserrat, sans-serif'}}>{text}</p>
            </div>
        </div>
        <div>    <NavLink to={link}><MoveRight strokeWidth={5} color="#8C5E9F" className="cursor-pointer w-6 h-6 sm:w-10 sm:h-10 hover:translate-x-1 transition-all duration-150 ease-in"/></NavLink></div>
    </div>
  );
}