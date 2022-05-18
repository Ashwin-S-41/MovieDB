import SideBar from "../components/SideBar"
import {SearchIcon}  from "@heroicons/react/solid"
import {useState} from 'react';


import React from 'react'
import MovieCollection from "../components/MovieCollection";
import ShowCollection from "../components/ShowCollection";

const Search = () => {
  
  const [searchMovies, setsearchMovies] = useState([])
  const [searchShows, setsearchShows] = useState([])
  const [value, setvalue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const fetchData = (e) =>{
    const value = e.target.value
    setvalue(value)
    if (value!=''){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => setsearchMovies(data.results)),
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => setsearchShows(data.results))}
    
  }
  
  return (
    <div >
      <SideBar active={"search"}/>
      <div className="bg-[#f1f1fb] w-[100%-4px]   rounded-md m-2 p-4 h-[80vh] mt-24 overflow-hidden  scrollbar-hide lg:herolg justify-center items-center flex-col">
        <div className="flex items-center mb-2 sticky top-0 z-40" >
          <div className="relative w-full lg:w-[60%] ">
          <input disableUnderline onChange={fetchData}  className=" focus:outline-none  ml-2 w-[95%]  bg-black border-0 text-sm text-white placeholder-gray-400  h-8 px-0 pl-8 rounded-lg" type="text"  placeholder="Search Movies & TV Shows "/>
          <SearchIcon className="absolute  h-5 w-5  top-2 left-4 text-white z-10" stroke-width="2.5"/></div>
          <button onSubmit={handleSubmit} className="bg-white text-md ml-2 px-2 py-1 rounded-lg" type="submit">Search</button>
        </div>
        {value!=''?<MovieCollection results={searchMovies} title="Movies"/>:null}
        {value!=''?<ShowCollection results={searchShows} title="TV Shows"/>:null}
        
      </div>
      
    </div>
  )
}



export default Search