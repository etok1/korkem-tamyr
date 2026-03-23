import { useParams } from "react-router-dom"
import type { ArticleGroup, ArticleSection, ArticleType,  } from "../utils/types";
import { motion } from "framer-motion";
import { useLanguage } from "../utils/context";

export default function Highlights({articles}:{ articles: ArticleGroup[] }){

  const { categoryId, articleId } = useParams();
   const {language} = useLanguage()

  const category = articles.find((cat: ArticleGroup) => cat.id === categoryId);
  
  const article = category?.articles.find((art:ArticleType) => art.id === Number(articleId));

  if (!category) return <div>Category not found</div>;
  if (!article) return <div>Article not found in this category</div>;

   
    console.log(category) 

   
const emojis = ['📩', '🏔️', '📷', '📚', '❤️', '🔖'];

    console.log(article) 
    return(
    <div 
  className="bg-white/90 backdrop-blur-sm p-6 md:p-10 max-w-[1100px] mx-auto rounded-2xl shadow-lg border border-indigo-100"
  style={{ fontFamily: "Playpen Sans, cursive" }}
>

  <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
    <div className="flex-1 text-left">
      <h1 
        className="text-2xl md:text-4xl font-bold text-indigo-950 mb-4 tracking-tight" 
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {article.name}
      </h1>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed bg-gradient-to-r from-indigo-50/70 to-white p-5 rounded-xl border border-indigo-100 shadow-sm">
        {article.text}
      </p>
    </div>

    <img
      loading="lazy"
      className="w-full md:w-[350px] h-auto max-h-[420px] object-cover rounded-2xl shadow-xl ring-1 ring-indigo-100 hover:scale-[1.02] transition-transform duration-300"
      src={article.img}
      alt={article.name}
    />
  </div>


  <div className="space-y-10">
    {article.content.sections.map((section: ArticleSection, index: number) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group"
      >
        <div className="border-l-4 border-indigo-400/70 pl-5 text-left bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 
            className="text-lg md:text-2xl font-semibold text-indigo-900 mb-3 flex items-center gap-2 group-hover:text-indigo-700 transition-colors duration-200" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-xl md:text-2xl">{emojis[index]}</span>
            {section.title}
          </h2>
          <p className="text-gray-800 text-sm md:text-lg leading-relaxed font-light">
            {section.text}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  <div className="mt-14 pt-6 border-t border-indigo-100 text-center">
    <p className="text-sm md:text-base text-indigo-600 font-medium italic bg-gradient-to-r from-indigo-50/60 to-purple-50/60 p-4 rounded-xl shadow-sm inline-block">
      {language === 'en' ? 'National cultural heritage guarantees the continuity of generations.' : 'Ұлттық мәдени мұра – ұрпақтар жалғастығының кепілі.'}
    </p>
  </div>
</div>

    )
}