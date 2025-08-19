// interface GameProps {
//   icon: React.ReactNode;
//   bg: string;
// }

export function Game({ icon, bg }) {
  return (
    <div className='relative w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] sm:w-[130px] sm:h-[130px] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px] flex items-center justify-center group '>
      <img 
        src={bg} 
        alt='game background' 
        className='absolute z-0 w-full h-full object-cover rounded-full shadow-md transition-all duration-150 group-hover:scale-105'
      />
      
      <div className='relative z-10 w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 flex items-center justify-center'>
        {icon}
      </div>
    </div>
  );
}

{/*<div className='w-[330px] h-[330px] relative rounded-full flex flex-col items-center justify-between'  style={{ backgroundColor: color }}>
    

   </div> <div className='absolute top-0 w-full'>
         <ReactCurvedText
            width={300}
            height={200}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={60}
            reversed={true}
            text={heading}
            textProps={{ style: { fontSize: 36, fill: 'white', zIndex: '0' } }}
          
        />
    </div>
    <div className="z-10 flex items-center justify-center">
        {icon}
    </div>
        <div className='absolute bottom-0 w-full'>
          <ReactCurvedText
            width={300}
            height={200}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={60}
            reversed={false}
            text={heading}
            textProps={{ style: { fontSize: 36, fill: 'white', zIndex: '0' } }}
          
        />
    </div> */}