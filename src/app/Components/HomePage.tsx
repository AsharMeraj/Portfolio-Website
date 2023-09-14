"use client";
import React from "react"
import Image from "next/image"
import Button from "./Button";
import MyPic from "@/app/Images/MyPic3.png"
import { motion } from "framer-motion";
import Typed from "react-typed"



export default function HomePage() {
  return (
    <>
      <div className="w-full h-[5.5rem] ">

      </div>
      <main className="w-full height flex items-center justify-center z-10">
        <div className="absolute w-full h-full top-0 left-0 right-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
        <video className="absolute -z-10 top-0 left-0 right-0 w-full h-full object-cover" autoPlay muted loop >
          <source src="/Videos/video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-[70rem] max-[840px]:flex-col b flex justify-between items-center mx-10 max-[840px]:mx-[1rem]">

          <motion.div
            className="w-fit  h-fit max-[840px]:absolute  max-[840px]:top-[40%] z-20 relative"
          >
            <h1 className="text-[--Secondary-Color] text-[16px] max-[840px]:text-center">HI THERE!</h1>
            <h1 className="text-[3rem] text-white max-[934px]:text-[2.5rem] max-[840px]:text-center max-[420px]:text-[2rem] max-[323px]:text-[1.6rem]">I am Web Developer</h1>
            <h1 className="text-[3rem] text-white max-[934px]:text-[2.5rem] max-[840px]:text-center max-[420px]:text-[2rem] max-[323px]:text-[1.6rem] mb-6">using <Typed
              strings={["Next.js", "React.js","Typescript"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            /></h1>

            <div className="h-[3rem] flex items-center max-[840px]:justify-center">
              {/* BUTTON */}
              <button className="block cursor-pointer px-8 py-3 border-2 border-[--Primary-Color] text-white bg-[--Primary-Color] w-fit h-fit rounded-sm tracking-wide duration-300 font-bold shadow-[2px_8px_16px_black] active:scale-[0.9]  active:shadow-none">Get Started</button>
            </div>
          </motion.div>



          <motion.div>
            <Image className="drop-shadow shadow-bottom relative max-[840px]:bottom-[2rem] mr-[0rem] border-b-[5px] border-[--Primary-Color] rounded-full w-[25rem] max-[1200px]:w-[26rem] max-[840px]:w-[16rem]   max-[840px]:order-first z-10 " alt="/" src={MyPic} />
          </motion.div>
        </div>
      </main>
    </>
  )
}
