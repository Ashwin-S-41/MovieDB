import SideBar from "../components/SideBar"
import git from '../public/assets/github-brands.svg'
import twitter from '../public/assets/twitter.svg'
import insta from '../public/assets/insta.svg'
import Image from "next/image"
import { useRouter } from "next/router";

import React from 'react'

const About = () => {
  const router = useRouter();
  return (
    <div>
      <SideBar active="about"/>
      <div className="bg-[#f1f1fb] w-[100%-4px]   rounded-md m-2 px-4 h-[80vh] mt-24 overflow-hidden overflow-y-scroll scrollbar-hide lg:herolg justify-center items-center flex-col">
        <div className="w-full h-full flex flex-col justify-center items-center">

          <div className="w-fit mt-4 mb-4">
            <div className="text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 font-soft font-black lg:text-[30px] text-2xl"
            
          >
              MovieDB
            </div>
          </div>

          <p className="w-[90%] md:w-[75%] mb-4 cursor-default text-justify">Movie DB is an online database of information related to films, television series, and streaming content online – including cast, plot summaries , and ratings.Movie Database Website provides information about films and television programs as well as their cast and crew. Movie Database allows you to track upcoming movies that you want to watch.</p>
            <div className="text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 font-soft font-black lg:text-[30px] text-xl mb-2">Contact Me</div>
            <div className=" flex space-x-4 mt-4">
              <div className="cursor-pointer">
                <Image onClick={() => router.push(`https://github.com/Ashwin-S-41`)} width={40} height={40}  src={git}/>
              </div>
              <div className="cursor-pointer">
                <Image onClick={() => router.push(`https://twitter.com/iAshwin_S`)} width={40} height={40}  src={twitter}/>

              </div>
              <div className="cursor-pointer">
                <Image onClick={() => router.push(`https://www.instagram.com/itsashwinn/`)} width={40} height={40}  src={insta}/>
              </div>
            
            </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default About