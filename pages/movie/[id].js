import Image from "next/image"
import React from 'react'
import {useState} from 'react';
import CreditsCollection from "../../components/CreditsCollection";
import MovieCollection from "../../components/MovieCollection";
import SideBar from '../../components/SideBar'
import ReactPlayer from "react-player/lazy";

function Movie({result,credits,similarResult}) {
    const BASE_URL = "https://image.tmdb.org/t/p/w500";
    
    const [showPlayer, setShowPlayer] = useState(false)
    const index = result.videos.results.findIndex(
      (element) => element.type === "Trailer"
    );
    
  return (
    <div  className="flex-col h-full w-full lg:flex-row md:flex-row ">
        <SideBar/>
        <div  className="bg-[#f1f1fb] w-[100%-4px]   rounded-md m-2 px-4 h-[80vh] mt-24 overflow-hidden overflow-y-scroll scrollbar-hide lg:herolg justify-center items-center flex-col">
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
                        <button
                className="text-xs md:text-base  text-black bg-white  flex items-center justify-center py-1.5 px-4 rounded hover:bg-black hover:text-white"
                onClick={() => setShowPlayer(showPlayer==false?true:false)}
              >
                <span className=" font-medium tracking-wide">
                  {showPlayer==false?<div>Trailer</div>:<div>Close Trailer</div>}

                </span>
              </button>
                </div>
                
            </div>
            {showPlayer==true?(
              <div className=" rounded-2xl md:w-[450px] md:mx-auto overflow-hidden mt-4 " >
              <div className="relative pt-[56.25%]    ">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                
              />
            </div>
            
            </div>
            ):null}
                <div className="flex flex-col items-center m-4 ">
                    <div className="text-md ">Overview</div>
                    <div className="text-sm text-gray-500 mt-4 text-justify">{result.overview}</div>
                </div>
                <CreditsCollection credits={credits} />
                <MovieCollection results={similarResult} title={"Similar Movies"} />

        </div>
       
        
    </div>
  )
}
export async function getServerSideProps(context) {
    
    const { id } = context.query;
  
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos`
    ).then((response) => response.json());

    const credits = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
    ).then((response) => response.json());

    const similarrequest = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=G&language=en-US&include_adult=false&page=1`
      ).then((response) => response.json());
    return {
      props: {
        similarResult:similarrequest.results,
        credits:credits.cast,
        result: request,
      },
    };
  }

export default Movie
