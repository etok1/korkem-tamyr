import { useParams } from "react-router-dom"
import type { ArticleGroup, ArticleSection, ArticleType,  } from "../utils/types";
import { motion } from "framer-motion";

export default function Highlights({articles}:{ articles: ArticleGroup[] }){

  const { categoryId, articleId } = useParams();
  

  const category = articles.find((cat: ArticleGroup) => cat.id === categoryId);
  
  const article = category?.articles.find((art:ArticleType) => art.id === Number(articleId));

  if (!category) return <div>Category not found</div>;
  if (!article) return <div>Article not found in this category</div>;

   
    console.log(category) 

   


    console.log(article) 
    return(
      <div className="bg-gradient-to-br from-white to-blue-50 p-4 md:p-8 max-w-[1200px] mx-auto rounded-xl shadow-sm" style={{ fontFamily: "Playpen Sans, cursive" }}>
  
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-xl md:text-3xl font-bold text-indigo-900 mb-4 drop-shadow-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {article.name}
              </h1>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed text-left bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-l-4 border-indigo-200">
                {article.text}
              </p>
            </div>
            <img loading='lazy'
              className="w-full md:w-[350px] h-auto max-h-[400px] object-cover rounded-xl shadow-lg border-4 border-white ring-2 ring-indigo-100" 
              src={article.img} 
              alt={article.name} 
            />
          </div>

          
          <div className="space-y-8">
            {article.content.sections.map((section:ArticleSection, index: number) => (
              <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    ><div key={index} className="border-l-4 border-indigo-300 pl-4 text-left bg-gradient-to-r from-white to-indigo-50 p-4 rounded-r-lg shadow-sm">
                <h2 className="text-lg md:text-2xl font-semibold text-indigo-800 mb-3 drop-shadow-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {section.title}
                </h2>
                <p className="text-sm md:text-lg text-slate-600 font-light leading-relaxed">
                  {section.text}
                </p>
              </div></motion.div>
            ))}
          </div>

            
          <div className="mt-12 pt-6 border-t border-indigo-100 text-center bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
            <p className="text-sm text-indigo-600 font-medium italic">
              National cultural heritage is the guarantor of the continuity of generations.
            </p>
          </div>
      </div>
    )
}