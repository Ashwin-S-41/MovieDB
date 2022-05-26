import {useState} from 'react';
import Banner from "../components/Banner";

import MovieCollection from "../components/MovieCollection";
import ShowCollection from '../components/ShowCollection';
import SideBar from "../components/SideBar";




export default function Home({popularMovies,popularShows,top_ratedMovies,top_ratedShows,latestMovies,latestShows,trending}) {
  const [isActive, setisActive] = useState(false);
  
  {JSON.stringify(isActive)}
  
  return (
    <div className="flex-col h-full w-full  lg:flex-row md:flex-row ">
        <SideBar active="home"/>

        <div className="bg-[#f1f1fb] w-[100%-4px]   rounded-md m-2 px-4 h-[80vh] mt-24 overflow-hidden overflow-y-scroll scrollbar-hide lg:herolg justify-center items-center flex-col ">
          <div className=''>
          <div className='sticky top-0 z-40 bg-[#f1f1fb] md:bg-transparent  rounded-b-2xl pt-4  '>
            <div className="flicker flex mx-auto shadow-xl shadow-black/20 md:max-w-[500px] justify-evenly space-x-4 sticky top-0 z-40 bg-[#494953] p-1.5  rounded-2xl  ">
                    <div onClick={() => setisActive(false)} className={`
                     lg:text-sm
                     md:text-sm
                     text-sm flex-1 p-1 w-fit text-center transition-all ease-in-out  cursor-pointer rounded-xl 
                     ${isActive?' text-white':'text-black bg-[#f1f1fb]'}`}
                     >
                       Movies
                       </div>
                    <div onClick={() => setisActive(true)} className={`
                     lg:text-sm
                     md:text-sm
                     text-sm flex-1 p-1 w-full text-center transition-all ease-in-out  cursor-pointer rounded-xl 
                     ${isActive?' text-black bg-[#f1f1fb]':'text-white '}`}>
                         TV Shows
                     </div>
                    
              </div>
          </div>
          <div className="flicker w-full  ml-0 flex-col items-center justify-center">
           
          
  
    
          <Banner results={trending} />
          {isActive==false?
            <MovieCollection results={latestMovies} title={"Latest Movies"} />
            
            :
            <ShowCollection results={latestShows} title={"Latest TV Shows"} />
            
          }

          {isActive==false?
            <MovieCollection results={popularMovies} title={"Popular Movies"} />
            
            :
            <ShowCollection results={popularShows} title={"Popular TV Shows"} />
            
          }
          {isActive==false?
            <MovieCollection results={top_ratedMovies} title={"Top Rated Movies"} />
            
            :
            <ShowCollection results={top_ratedShows} title={"Top Rated TV Shows"} />
            
          }
          
          
            
          
          
          
          </div>

        </div>
      </div>

    </div>
  )
}


export async function getServerSideProps() {
    
  
    const [
      popularMoviesRes,
      popularShowsRes,
      top_ratedMoviesRes,
      top_ratedShowsRes,
      latestMoviesRes,
      latestShowsRes,
      
      trendingRes,
      
      
    ] = await Promise.all([
       
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13&language=en-US&page=2`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13&language=en-US&page=2`
      ),
    
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13&language=en-US&primary_release_year=2022&include_adult=false`
      ),
      fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13&language=en-US&primary_release_year=2022&include_adult=false`
      ),
      
      fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&certification_country=US&certification.lte=PG-13`
      ),
      
      
    ]);
    const [popularMovies,popularShows,top_ratedMovies,top_ratedShows,latestMovies,latestShows,trending] =
      await Promise.all([
        popularMoviesRes.json(),
        popularShowsRes.json(),
        top_ratedMoviesRes.json(),
        top_ratedShowsRes.json(),
        latestMoviesRes.json(),
        latestShowsRes.json(),
        trendingRes.json(),
        
        
      ]);
  
    return {
      props: {
        
        popularMovies: popularMovies.results,
        popularShows: popularShows.results,
        top_ratedMovies: top_ratedMovies.results,
        top_ratedShows: top_ratedShows.results,
        latestMovies: latestMovies.results,
        latestShows: latestShows.results,
        trending: trending.results,
        
        
      },
    };
  }

  //https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&primary_release_year=2024&include_adult=false
