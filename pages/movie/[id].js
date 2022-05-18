import Image from "next/image"
import React from 'react'
import MovieCollection from "../../components/MovieCollection";
import SideBar from '../../components/SideBar'

function Movie({result,similarResult}) {
    const BASE_URL = "https://image.tmdb.org/t/p/w500";
    
    
  return (
    <div className="flex-col h-full w-full  lg:flex-row md:flex-row ">
        <SideBar/>
        <div className="bg-[#f1f1fb] w-[100%-4px]   rounded-md m-2 px-4 h-[80vh] mt-24 overflow-hidden overflow-y-scroll scrollbar-hide lg:herolg justify-center items-center flex-col">
            <div className="flex justify-between min-w-[180px] min-h-[260px] mt-6 md:min-w-[150px] md:min-h-[200px]">
                <Image src={`${BASE_URL}${result.poster_path||result.backdrop_path}`} width={180}
                    height={260}
                    objectFit="cover"
                    className="rounded-xl w-full overflow-hidden" />
                <div className="flex flex-col flex-1 items-center justify-center p-4 space-y-4 mt-4">
                        <div className="text-black text-center">{result.title||result.original_name}</div>
                        <div className="text-sm text-center text-gray-700">Rating : {result.vote_average}/10 </div>
                        <p className="text-xs text-gray-500 md:text-sm">
                            {result.release_date || result.first_air_date} •{" "}
                            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m 
                        </p>
                        <p className="text-sm text-gray-500 text-center">Movie{result.genres.map((genre) =>" • "+ genre.name  )}</p>
                </div>
            </div>
                <div className="flex flex-col items-center m-4 ">
                    <div className="text-md ">Overview</div>
                    <div className="text-sm text-gray-500 mt-4 text-justify">{result.overview}</div>
                </div>
                <MovieCollection results={similarResult} title={"Similar Movies"} />

        </div>
    </div>
  )
}
export async function getServerSideProps(context) {
    
    const { id } = context.query;
  
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    ).then((response) => response.json());

    const similarrequest = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=G&language=en-US&include_adult=false&page=1`
      ).then((response) => response.json());
    return {
      props: {
        similarResult:similarrequest.results,
        result: request,
      },
    };
  }

export default Movie