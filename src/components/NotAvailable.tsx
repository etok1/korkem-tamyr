import { Construction } from "lucide-react";



export default function NotAvailable(){

    return(
        <div className="flex justify-center items-center">
                <div className="bg-yellow-500 relative  max-w-[1000px] w-[90%] h-[250px] flex flex-col items-center justify-start p-4 md:p-8 mx-auto border-2 border-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <h2 className="bg-black p-3 text-yellow-500  w-fit lg:text-4xl rounded-lg uppercase font-bold">Oops!</h2>
                    <h3 className="flex items-center justify-center gap-2 mt-10 text-2xl bg-black p-3 text-yellow-500  w-fit lg:text-4xl rounded-lg uppercase font-bold">This section is under construction     </h3>
                    <Construction  width={100} height={100} color="black" className="absolute top-3 left-5"/> 
                    <Construction width={100} height={100} color="black" className="absolute top-3 right-5"/> 
                </div>
        </div>
    )
}