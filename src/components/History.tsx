import { MoveRight } from "lucide-react";
import type { historyType } from "../utils/types";

export function HistoryRow({icon, heading, text}:historyType ) {
  return (
    <div className='lg:max-w-[900px] sm:max-w-[85%] w-full h-full xs:h-[80px] md:h-[95px] flex items-center justify-between bg-whitishColor rounded-[35px] py-2 px-4 xs:py-4 xs:px-5 md:py-6 md:px-6 lg:py-10 lg:px-7' style={{ fontFamily: "Shantell Sans, cursive"}}>
        <div className="flex items-center justify-center text-left gap-3 md:gap-5">
            <div>{icon}</div>
            <div>
                <h3 className="text-sm xs:text-lg sm:text-xl font-semibold lg:text-2xl text-purpleColor" >{heading}</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm leading-3 sm:leading-5 font-medium text-[#B5B5B5]" style={{ fontFamily: 'Montserrat, sans-serif'}}>{text}</p>
            </div>
        </div>
        <div>    <MoveRight width={35} height={35} color="#8C5E9F" className="cursor-pointer w-5 h-5"/></div>
    </div>
  );
}