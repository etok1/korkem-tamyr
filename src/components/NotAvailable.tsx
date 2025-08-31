import { Construction } from "lucide-react";



export default function NotAvailable(){

    return(
        <div className="flex justify-center items-center">
                <div className="bg-yellow-500 relative  shadow-xl max-w-[1000px] w-[90%] h-[150px] sm:h-[200px] lg:h-[300px] flex flex-col items-center justify-start p-4 md:p-8 mx-auto border-2 border-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <h2 className="bg-black px-3 py-2 text-yellow-500  w-fit sm:text-2xl lg:text-4xl rounded-lg uppercase font-bold">Oops!</h2>
                    <h3 className="flex items-center justify-center gap-2 mt-3 sm:mt-14 md:mt-7 lg:mt-16 text-lg bg-black px-3 py-2 text-yellow-500  w-fit lg:text-4xl rounded-lg uppercase font-bold">This section is under construction     </h3>
                    <Construction  width={100} height={100} color="black" className="absolute top-3 left-5 w-10 h-10 sm:w-20 sm:h-20 lg:w-28 lg:h-28"/> 
                    <Construction width={100} height={100} color="black" className="absolute top-3 right-5 w-10 h-10 sm:w-20 sm:h-20 lg:w-28 lg:h-28"/> 
                </div>
        </div>
    )
}