import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
const Banner = ({results}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  
  return (
    <div className="my-4">
    <h2 className="font-semibold mb-2">Trending</h2>
    <div className="w-full lg:bg-black rounded-xl overflow-hidden ">
      

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={true}
        interval={5000}
        className="rounded-2xl"
      >
        {results.map((result) => (
          <div onClick={() => router.push(`/${result.media_type}/${result.id}`)} key={result.id} className=" relative rounded-2xl h-46 md:h-96 ">

            <Image src={`${BASE_URL}${result.backdrop_path||result.poster_path}`} width={1080}
            height={608}
            objectFit="cover"
            className="rounded-xl   overflow-hidden" />
              
             <div className=" flicker text-center z-10 backface text-xs lg:text-lg px-3 py-2 rounded-xl w-fit absolute text-yellow-100 bottom-[11%] -translate-x-1/2 left-[50%] 
                bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 mr-2  border-[0px] border-gray-400
             ">{result.name||result.original_name||result.title||result.original_title}</div>
          </div>
          
        ))}
      </Carousel>
      
        
    </div>
    </div>
  )
}

export default Banner