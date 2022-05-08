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
      <div className="mt-24 bg-[#f1f1fb]  flex-col  w-[100%-4px] rounded-2xl bac m-2 p-3 h-[80vh] overflow-hidden overflow-y-scroll scrollbar-hide  flex">
        <div className="flex items-center mb-2" >

          <input onChange={fetchData} className="ml-2 bg-black border-0 relative text-sm text-white placeholder-gray-400 w-[70%] h-8 px-4 pl-8 rounded-lg" type="text"  placeholder="Search Movies & TV Shows "/>
          <SearchIcon className="absolute  h-5 w-5 left-9 text-white z-10" stroke-width="2.5"/>
          <button onSubmit={handleSubmit} className="bg-white text-md ml-4 px-2 py-1 rounded-lg" type="submit">Search</button>
        </div>
        {value!=''?<MovieCollection results={searchMovies} title="Movies"/>:<div/>}
        {value!=''?<ShowCollection results={searchShows} title="TV Shows"/>:<div/>}
        
      </div>
      
    </div>
  )
}



export default Search