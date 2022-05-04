import {  HomeIcon, InformationCircleIcon } from "@heroicons/react/outline"
import {SearchIcon}  from "@heroicons/react/solid"
import { useRouter } from "next/router";


const SideBar = () => {
  const router = useRouter()
  return (
    <div className=" bg-white w-full mb-10 fixed z-10 top-0 left-0 p-2 ">
      <div className="bg-[#f1f1fb] py-4 px-4 pr-10 items-center justify-between w-full  rounded-md flex ">
        <div className="text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 font-soft font-black text-2xl"
          onClick={() => router.push(`/`)}
        >
            MovieDB
        </div>
        <div className=" flex space-x-6 items-center">
          {/* home component */}
          <div onClick={() => router.push(`/`)} className='flex justify-between items-center p-2 space-x-2 cursor-pointer group transition-colors duration-100 ease-in hover:bg-black rounded-xl'>
                <div className='flex'>
                <HomeIcon className='h-5 w-5 text-black font-medium group-hover:text-white ' stroke-width="2.5"/>
                <div className='font-medium hidden md:block lg:block text-md group-hover:text-white'>Home</div>

                </div>
                
            </div>
          {/* Search Component */}
          <div onClick={() => router.push(`/Search`)} className='flex justify-between items-center p-2  space-x-2 cursor-pointer group transition-colors duration-100 ease-in hover:bg-black rounded-xl'>
                <div className='flex space-x-2'>
                <SearchIcon className='h-5 w-5 text-black font-medium group-hover:text-white ' stroke-width="2.5"/>
                <div className='font-medium hidden md:block lg:block text-md group-hover:text-white'>Search</div>

                </div>
                <div className='hidden w-1 h-3 bg-white rounded-sm '></div>
            </div>
          
          
          {/* about component */}
          <div onClick={() => router.push(`/About`)} className='flex justify-between items-center p-2 space-x-2 mr-10 cursor-pointer group transition-colors duration-100 ease-in hover:bg-black rounded-xl'>
                <div className='flex space-x-2'>
                <InformationCircleIcon className='h-5 w-5 text-black font-medium group-hover:text-white ' stroke-width="2.5"/>
                <div className='font-medium hidden md:block lg:block text-md group-hover:text-white'>About</div>

                </div>
                <div className='hidden w-1 h-3 bg-white rounded-sm '></div>
            </div>
          
          
          {/* END   */}

        </div>

    </div>
    </div>
  )
}

export default SideBar