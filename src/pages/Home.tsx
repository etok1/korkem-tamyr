import logo from '../assets/svg/logoWithName.svg'
import { Figures } from '../components/Figures';
import { contents, ellipseConfig, figuresConfig } from '../utils/data';
import {Game} from '../components/Game';
import bg1 from '../assets/images/game1.png'
import bg2 from '../assets/images/game2.png'
import bg3 from '../assets/images/game3.png'
import podcastBg from '../assets/images/podcastBg.png'
import { NavLink } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { HistoryRow } from '../components/History';
import bookCover from '../assets/images/bookCover.png'
import SliderComponent from '../components/Slider/Slider';
import NotAvailable from '../components/NotAvailable';
import type {  historyType, ModalContentType } from '../utils/types';
import { useEffect, useState } from 'react';
import MyModal from '../components/Modal';
import ModalContentComp from '../components/ModalContentComp';
import tradKzIcon from '../assets/svg/tradKzIcon.svg'
import { motion } from 'framer-motion';
import { useLanguage } from '../utils/context';
const games = [
  {
    id: 1,
     bg: bg1,
 icon: (
    <svg xmlns="http://www.w3.org/2000/svg"   className='md:w-[182px] d:h-[182px]' viewBox="0 0 24 24" fill="none" stroke="#FFBE54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/></svg>
  )  },
  {
    id: 2,
     bg: bg2,
 icon: (
<svg xmlns="http://www.w3.org/2000/svg"  className='md:w-[182px] d:h-[182px]' viewBox="0 0 24 24" fill="none" stroke="#FF5724" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M17 3h4v4"/><path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"/><path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"/><path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"/><path d="M9.707 14.293 21 3"/></svg>  )  },
  {
    id: 3,
    bg: bg3,
    icon: (
<svg xmlns="http://www.w3.org/2000/svg"  className='md:w-[182px] d:h-[182px]' viewBox="0 0 24 24" fill="none" stroke="#97A13B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>  )
  }
]


const history: historyType[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12  sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" fill="none" stroke="#8C5E9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
    ),
    heading: 'Eternal Heritage: Traditions',
    text: 'Customs and traditions passed down from ancestors, bestowing spiritual wealth upon future generations.',
    link: '/history/heritage'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px]'   viewBox="0 0 24 24" fill="none" stroke="#8C5E9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"/><path d="M10 5H8a2 2 0 0 0 0 4h.68"/><path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"/><path d="M14 5h2a2 2 0 0 1 0 4h-.68"/><path d="M18 22H6"/><path d="M9 2h6"/></svg>
    ),
    heading: 'Traces of Mastery: Traditional Crafts',
    text: 'Artworks created by the hands of nomadic masters and their history',
    link: '/history/traditions'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" fill="none" stroke="#8C5E9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>
    ),
    heading: 'Taste and Tradition: National Cuisine',
    text: 'The national menu and the art of cooking passed down from generation to generation.',
    link: '/history/food'
  },
]



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idModal, setIdModal] = useState(0)
  const [modalContent, setModalContent] = useState<ModalContentType>()
const { language } = useLanguage();

  const findIdModal = (id:number) => {
    setIdModal(id);
  };

  const closeModalFromParent = () => {
    setIsModalOpen(false);
  };


   const openModal = () => {
    setIsModalOpen(true);
    
  };

  useEffect(() => {
      const findGameContent = () => {
    const content = contents.find((item) => item.id === idModal)
    setModalContent(content) 
  }
  if (idModal !== 0) {
    findGameContent();
  }
}, [idModal]);
  return (
   <>
    <section className="bg-gradient-to-br from-[#F1F1F1] to-[#FEF9F4] relative h-[50vh] xs:h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden " style={{ fontFamily: "Playpen Sans, cursive" }}>
        <div className="z-50 relative">
          <img src={logo} loading='lazy' alt="logo. Korkem Tamyr" className="mx-auto bg-[#FEF9F4] rounded-full w-[250px] sm:w-[180px] md:w-[300px] lg:w-[350px]" />
        </div>
      <div className="absolute inset-0 z-10">
        {figuresConfig.map((figure, index) => (
            <Figures key={index} type={figure.type} color={figure.color} className={figure.className} />
        ))}
      </div>
    </section>
       <section className='w-full bg-gradient-to-r h-[400px] xs:h-[450px] md:h-[55vh] from-paleGreen to-[#C5CC82] flex items-center justify-center text-center md:text-left z-[9999]' style={{  fontFamily: "Balsamiq Sans, sans-serif" }}>
        <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    ><div className='max-w-[1000px] w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 lg:gap-10 px-4 sm:px-6'>
          <div className='w-full md:w-1/2'>
            {language === 'kz' ? 
              <h2 className=' font-bold text-sm xs:text-lg sm:text-xl md:text-[22px] lg:text-3xl leading-7 sm:leading-[1.4] md:leading-[1.5] lg:leading-10'>
                <span className='text-greenColor'>Әлеуметтік-ағартушылық жоба,</span>,
  eболашақ ұрпаққа қазақтың <span className='text-greenColor'>тарихы мен мәдениетін</span>  сақтап, жеткізу мақсатында құрылған. 📖
              </h2> :
              <h2 className=' font-bold text-sm xs:text-lg sm:text-xl md:text-[22px] lg:text-3xl leading-7 sm:leading-[1.4] md:leading-[1.5] lg:leading-10'>
                <span className='text-greenColor'>A socio-educational project </span>,
  established with the goal of preserving and conveying <span className='text-greenColor'>the history and culture</span> of the Kazakh people to future generations. 📖
              </h2>
            }
          </div>

          <div className='w-full xs:w-2/3 md:w-1/2 flex flex-col items-center md:items-start gap-4 md:gap-6'>
            
            <p className='text-gray-500 font-medium text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-[1.6] lg:leading-10'>
              {language === 'en' ? 'We provide free developmental materials for kindergartens, so that children can learn about their national heritage from an early age.' : 'Біз балабақшаларға арналған тегін дамытушы материалдар ұсынамыз, балалар ұлттық мұрасын кішкентай кезінен білуі үшін.'}
            </p>
            <NavLink to={'/team'}><button className='border-2 border-greenColor text-greenColor font-semibold px-3 py-2 xs:px-4 xs:py-2 rounded-lg text-xs xs:text-sm sm:text-base md:text-sm hover:bg-greenColor hover:text-white transition-colors'>
              {language === 'en' ?'Our team' : 'Біздің тобымыз'}
            </button></NavLink> 
          </div>
        </div></motion.div>
      </section>
      <section className=' w-full h-[350px]  md:h-[500px] bg-lightYellow relative flex items-center justify-center'  style={{  fontFamily: "Shantell Sans, cursive" }} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-[-10%] xs:top-[-20%] ss:top-[-25%] sm:top-[-30%] md:top-[-18%] lg:top-[-20%] xl:top-[-30%] z-0'>
          <path fill="#FFDA77" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,112C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>  
        {ellipseConfig.map((ellipse, index) => (
          <div 
          key={index}
          className={`absolute transform z-0 ${ellipse.className}`}
        >
          <Figures type={ellipse.type} color={ellipse.color} />
        </div>
        ))}   
        <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }} className='z-[9999]'
    ><div className='max-w-[1200px] flex items-start justify-between w-full px-5 py-[120px]  gap-[5%] sm:justify-center'>
          <div className='w-1/3 h-full sm:w-[150px] lg:w-[250px] bg-gray-900'><img src={bookCover} alt="bookCover" className='w-full h-full'/></div>
          <div className='w-2/3 h-full text-left flex flex-col items-start justify-between'>
            <h2 className='text-xs xs:text-base sm:text-xl md:text-lg lg:text-4xl font-bold text-pigPink mb-2 md:mb-4'>{ language === 'en' ? '📚 Books for Children' : '📚Балаларға Арналған Кітаптар'}</h2> 
            <p className='text-[#6D6D6D] text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl mb-2 xs:mb-4'>
              { language === 'en' ?
               'Download and read our two free childrens books, "Kazakh History from A to Z" (available in Kazakh and English). These books cover various prominent figures from Kazakh history. From Abai Kunanbayuly to Manshuk Mametova, these books can serve as an introduction to Kazakh history for young readers. Order your free copy today!'
              : 
                '«Қазақ Тарихы А-дан І-ге дейін» атты екі тегін балалар кітабымызды қазір жүктеп алып, оқыңыз (қазақ және ағылшын тілдерінде). Бұл кітаптар қазақ тарихындағы түрлі тұлғалар қамтылған. Абай Құнанбайұлынан бастап Мәншүк Мәметоваға дейін – бұл кітаптар жас оқырмандар үшін қазақ тарихына кіріспе бола алады. Бүгін тегін көшірмеге тапсырыс беріңіз!'
              }</p>
            <NavLink to={'/books'}><button className='text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg bg-pigPink text-white font-semibold px-3 py-1 xs:px-5 xs:py-2 md:px-9 md:py-3 rounded-2xl hover:bg-coralColor transition-all duration-150 ease-in '  style={{  fontFamily: "Shantell Sans, cursive" }}>{language === 'en' ? 'Download' : 'Жүктеп алу'}</button></NavLink>
          </div>  
        </div> </motion.div>
      </section>
      <section className='w-full h-[300px] md:h-[300px] lg:h-[400px] bg-[#FAFAFA] flex flex-col items-center justify-center my-5 gap-4' style={{  fontFamily: "Shantell Sans, cursive" }}>
        {/* <div className='w-[100vw] h-full absolute bottom-0 flex items-end justify-between z-0 px-3'>
          <img src={filmFlowerIcon} alt="filmFlowerIcon" className='h-[100px] sm:h-[180px] md:h-[250px] lg:h-[330px]'/>
          <img src={filmFlowerIcon} alt="filmFlowerIcon" className='h-[100px] sm:h-[180px] md:h-[250px] lg:h-[330px]'/>
        </div>
        <div className='flex items-center justify-center w-[300px] h-[100px] bg-gray-900 px-3'></div> */}
        <h2 className='text-nightBlue font-bold sm:text-2xl'>Short film</h2>
        <NotAvailable/>
      </section>
      <section className='w-full h-[700px] xs:h-[850px] sm:h-[300px] md:h-[500px] bg-gradient-to-b from-skyBlue via-skyBlue to-white to-99% relative flex flex-col items-center justify-start rounded-tl-3xl rounded-tr-3xl px-3'  style={{  fontFamily: "Shantell Sans, cursive" }}>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blueColor mt-5'>{language === 'en' ? '🎲 Entertainment 🎨' : '🎲 Ойындар 🎨'}</h2>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-blueColor mt-3 font-normal'>{language === 'en' ? 'Games for children based on Kazakh culture and traditions' : 'Қазақ мәдениеті мен салт-дәстүріне негізделген балаларға арналған ойындар'}</p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-5 lg:gap-10 mt-10 md:mt-20'>
          {games.map((game) => (
              <Game id={game.id} icon={game.icon} bg={game.bg} onClick={openModal} giveIdToParent={findIdModal}/>  
          ))}
        </div>
        <MyModal isOpen={isModalOpen} onClose={closeModalFromParent}>
            <div>
              {modalContent?.content.map((languageBlock, blockIndex) => (
                <div key={blockIndex} className="space-y-6">
                  <div className="kz-content">
                    {languageBlock.kz.map((item, index) => (
                      <ModalContentComp item={item} key={index } stylesLink='text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200 mx-1' stylesText='text-gray-800 text-lg leading-relaxed'/>
                    ))}
                  </div>
                  
                  <div className="en-content border-t border-gray-200 pt-4">
                    {languageBlock.en.map((item, index) => (
                      <ModalContentComp item={item} key={index}  stylesLink='text-blue-500 hover:text-blue-700 underline font-medium transition-colors duration-200 mx-1' stylesText='text-gray-600 text-base leading-relaxed'/>
                    ))}
                  </div>
                </div>
              ))}
            </div>
         
        </MyModal>
      </section>
      <section className="w-full h-[550px] xs:h-[600px] md:h-[800px] lg:h-[850px] relative flex flex-col items-center justify-start rounded-tl-3xl rounded-tr-3xl" style={{ fontFamily: "Shantell Sans, cursive" ,backgroundImage: `url(${podcastBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='w-full z-[9999] flex flex-col items-center justify-start mt-10 px-3'>
          <h2 className='text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-gray-700 '>{language === 'en' ? '🎧 Podcasts' : '🎧 Подкасты'}</h2>
          <p className='text-xs xs:text-sm sm:w-[80%] md:text-base lg:text-lg lg:w-[50%] lg:leading-8 mt-3 md:mt-5 lg:mt-7 font-medium leading-5 text-[#6D6D6D]'>{language === 'en' ?
          'In our podcast, you can feel the spirit of Kazakh history up close and authentically through conversations with scholars and our relatives.' 
          :
          'Біздің подкастымызда — ғалымдармен және туыстарымызбен әңгімелер арқылы қазақ тарихының рухын жақыннан әрі шынайы сезіне аласыз.' 
          }</p>
          <div className='w-full max-w-full mt-10 md:mt-16 flex flex-col items-center justify-center gap-16 md:gap-20'>
            <div className='w-60 sm:w-80'> 
              <SliderComponent />
            </div>
            <NavLink to='/podcasts'><button className='flex items-center justify-center gap-4 rounded-2xl bg-blueColor text-xs xs:text-sm lg:text-base lg:py-3 lg:px-8 py-2 px-5 text-lightBlue font-bold'>{language === 'en' ? 'Listen 🎙️' : 'Тыңда 🎙️'}<span> <MoveRight color='#A7B5FE'/></span></button></NavLink>
          </div>
        </div>
        
        <div className='w-full max-h-[980px] h-full  absolute bg-[#FFD36E] opacity-85 z-0'></div>
      </section>
      <section className="w-full h-[500px] xs:h-[550px] md:h-[600px] lg:h-[650px] bg-lavenderColor relative flex flex-col items-center justify-start" style={{ fontFamily: "Shantell Sans, cursive"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  className='absolute top-[-12%] xs:top-[-15%] sm:top-[-22%] md:top-[-25%] xl:top-[-35%] z-0'><path fill="#CA9FDD" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,165.3C672,160,768,128,864,106.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className='z-[9999] flex flex-col items-center justify-center w-full px-3'>
          <h2 className='text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purpleColor mt-5 md:mt-3' style={{ fontFamily: 'Montserrat, sans-serif'}}>{language === 'en' ? '📜 Features of History and Traditions' : '📜 Тарих пен дәстүрлердің ерекшеліктері'}</h2> 
          <p className='text-xs xs:text-sm sm:text-base md:w-[80%] lg:text-xl mt-3 lg:mt-5 font-medium leading-4 text-stone-500'>{language === 'en' ?
            'If you want to learn more about the customs, culture, and traditions of Kazakh heritage, check out our sections!' : 
            'Қазақ мұрасының салт-дәстүрлері, мәдениеті мен ырымдары туралы көбірек білгіңіз келсе, біздің бөлімдерді қараңыз!'
          }</p>
          <motion.div
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
          <div className='w-full flex flex-col items-center justify-center gap-7 mt-10 lg:mt-20'>{history.map((h) => (
             <HistoryRow icon={h.icon} heading={h.heading} text={h.text} link={h.link}/>
          ))}
          
         </div>
         </motion.div>
         <div className='absolute top-0 lg:top-32 left-0 lg:left-5 -z-10 opacity-25'>
              <img 
                src={tradKzIcon} 
                alt="tradKzIcon" 
                className='w-full h-full object-contain'
              />
            </div>
            <div className='absolute top-0 lg:top-32 right-0 lg:right-5 -z-10 opacity-25'>
                <img 
                  src={tradKzIcon} 
                  alt="tradKzIcon" 
                  className='rotate-180'
                />
            </div>    
        </div>
      </section>
      <section className="w-full h-[250px] md:h-[400px] flex flex-col items-center justify-start gap-5 mb-16" style={{ fontFamily: "Shantell Sans, cursive"}}>
        {/* <div className='bg-paleGreen flex flex-col items-center justify-start rounded-3xl p-5 max-h-[280px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] h-full w-[95%] lg:w-[80%] xl:w-[60%]'>
          <h2 className='font-bold text-base xs:text-lg sm:text-xl md:text-3xl lg:text-4xl text-greenColor'>🎭 Muppet show </h2>
          <p className='text-xs sm:text-sm md:text-base text-[#6D6D6D40] font-semibold mt-2 lg:mt-2'>Біздің шоуымыздан фотосуреттер</p>
          <div className='flex  items-center justify-center gap-5 xs:gap-7 sm:gap-10 mt-7 md:mt-12'>
            <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-2xl bg-slate-700'></div>
            <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px]  rounded-2xl bg-slate-700'></div>
            <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] rounded-2xl bg-slate-700'></div>
          </div>
          <NavLink to='/'><button className='flex items-center justify-center text-xs sm:text-sm md:text-base gap-4 rounded-2xl bg-greenColor py-2 px-5 md:py-3 md:px-7 text-paleGreen font-bold mt-7 md:mt-13 lg:mt-16'>Толығырақ біліңіз 🎙️ <span> <MoveRight color='#BEDA9D'/></span></button></NavLink>

        </div> */}
        <h2 className='font-bold text-base xs:text-lg sm:text-xl md:text-3xl lg:text-4xl text-nightBlue mt-10' style={{ fontFamily: 'Montserrat, sans-serif'}}>🎭 Muppet show </h2>
         <NotAvailable/>
      </section>
      
   </>
  );
}

// const games = [
//   {
//     color: '#FF8237',
//     heading: 'Бояулар кітабы',
//  icon: (
//     <svg xmlns="http://www.w3.org/2000/svg"   className='md:w-[182px] d:h-[182px]' viewBox="0 0 24 24" fill="none" stroke="#FFBE54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/></svg>
//   )  },
//   {
//     color: '#FF8BB4',
//     heading: 'Мақсаты',
//  icon: (
// <svg xmlns="http://www.w3.org/2000/svg"  className='md:w-[182px] d:h-[182px]' viewBox="0 0 24 24" fill="none" stroke="#FF5724" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M17 3h4v4"/><path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"/><path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"/><path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"/><path d="M9.707 14.293 21 3"/></svg>  )  },
//   {
//     color: '#B3D07E',
//     heading: 'Біз не істейміз?',
//     icon: (
// <svg xmlns="http://www.w3.org/2000/svg"  className='md:w-[182px] d:h-[182px]' viewBox="0 0 24 24" fill="none" stroke="#97A13B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>  )
//   }
// ]