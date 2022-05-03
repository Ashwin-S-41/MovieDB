import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = ({results}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  
  return (
    <div className="my-4">
    <h2 className="font-semibold mb-2">Trending</h2>
    <div className="w-full lg:bg-black  rounded-xl overflow-hidden ">
      

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
          <div className=" rounded-2xl h-44 md:h-96 " key={result.id}>

            <Image src={`${BASE_URL}${result.backdrop_path}`} width={1080}
            height={608}
            objectFit="cover"
            className="rounded-xl   overflow-hidden" />
             
              
          </div>
          
        ))}
      </Carousel>
      
        
    </div>
    </div>
  )
}

export default Banner
