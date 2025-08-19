import { useParams } from "react-router-dom"

export default function Highlights({articles}){

  const { categoryId, articleId } = useParams();
  
  // Find the category first
  const category = articles.find(cat => cat.id === categoryId);
  
  // Then find the specific article in that category
  const article = category?.articles.find(art => art.id === Number(articleId));

  if (!category) return <div>Category not found</div>;
  if (!article) return <div>Article not found in this category</div>;

   
    console.log(category) 

   


    console.log(article) 
    return(
        <div className="bg-white p-4 md:p-8 max-w-[1200px] mx-auto" style={{ fontFamily: "Shantell Sans, cursive" }}>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {article.name}
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed  text-left">
                {article.text}
              </p>
            </div>
            <img 
              className="w-full md:w-[350px] h-auto max-h-[400px] object-cover rounded-lg shadow-md" 
              src={article.img} 
              alt={article.name} 
            />
          </div>

          
          <div className="space-y-8">
            {article.content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-purple-200 pl-4 text-left">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {section.title}
                </h2>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

            
          <div className="mt-12 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Ұлттық мәдени мұра — ұрпақтар сабақтастығының кепілі
            </p>
          </div>
        </div>
    )
}