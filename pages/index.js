import {useState} from 'react';
import Banner from "../components/Banner";

import MovieCollection from "../components/MovieCollection";
import ShowCollection from '../components/ShowCollection';
import SideBar from "../components/SideBar";
import Upcoming from "../components/Upcoming";



export default function Home({popularMovies,popularShows,top_ratedMovies,top_ratedShows,trending}) {
  const [isActive, setisActive] = useState(false);
  
  return (
    <div className="flex-col h-full w-full mt-24 lg:sidebarlg ">
        <SideBar/>

        <div className="bg-[#f1f1fb] w-[100%-4px]  space-x-4 rounded-md m-2 p-4 h-[calc(100vh-24px)] max-h-[calc(100vh-24px)]  flex ">
          <div className=" w-full flex-col items-center justify-center">
           
          <div className="flex w-full justify-evenly space-x-4 bg-[#494953] p-1.5  rounded-2xl ">
                    <div onClick={() => setisActive(false)} className="
                     lg:text-sm
                     md:text-sm
                     text-sm flex-1 p-1 w-full text-center  text-white cursor-pointer rounded-xl ">
                       Movies
                       </div>
                    <div onClick={() => setisActive(true)} className="
                     lg:text-sm 
                     md:text-sm 
                     bg-[#f1f1fb] flex-1 text-sm text-center p-1 cursor-pointer text-black rounded-xl  ">
                         TV Shows
                     </div>
                    
              </div>
  
    
          <Banner results={isActive==false?trending:popularShows} />
          

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
          
          {/* {isActive==false?
            <Upcoming results={upcomingMovies} title={"Upcoming Movies"} />
            
            :
            <Upcoming results={upcomingShows} title={"Upcoming TV Shows"} />
            
          } */}
            
          
          
          
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
      
      trendingRes,
      
      
    ] = await Promise.all([
       
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      
      fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
      ),
      
      
    ]);
    const [popularMovies,popularShows,top_ratedMovies,top_ratedShows,trending] =
      await Promise.all([
        popularMoviesRes.json(),
        popularShowsRes.json(),
        top_ratedMoviesRes.json(),
        top_ratedShowsRes.json(),
        
        trendingRes.json(),
        
        
      ]);
  
    return {
      props: {
        
        popularMovies: popularMovies.results,
        popularShows: popularShows.results,
        top_ratedMovies: top_ratedMovies.results,
        top_ratedShows: top_ratedShows.results,
        
        trending: trending.results,
        
        
      },
    };
  }


// export async function getServerSideProps() {
  

//   const [
//     popularMoviesRes,
//     popularShowsRes,
//     top_ratedMoviesRes,
//     top_ratedShowsRes,
//   ] = await Promise.all([
//     fetch(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
//     ),
//     fetch(
//       `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
//     ),
//     fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
//     ),
//     fetch(
//       `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
//     ),
//   ]);
//   const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
//     await Promise.all([
//       popularMoviesRes.json(),
//       popularShowsRes.json(),
//       top_ratedMoviesRes.json(),
//       top_ratedShowsRes.json(),
//     ]);

//   return {
//     props: {
      
//       popularMovies: popularMovies.results,
//       popularShows: popularShows.results,
//       top_ratedMovies: top_ratedMovies.results,
//       top_ratedShows: top_ratedShows.results,
//     },
//   };
// }