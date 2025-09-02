import type { GamesType } from "../utils/types";

export function Game({ id, icon, bg, onClick, giveIdToParent }:GamesType) {
  return (
      <div onClick={() => {
        onClick()
        giveIdToParent(id)
      }} className='cursor-pointer relative w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] sm:w-[130px] sm:h-[130px] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px] flex items-center justify-center group '>
        <img 
          src={bg}  loading='lazy'
          alt='game background' 
          className='absolute z-0 w-full h-full object-cover rounded-full shadow-md transition-all duration-150 group-hover:scale-105'
        />
        
        <div className='relative z-10 w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 flex items-center justify-center'>
          {icon}
        </div>
      </div>
  );
}
