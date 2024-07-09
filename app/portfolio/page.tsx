"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { projects } from "@/lib/data";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";


const Portfolio = () => {

    const [currentProject, setCurrentProject] = useState(projects[0])
    const handleSlideChange = (swiper: any) => {
        const currentIndex: number = swiper.activeIndex
        setCurrentProject(projects[currentIndex]);
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold">
                                {currentProject.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-textcolor group-hover:text-accent transition-all duration-500 capitalize">
                                {currentProject.category}
                            </h2>
                            <h3 className="text-accent text-xl">
                                {currentProject.title}
                            </h3>
                            <p className="text-textcolor/60 text-sm">
                                {currentProject.description}
                            </p>
                            <ul className="flex gap-4">
                                {currentProject.stacks.map((stack, index) => (
                                    <li
                                        key={index}
                                        className="text-md text-primary bg-accent rounded-full px-4 py-1"
                                    >
                                        {stack}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-4">
                                <Link href={currentProject.live || '/'}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-textcolor/5 flex justify-center items-center ">
                                                <BsArrowUpRight className="text-textcolor text-3xl hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Démo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={currentProject.github || '/'}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-textcolor/5 flex justify-center items-center ">
                                                <FaGithub className="text-textcolor text-3xl hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[300px] xl:h-[460px]  relative group flex justify-center items-center bg-[#E6E7FF]/40 xl:bg-primary">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-[#E6E7FF]/5 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={currentProject.image}
                                                fill
                                                className="object-contain"
                                                alt={currentProject.title}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtn
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                iconsStyles=""
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;
