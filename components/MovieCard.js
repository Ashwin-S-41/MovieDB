import Image from "next/image";
import { useRouter } from "next/router";

const MovieCard = ({results}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    const router = useRouter();
    
  return (
    <div>
      {results.poster_path!=null?(
        <div
        className="flex relative bg-black/20 mb-4  min-w-[170px] h-[240px] md:min-w-[150px] md:min-h-[200px] rounded-lg overflow-hidden cursor-pointer group  "
        onClick={() => router.push(`/movie/${results.id}`)}
      >
        <Image
          src={
            
            `${BASE_URL}${results.poster_path}`
          }
          alt={results.title}
          width={170}
          height={420}
          
          objectFit="cover"
          className="flicker  rounded-lg md:group-hover:scale-105 transition duration-100"
        />
        <div className="flicker !z-20 text-center  text-xs lg:text-sm px-3 py-2 rounded-xl w-fit absolute text-white bottom-[5%] !-translate-x-1/2 left-[50%] 
                  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 mr-2 "><p>{results.name||results.original_name||results.title||results.original_title}</p></div>
      </div>
      ):null}
    </div>
  )
}

export default MovieCard

