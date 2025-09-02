import { NavLink } from "react-router-dom";
import { formattedText } from "../utils/formatText";


interface ArticleProps {
  text: string;
  id: number;
  name: string;
  img?: string;
  category: string
}


export default function Article({img, name = '', text = '', id, category}: ArticleProps){



    return(
        <div className='w-[300px] h-[470px] flex flex-col sm:flex-row md:flex-col sm:w-fit sm:h-fit md:w-[300px] md:h-[470px] bg-whitishColor rounded-lg hover:shadow-lg transition-shadow duration-150 ease-in' >
            <div className='w-[300px] h-[300px] sm:w-full sm:h-full md:w-[300px] md:h-[300px] overflow-hidden relative group'>
                <img className="h-full w-full rounded-tl-lg rounded-tr-lg z-10 object-cover" loading='lazy' src={img} alt={name} />
                <div className="bg-black opacity-0  absolute inset-0 group-hover:opacity-30 transition-opacity duration-300 z-20"></div>
            </div>
            <div className="flex flex-col justify-between px-3 py-2 text-left">
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base lg:text-[15px]">{name}</h3>
                <p className="flex sm:hidden md:flex text-gray-600 font-medium text-xs lg:text-xs sm:text-sm md:text-xs md:leading-6 md:w-full sm:leading-7 sm:w-[85%] lg:mt-3 leading-6 lg:leading-5 mb-0" style={{ fontFamily: 'Montserrat, sans-serif'}}>{formattedText(text, 130)}</p>
                <p className="hidden sm:flex md:hidden text-gray-600 font-medium text-xs lg:text-xs sm:text-sm md:text-xs md:leading-6 md:w-full sm:leading-7 sm:w-[85%] lg:mt-3 leading-6 lg:leading-5 mb-0" style={{ fontFamily: 'Montserrat, sans-serif'}}>{formattedText(text, 150)}</p>
                <NavLink to={`/history/${category}/${id}`} className='text-xs underline mt-1 font-semibold text-purple-600 self-end justify-self-end hover:text-purple-400 transition-all duration-150 ease-in'>Толығырақ оқу →</NavLink>
            </div>
        </div>
    )
}