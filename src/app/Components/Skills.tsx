"use client";
import React from "react"
import Image from "next/image"
import html from "@/app/Images/html.png"
import css from "@/app/Images/css.png"
import tailwind from "@/app/Images/tailwind.png"
import javascript from "@/app/Images/javascript.png"
import typescript from "@/app/Images/typescript.png"
import react from "@/app/Images/react.png"
import next from "@/app/Images/next.png"
import framer from "@/app/Images/framer.png"
import shadcn from "@/app/Images/shadcn.png"
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <section id="skills" className="w-full h-full bg-gradient-to-t from-black to-[rgb(30,0,0)] pb-[14rem] ">
            <motion.h1 className="text-[1.7rem] font-bold text-[--Secondary-Color] max-[1079px]:mb-[2rem] w-fit m-auto"
            initial={{y: "6rem", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6}}
            viewport={{once: true}}>SKILLS</motion.h1>
            <main className="flex mt-[6rem] gap-[4rem] max-[518px]:gap-[2rem] max-[322px]:gap-[1rem] flex-wrap justify-center w-[38rem] max-[618px]:w-screen px-[3rem] max-[322px]:px-[1rem] m-auto">
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem] " alt="/" src={html} />
                    <h1 className="text-white text-[13px] ">HTML</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem] " alt="/" src={css} />
                    <h1 className="text-white text-[13px] ">CSS</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem] " alt="/" src={tailwind} />
                    <h1 className="text-white text-[13px] text-center mx-4">Tailwind CSS</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem] " alt="/" src={javascript} />
                    <h1 className="text-white text-[13px] ">JavaScript</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem] " alt="/" src={typescript} />
                    <h1 className="text-white text-[13px] ">Typescript</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem]  " alt="/" src={react} />
                    <h1 className="text-white text-[13px] ">React.js</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center  justify-center rounded-full light w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[4rem] max-[575px]:w-[3.5rem]  " alt="/" src={next} />
                    <h1 className="text-white text-[13px] ">Next.js</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center justify-center rounded-full light  w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[2rem]  " alt="/" src={framer} />
                    <h1 className="text-white text-center text-[13px] mx-2">Framer Motion</h1>
                </motion.div>
                <motion.div className="flex flex-col items-center justify-center rounded-full light  w-[8rem] h-[8rem] max-[618px]:w-[6rem] max-[618px]:h-[6rem] animate"
                initial={{y: "8rem", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                viewport={{once: true}}>
                    <Image className="w-[3rem] max-[575px]:w-[2.5rem] " alt="/" src={shadcn} />
                    <h1 className="text-white text-center text-[13px] ">Shadcn Ui</h1>
                </motion.div>
            </main>
        </section>
    )
}

export default Skills