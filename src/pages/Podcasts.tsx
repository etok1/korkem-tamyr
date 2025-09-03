import podcastLogo from '../assets/images/podcastLogo.png'
import PodcastOption from '../components/PodcastOption'
import { podcasts } from '../utils/data'

export default function Podcasts(){

    return(
        <div className="bg-whitishColor flex flex-col p-4 md:p-8 max-w-[1100px] mx-auto h-full" style={{ fontFamily: "Shantell Sans, cursive" }}>
            <div className=" flex flex-col-reverse items-start justify-center md:flex-row md:gap-10 lg:gap-16 text-left ">
                <img src={podcastLogo} loading='lazy' alt="podcasts section logo" className='max-w-[300px] w-full mt-5 md:mt-0 rounded-lg shadow-lg'/>
                <div>
                    <h1 className="font-bold text-xl text-nightBlue mt-2 md:mt-0 lg:text-5xl" style={{ fontFamily: "Montserrat, sans-serif" }}>Korkem Tamyr podcasts</h1>
                    <p className="text-blueColor text-sm font-medium mt-2 lg:mt-5">Біз бұл подкасттарды қазақ тілінде жазып, ана тіліміздің әуезін сақтап, мәдениетімізді жергілікті де, шетелдік те тыңдармандарға жеткізуді мақсат етеміз.</p>
                </div>
            </div>
            <p  className='text-nightBlue text-xs font-light md:text-sm md:leading-6 leading-5 text-left mt-6 lg:mt-20 lg:text-lg border-l-2 border-l-skyBlue pl-4'>Біздің подкастарымыздың мақсаты – қазақ мәдениетін әртүрлі тыңдармандарға қолжетімді әрі түсінікті ету. Біз оларды әдейі қазақ тілінде жүргіземіз: шетелдіктер үшін бұл – тіліміздің әсем әуезін естіп, қазақтың бай мәдениетімен танысудың мүмкіндігі, ал жерлестеріміз үшін – өз мұрасын тереңірек тануға себеп. Осылайша подкастар тек дәстүр, музыка, сән мен аңыздар жайлы білім көзі ғана емес, мәдениеттер арасындағы диалогқа шақырушы құрал болып, тілді үйренуге және Қазақстанды жақыннан тануға ынталандырады.</p>
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