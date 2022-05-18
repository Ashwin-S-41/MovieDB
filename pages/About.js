import SideBar from "../components/SideBar"

import React from 'react'

const About = () => {
  return (
    <div>
      <SideBar active="about"/>
      <div className="bg-[#f1f1fb] w-[100%-4px]   rounded-md m-2 px-4 h-[80vh] mt-24 overflow-hidden overflow-y-scroll scrollbar-hide lg:herolg justify-center items-center flex-col">
        <div>
          about
        </div>
      </div>
    </div>
  )
}

export default About