import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import type { memberType } from "../utils/types";



export default function Member({image, name, position, color, circleColor, nickname, link}:memberType){
    return(
        <div className="md:max-w-[400px] md:max-h-[534px] h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out" style={{  fontFamily: "Shantell Sans, cursive" }}>
            <div className="md:max-w-[400px] md:max-h-[400px] h-full relative overflow-hidden group">
                <img src={image} loading='lazy' alt={name} className="group-hover:scale-105 transition-all duration-150 "/>
                <div className="absolute py-1 px-2 group-hover:px-3 rounded-xl bg-headerWhite z-50 bottom-3 left-3  flex flex-row items-center justify-center w-max group "  style={{  fontFamily: "Playpen Sans, cursive" }}>
                    <Link to={link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2">
                        <Instagram color="#E4405F"  className="w-5 h-5"/>
                        <p className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[120px]  text-gray-700 font-medium font-in text-xs  transition-all duration-300 ease-in-out">@{nickname}</p>
                    </Link>
                </div>
            </div>
            <div className={` max-w-[400px] h-[100px] relative flex flex-col items-center justify-center rounded-b-xl`}   style={{ backgroundColor: color }} >
                <h2 className="text-sm xs:text-base font-bold uppercase lg:text-xl">{name} 🌸</h2>
                <p className="text-xs xs:text-sm mt-1">{position}</p>
                <div className="absolute right-4 top-5 w-[40px] h-[40px] rounded-full" style={{ backgroundColor: circleColor }} ></div>
                <div className="absolute left-5 bottom-9 w-[25px] h-[25px] rounded-full" style={{ backgroundColor: circleColor }} ></div>
            </div>
        </div>
    )
}