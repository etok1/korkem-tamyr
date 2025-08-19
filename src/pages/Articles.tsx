import { useParams } from "react-router-dom"
import Article from "../components/Article"
import { articles } from "../utils/data"

export default function Articles(){

const {categoryId} = useParams()

const categoryData = articles.find(article => article.id === categoryId)
console.log(categoryData) 
    console.log(categoryId) 
    return(
        <div className=" h-full" style={{ fontFamily: "Playpen Sans, cursive", background: "linear-gradient(135deg, #FADD8B 0%, #FFBE54 100%)",}} >
            <div className="max-w-[1200px] w-full m-auto pt-10 pb-20 px-3">
                <div className="text-center ">
                                <h2 className="w-full xs:w-fit text-base xs:text-lg leading-5 lg:text-3xl bg-purpleColor text-white px-2 py-1 rounded-md font-bold">{categoryData?.category.heading}</h2>
                                <p className="text-xs xs:text-sm mt-2 leading-4 xs:text-left  lg:text-base md:mt-2 font-medium text-indigo-900">{categoryData?.category.paragraph}</p>    
                            </div>
                 <div className="flex flex-row flex-wrap items-center justify-evenly md:w-[90%] md:justify-start md:items-center lg:w-full lg:justify-center mx-auto mt-7 md:mt-11 gap-10 lg:mt-10 lg:flex-row">
                    {categoryData?.articles.map((article) => (
                        <Article  img={article.img} key={article.id} name={article.name} text={article.text} id={article.id} category={categoryData.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}