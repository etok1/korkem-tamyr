import engBook from '../assets/pdf/Kazakh_History_A_to_Z_Complete_Final( in English ).pdf'
import engBookCover from '../assets/images/bookCover.png'
import kzBook from '../assets/pdf/Kazakh History Book from A to Z( in Kazakh).pdf'
import kzBookCover from '../assets/images/bookCover2.png'


 const circles = [
  {
   color: "#BEDA9D30",
    className: "top-[1%] left-[45%]",
 
  },
  {
   color: "#FEB18730",
    className: "bottom-[27%] right-[45%]",
 
  },
  {
color: "#FF8BB430",
    className: "top-[50%] left-[20%] ",
   
  },
  {
  color: "#B3D07E30",
    className: "top-[10%] right-[15%] ",
    
  },
  {
     color: "#F49AA230",
    className: "bottom-[25%] right-[5%] ",
    
  },
  {
    color: "#93AECA30",
    className: "bottom-[10%] left-[5%] ",
    
  },
  {
  color: "#FF8BB430",
    className: "top-[10%] right-[15%] ",
    
  },
  {
        color: "#FF823730",
    className: "top-[10%] left-[15%] ",
    
  },
];

export default function Books(){
    return(
       
        <section className=" relative z-10 bg-whitishColor h-max"  style={{ fontFamily: "Playpen Sans, cursive" }}>
            <div className="mt-10 ml-7 text-left lg:mt-14">
                <h1 className="text-lg xs:text-xl sm:text-3xl font-extrabold lg:text-5xl text-purpleColor  ">
                📚 Наши бесплатные книги!
                </h1>
                <p className="text-mistPurple pl-7 text-xs mt-0 xs:mt-1 xs:pl-8 sm:text-sm sm:pl-12 lg:pl-20 lg:text-base">Скачайте их по ссылкам ниже!👇</p>
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg"  className="absolute top-[10%] xs:top-[8%] sm:top-[7%] md:top-[5%] lg:top-[6%] xl:top-[2%] 2xl:top-[-4%] z-0" viewBox="0 0 1440 320"><path fill="#8C5E9F" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="flex flex-wrap items-center justify-center bg-purpleColor h-full mt-32 pb-20 pt-10 gap-10 z-50">
                <div className="w-full flex flex-wrap  items-center justify-center px-3 gap-10 md:gap-16 md:justify-center xs:justify-evenly ">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-16 lg:gap-20 px-4 sm:px-0">
                        <div className="w-[280px] h-[470px]  rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group transition-all duration-300 flex flex-col z-50">
                            <div className="relative flex-1 overflow-hidden">
                                <img 
                                    src={kzBookCover}  loading='lazy'
                                    alt="Обложка: Қазақ Тарихы" 
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-4 bg-[#FAFAF9] border-t border-gray-100">
                                <h3 className="text-purpleColor font-bold text-lg mb-3">Қазақ Тарихы</h3>
                                <a
                                    href={kzBook}
                                    download="Kazakh_History_KZ.pdf"
                                    className="block w-full bg-purpleColor text-sm hover:bg-blueColor  text-white text-center py-2 rounded-lg transition-colors duration-300 font-medium"
                                >
                                    📩 Скачать PDF
                                </a>
                            </div>
                        </div>
                        <div className="w-[280px] h-[470px] rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group transition-all duration-300 flex flex-col z-50">
                            <div className="relative flex-1 overflow-hidden">
                                <img 
                                    src={engBookCover}  loading='lazy'
                                    alt="Cover: Kazakh History" 
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-4 bg-[#FAFAF9] border-t border-gray-100">
                                <h3 className="text-purpleColor  font-bold text-lg mb-3">Kazakh History</h3>
                                <a
                                    href={engBook}
                                    download="Kazakh_History_EN.pdf"
                                    className="block w-full bg-purpleColor text-sm hover:bg-blueColor  text-white text-center py-2 rounded-lg transition-colors duration-300 font-medium"
                                >
                                    📩 Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              {circles.map((circle, index)=> (
                            <div key={index} className={`absolute transform z-10 ${circle.className}`}>
                                <svg viewBox="0 0 100 100" className='w-10 h-10'>
                                    <circle cx="50" cy="50" r="50" fill={circle.color} />
                                </svg>
                            </div>
                        ))}
        </section>
       
    )
}