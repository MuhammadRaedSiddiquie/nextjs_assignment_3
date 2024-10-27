'use client'
import React from 'react'
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#121212] gap-[10vw] pt-12" id='home'>
      <aside className="flex bg-[#0a0a0a] flex-col h-[26rem] w-[34rem] rounded-2xl justify-evenly px-4 border-r-[2px] border-[#64ffda]">
        <div className="flex flex-col gap-2">
          <h2 style={{ fontFamily: 'roboto' }} className="text-3xl text-[#04ffc3] select-none">Hi! I&lsquo;m</h2>
          <h1 style={{ fontFamily: 'roboto' }} className="text-white text-[2.5rem] select-none">MUHAMMAD RAED</h1>
          <h3 className="text-white text-[18px] select-none">Learning Front-End Web Development passionate about creating interactive applications and
            experiences on the web.</h3>
        </div>
        <div className="w-[150px] items-center justify-center flex flex-col gap-4">
          <button className="text-white neon w-[150px] h-[50px] rounded-[22px] border-[#019975] border-[2px] cursor-pointer hover:bg-[#04a982] hover:border-white">
            <h4 className="text-lg">More</h4>
          </button>
        </div>

      </aside>
      <aside className="h-[28rem] w-[30rem] flex items-center justify-center">
        <div className="w-full h-full overflow-hidden flex items-start justify-center"><Image className="z-10" src="/person.png" width={300} height={400} alt=""></Image></div>
      </aside>

    </section>
  )

}

export default Hero
