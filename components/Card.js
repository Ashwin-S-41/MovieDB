import Image from "next/image";

const Card = ({results}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="flex  mb-8 bg-black min-w-[170px] h-[240px] md:min-w-[150px] md:min-h-[200px] rounded-lg overflow-hidden cursor-pointer  hover:scale-105 transition duration-300"
      
    >
      <Image
        src={
          
          `${BASE_URL}${results.poster_path}`
        }
        width={200}
        height={450}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}

export default Card

