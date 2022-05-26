import CreditsCard from "./CreditsCard";


const CreditsCollection = ({credits}) => {
  

  return (
    <div className="relative flex flex-col space-y-1 ">
      <h2 className="font-semibold">Cast</h2>
      <div className="flex overflow-y-hidden space-x-2 overflow-x-scroll rounded-2xl lg:scrollbar-hide md:scrollbar-hide py-2 pb-0 ">
        {credits.slice(0,10).map((credits) => (
          <CreditsCard key={credits.id} credits={credits} />
        ))}
      </div>
    </div>
  )
}

export default CreditsCollection