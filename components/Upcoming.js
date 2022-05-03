import Card from "./Card"



const Upcoming = ({results,title}) => {
  return (
    <div className="relative flex flex-col space-y-1 ">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-3 overflow-y-hidden overflow-x-scroll rounded-2xl scrollbar-hide p-2 pb-0 ">
        {results.map((result) => (
          <Card key={result.id} results={result} />
        ))}
      </div>
    </div>
  )
}

export default Upcoming
