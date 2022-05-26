import Image from "next/image";


const CreditsCard = ({credits}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    
  return (
      <div className="flex flex-col items-center">
    <div
      className="flex  rounded-full mb-4 bg-black min-w-[130px] h-[140px] md:min-w-[120px] md:h-[140px]  overflow-hidden cursor-pointer group  "
      
    >
      <Image
        src={
          
          `${BASE_URL}${credits.profile_path}`
        }
        alt={credits.name}
        width={170}
        height={420}
        
        objectFit="cover"
        className="flicker  h-auto  rounded-lg md:group-hover:scale-105 transition duration-100"
      />
      
    </div>
    <div className=" text-sm text-center"><p>{credits.name||credits.original_name||credits.title||credits.original_title}</p></div>
    </div>
  )
}

export default CreditsCard

