import engBook from '../assets/pdf/Kazakh History A to Z - English Updated Cover.pdf'
import BookCover from '../assets/images/bookCover.png'
import kzBook from '../assets/pdf/Kazakh History Book from A to Z - (Kazakh )Cover.pdf'
import { motion } from 'framer-motion';
import { useLanguage } from '../utils/context';


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

const books = [
        {
            title: "Қазақ Тарихы",
            img: BookCover,
            file: kzBook,
            name: "Kazakh_History_KZ.pdf",
            button: "📩 Жүктеп алу",
        },
        {
            title: "Kazakh History",
            img: BookCover,
            file: engBook,
            name: "Kazakh_History_EN.pdf",
            button: "📩 Download PDF",
        },
        ]
export default function Books(){
const {language} = useLanguage()
    return( 
    <section
    className="relative z-10 bg-whitishColor min-h-screen font-[Playpen_Sans]"
    >
    <div className="text-center pt-16 px-5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purpleColor">
        {language==='en' ? '📚 Our Free Books' : '📚 Біздің тегін кітаптарымыз'}
        </h1>
        <p className="text-mistPurple text-sm sm:text-base mt-2">
            {language==='en' ? 'Download two versions below 👇' : 'Төменде екі нұсқаны жүктеп алыңыз 👇'}
        </p>
    </div>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
    >
        <path
        fill="#8C5E9F"
        fillOpacity="0.07"
        d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L0,0Z"
        ></path>
    </svg>

    <div className="relative flex flex-wrap justify-center items-start gap-10 px-6 py-16 lg:py-20 z-10">
        {books.map((book, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="w-[280px] sm:w-[300px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
        >
            <div className="relative h-[380px] flex items-center justify-center bg-gray-50">
            <img
                src={book.img}
                alt={book.title}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
            <h3 className="text-purpleColor font-bold text-lg mb-3 text-center">
                {book.title}
            </h3>
            <a
                href={book.file}
                download={book.name}
                className="block w-full text-center text-white bg-purpleColor hover:bg-blueColor font-medium py-2 rounded-lg transition-colors duration-300"
            >
                {book.button}
            </a>
            </div>
        </motion.div>
        ))}
    </div>

    {circles.map((circle, index) => (
        <div
        key={index}
        className={`absolute transform ${circle.className}`}
        style={{
            animation: "float 8s ease-in-out infinite",
            animationDelay: `${index * 1.3}s`,
        }}
        >
        <svg viewBox="0 0 100 100" className="w-10 h-10 opacity-100">
            <circle cx="50" cy="50" r="50" fill={circle.color} />
        </svg>
        </div>
    ))}
    </section>
    )
}