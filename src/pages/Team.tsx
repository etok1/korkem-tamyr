import Member from "../components/Member"
import member8 from '../assets/images/member8.png'
import member7 from '../assets/images/member7.png'
import member6 from '../assets/images/member6.png'
import member5 from '../assets/images/member5.png'
import member4 from '../assets/images/member4.png'
import member3 from '../assets/images/member3.png'
import member2 from '../assets/images/member2.png'
import member1 from '../assets/images/member1.png'
import { Figures } from "../components/Figures"
import { circlesConfig } from "../utils/data"

const members = [
    {
        image: member1,
        name: 'Tomiris',
        position: 'Founder & Executive Director',
        color: '#FF8237',
        circleColor: '#FEB18730',
        nickname: 'tomi.abylkairova',
        link: 'https://www.instagram.com/tomi.abylkairova?igsh=MTJyZDg0M2ttMGtwaA=='
    },
    {
        image: member2,
        name: 'AIDA',
        position: 'Screenwriter & muppet show coordintared',
        color: '#5966B1',
        circleColor: '#93AECA44',
        nickname: 'adleaida',
        link: 'https://www.instagram.com/adleeaida?igsh=dG10bG9pYnV1d3Q3'
    },
    {
        image: member3,
        name: 'MADINA',
        position: 'Cultural Games & Toy Designer',
        color: '#97A13B',
        circleColor: '#BEDA9D30',
        nickname: 'm.nimva',
        link: 'https://www.instagram.com/m.nimva?igsh=anFvaWUwMTVpYW9p  '
    },    
    {
        image: member4,
        name: 'SATTI',
        position: 'Outreach & Curriculum, Development Coordinator',
        color: '#8C5E9F',
        circleColor: '#CA9FDD30',
        nickname: 'sattimxt',
        link: 'https://www.instagram.com/sattimxt?igsh=cngxZGdteTNibndw'
    },    
    {
        image: member5,
        name: 'Mariyam',
        position: 'Social Media & Visual, Culture Assistant',
        color: '#F49AA2',
        circleColor: '#FF687530',
        nickname: 'klbtr_m',
        link: 'https://www.instagram.com/klbtr_m?igsh=ZHI5emh6bXFubW8y'
    },    
    {
        image: member6,
        name: 'Aisha',
        position: 'Podcast Director',
        color: '#FCC586',
        circleColor: '#FFAA6E30',
        nickname: 'syzdykais',
        link: 'https://www.instagram.com/syzdykais?igsh=MWdxbTNmcGZidWMxcw=='
    },    
    {
        image: member7,
        name: 'Aidana',
        position: 'Content & Highlight Lead',
        color: '#8C93C7',
        circleColor: '#5966B130',
        nickname: 'aidana.karat',
        link: 'https://www.instagram.com/aidana.karat?igsh=bHBwMzYwZ2prZ2R4'
    },    
    {
        image: member8,
        name: 'Inkar',
        position: 'Short Film Animator',
        color: '#B3D07E',
        circleColor: '#97A13B30',
        nickname: 'iko.armm',
        link: 'https://www.instagram.com/iko.armn?igsh=NmQxb2x1amNwZ2I0'
    },
]

export default function Team(){
    return(
        <>
        <section className=" relative" >
            <h1 className="text-lg xs:text-xl sm:text-3xl font-bold lg:text-5xl text-purple-700 m-12"  style={{  fontFamily: "Playpen Sans, cursive" }}>
                <span className="animate-wiggle">🌟</span> Наша команда! <span className="animate-wiggle">🌟</span>
            </h1>
            <div className="max-w-[1400px] w-full m-auto flex flex-wrap items-center justify-center gap-10 mt-10 xs:mt-14 z-50 px-3 md:mt-20 mb-10">
                {members.map((member) => (
                    <Member image={member.image} name={member.name} position={member.position} color={member.color} circleColor={member.circleColor} nickname={member.nickname} link={member.link} />
                ))}
            </div>
            {circlesConfig.map((circle, index)=> (
                <div key={index} className={`absolute transform -z-50 !opacity-100 ${circle.className}`}>
                    <Figures type={circle.type} color={circle.color} className={`${circle.size}`}></Figures>
                </div>
            ))}
        </section>
        </>
    )
}