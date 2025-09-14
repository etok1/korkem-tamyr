import { motion } from 'framer-motion'
import podcastLogo from '../assets/images/podcastLogo.png'
import PodcastOption from '../components/PodcastOption'
import { podcasts } from '../utils/data'

export default function Podcasts(){

    return(
        <div className="bg-whitishColor flex flex-col p-4 md:p-8 max-w-[1100px] mx-auto h-full" style={{ fontFamily: "Shantell Sans, cursive" }}>
            <div className=" flex flex-col-reverse items-start justify-center md:flex-row md:gap-10 lg:gap-16 text-left ">
                <img src={podcastLogo} loading='lazy' alt="podcasts section logo" className='max-w-[300px] w-full mt-5 md:mt-0 rounded-lg shadow-lg'/>
                <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    ><div>
                    <h1 className="font-bold text-xl text-nightBlue mt-2 md:mt-0 lg:text-5xl" style={{ fontFamily: "Montserrat, sans-serif" }}>Korkem Tamyr podcasts</h1>
<p className="text-blueColor text-sm font-medium mt-2 lg:mt-5">We produce these podcasts in the Kazakh language to preserve the beauty of our native tongue and share our culture with both local and international audiences.</p>
</div></motion.div>
</div>
<motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    ><p className='text-nightBlue text-xs font-light md:text-sm md:leading-6 leading-5 text-left mt-6 lg:mt-20 lg:text-lg border-l-2 border-l-skyBlue pl-4'>The goal of our podcasts is to make Kazakh culture accessible and understandable to diverse audiences. We intentionally conduct them in Kazakh: for international listeners, this is an opportunity to hear the beautiful sound of our language and become acquainted with the rich Kazakh culture, while for our compatriots, it's a chance to deepen their understanding of their own heritage. Thus, the podcasts serve not only as a source of knowledge about traditions, music, fashion, and legends but also as an invitation to intercultural dialogue, encouraging language learning and fostering a closer connection to Kazakhstan.</p></motion.div>
            <div className='mt-5 lg:mt-10'>
                <div className='flex flex-row gap-3'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className=' w-3 lg:w-5 aspect-square rounded-full' style={{
                background: `linear-gradient(to bottom, #1E3A8A 0%, #8C93C7 100%)`,
              }}></div>
                    ))}
                </div>
            </div>
            <div className='mt-5 lg:mt-8 flex flex-col gap-5'>
                {podcasts.map((podcast) => (
                <PodcastOption id={podcast.id} name={podcast.name} duration={podcast.duration} text={podcast.text} image={podcast.image}/>
                ))}
                
            </div>
        </div>
    )
}