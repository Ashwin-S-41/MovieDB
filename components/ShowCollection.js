import ShowCard from "./ShowCard";


const ShowCollection = ({results,title}) => {
  

  return (
    <div>
      {results.length!=0?(
        <div className="relative flex flex-col space-y-1 ">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex overflow-y-hidden space-x-2 overflow-x-scroll rounded-2xl lg:scrollbar-hide md:scrollbar-hide py-2 pb-0 ">
          {results.map((result) => (
            <ShowCard key={result.id} results={result} />
          ))}
        </div>
      </div>
      ):(<div>
        <h2 className="font-semibold">{title}</h2>
        <div className="ml-2 text-sm text-black/60">No Results Found...</div></div>
      )}
    </div>
  )
}

export default ShowCollection