import ShowCard from "./ShowCard";


const ShowCollection = ({results,title}) => {
  

  return (
    <div className="relative flex flex-col space-y-1 ">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-3 overflow-y-hidden overflow-x-scroll lg:scrollbar-hide md:scrollbar-hide rounded-2xl  p-2 pb-0 ">
        {results.map((result) => (
          <ShowCard key={result.id} results={result} />
        ))}
      </div>
    </div>
  )
}

export default ShowCollection