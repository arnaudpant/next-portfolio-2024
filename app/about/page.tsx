"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { about, education, experience, skillsList } from "@/lib/data";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
                        <TabsTrigger value={"experience"}>
                            Experience
                        </TabsTrigger>
                        <TabsTrigger value={"formation"}>
                            Formations
                        </TabsTrigger>
                        <TabsTrigger value={"skills"}>Skills</TabsTrigger>
                        <TabsTrigger value={"about"}>A propos</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* EXPERIENCES */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-xl">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                                            >
                                                <span className="text-white/60 text-sm pb-1">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-lg text-accent max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.poste}
                                                </h3>
                                                <span className="text-white/60 text-sm pt-2">
                                                    {item.company}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* FORMATIONS */}
                        <TabsContent value="formation" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-xl">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                                            >
                                                <span className="text-white/60 text-sm pb-1">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-lg text-accent max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.poste}
                                                </h3>
                                                <span className="text-white/60 text-sm pt-2">
                                                    {item.company}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* COMPETENCES */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-2xl font-bold">
                                        {skillsList.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skillsList.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-4">
                                    {skillsList.skillsList.map(
                                        (skill, index) => (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                                            <div className="text-6xl">
                                                                {<skill.icon />}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* A PROPOS */}
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-xl">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {about.info.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                                            >
                                                <span className="text-white/60 text-sm pb-1">
                                                    {item.fieldName}
                                                </span>
                                                <h3 className="text-lg text-accent max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.fieldValue}
                                                </h3>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default About;
