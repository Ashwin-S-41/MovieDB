
import MovieCard from "./MovieCard";


const MovieCollection = ({results,title}) => {
  

  return (
    <div className="relative flex flex-col space-y-1 ">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-3 overflow-y-hidden overflow-x-scroll rounded-2xl lg:scrollbar-hide md:scrollbar-hide p-2 pb-0 ">
        {results.map((result) => (
          <MovieCard key={result.id} results={result} />
        ))}
      </div>
    </div>
  )
}

export default MovieCollection