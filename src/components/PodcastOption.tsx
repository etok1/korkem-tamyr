// import { formattedText } from "../utils/formatText";

import { NavLink } from "react-router-dom"

interface podcastProps{
    id: number,
    name: string,
    duration: string,
    text: string,
    image: string
}

export default function PodcastOption({id, name, duration, text, image}:podcastProps){

    return(
<div className="bg-gradient-to-br from-white via-lavenderColor/5 to-lavenderColor/20 text-nightBlue flex flex-row p-5 md:p-7 max-w-[1100px] w-full mx-auto text-left gap-5 md:gap-7 lg:gap-9 cursor-pointer border border-gray-100 shadow-md group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out rounded-xl" style={{ fontFamily: "Balsamiq Sans, sans-serif" }}>             <div className="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 lg:w-[150px] lg:h-[150px] overflow-hidden flex-shrink-0 rounded-lg">
                <img src={image} loading='lazy' alt={name} className="w-full h-full object-cover block group-hover:scale-105 transition-all duration-150 ease-in-out" />
            </div>
            <div className="flex flex-col justify-between flex-1">
                <h2 className="text-sm line-clamp-2 leading-tight md:text-lg lg:text-2xl font-bold group-hover:text-[#0369A1] mb-3"  style={{ fontFamily: "Montserrat, sans-serif" }}>{name}</h2>
                <p className=" p-1 backdrop-blur-md bg-[#0369A1]/10 font-bold w-fit rounded-lg text-[10px] xs:text-[11px] lg:text-xs border border-[#0369A1]/20 mb-3" >⏱️ {duration} min</p>
                <p className="text-[10px] md:w-[80%] lg:text-sm md:text-sm md:leading-6 line-clamp-2 xs:line-clamp-3 lg:leading-6 text-dustyPurple  mb-3 capitalize">{text}</p>

<div className="flex items-center justify-center text-center bg-gradient-to-r from-nightBlue/90 to-[#0369A1] text-white px-3 py-1 rounded-xl  w-fit text-[10px] hover:shadow-lg transition-all duration-300 transform group-hover:translate-x-1">
                <NavLink to={`/podcast/${id}`} className="flex items-center gap-2">
                    Listen now 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </NavLink>
            </div>
            
            {/* <div className="md:hidden flex items-center gap-1 text-[#0369A1] font-medium text-sm py-2 px-3 bg-[#0369A1]/10 rounded-lg">
                <NavLink to={`/podcast/${id}`} className="flex items-center gap-1">
                    Listen
                    <span>→</span>
                </NavLink>
            </div> */}
            
            </div>
            
        </div>
    )
}