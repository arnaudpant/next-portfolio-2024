"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
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
                        {/* A PROPOS */}
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px] text-left">
                                <h3 className="text-xl">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <h3 className="text-lg px-8 md:px-0">
                                    De la maintenance des Mirages 2000 🚀 au
                                    développement web 👨🏼‍💻{" "}
                                </h3>
                                <p className="text-lg px-8 md:px-0">
                                    Fana d&apos;aviation, j&apos;ai effectué une
                                    première carrière dans l&apos;Armée de
                                    l&apos;Air à réparer et entretenir des
                                    avions de chasse au sein d&apos;équipes de
                                    mécaniciens ✈️
                                    <br />
                                    J&apos;ai découvert le code pour trouver les
                                    solutions aux problèmes que je rencontrais
                                    en tant que chef d&apos;équipe 🤔 en créant
                                    des dashboards et des sites internet.
                                    <br /> Pratiquant la photo et le dessin, je
                                    me suis pris de passion pour le
                                    développement front qui permet également
                                    d&apos;exprimer sa créativité.
                                </p>
                                <p className="text-lg px-8 md:px-0">
                                    Aujourd&apos;hui je suis développeur
                                    Front-End, spécialisé dans React &
                                    TypeScript.
                                </p>
                                <p className="text-lg px-8 md:px-0">
                                    Grâce à mon passé militaire j’ai acquis des
                                    compétences uniques et transférables au
                                    monde du développement avec une solide
                                    experience du travail en équipe.
                                    <br />
                                    Ce sont des atouts précieux pour tous
                                    projets.
                                </p>
                                <p className="text-lg px-8 md:px-0">
                                    Si vous cherchez un développeur sérieux avec
                                    un savoir être, contactez-moi.
                                </p>
                                <p className="text-lg px-8 md:px-0">
                                    Disponible en Lorraine et Luxembourg.
                                </p>
                            </div>
                        </TabsContent>
                        {/* EXPERIENCES */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-xl">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                            <span className="text-white/60 text-sm pb-1">
                                                Avril 2024 - Aujourd&apos;hui
                                            </span>
                                            <h3 className="text-lg text-accent min-h-[60px] text-center lg:text-left">
                                                Front-end et chef de projet
                                            </h3>
                                            <span className="text-white/60 text-sm">
                                                MikeCodeur
                                            </span>
                                            <p className="text-white text-md">
                                                j&apos;ai mené le développement
                                                d&apos;un site de mise en
                                                relation entre des familles
                                                d&apos;accueil et des apprenants
                                                pour des séjours linguistiques
                                                en France. Ce projet a été
                                                réalisé au sein d&apos;une
                                                équipe suivant la méthodologie
                                                Agile Scrum.
                                            </p>
                                            <ul className="pt-2 text-white text-md">
                                                <li className="mt-6">
                                                    <p className="font-semibold">
                                                        1. Gestion de Projet :
                                                    </p>
                                                    <p>
                                                        - Coordination de
                                                        l&apos;équipe de
                                                        développement.
                                                    </p>
                                                    <p>
                                                        - Organisation des
                                                        réunions de sprint
                                                        planning, rétrospectives
                                                        et daily stand-ups pour
                                                        assurer une
                                                        communication efficace
                                                        et une progression
                                                        constante.
                                                    </p>
                                                    <p>
                                                        - Supervision de la
                                                        planification des tâches
                                                        et gestion du backlog
                                                        produit
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold">
                                                        2. Développement
                                                        Front-End :
                                                    </p>
                                                    <p>
                                                        - Développement de
                                                        l&apos;interface
                                                        utilisateur en utilisant
                                                        React et TypeScript
                                                    </p>
                                                    <p>
                                                        - Revue de code des Pull
                                                        Request
                                                    </p>
                                                    <p>
                                                        - Supervision de la
                                                        planification des tâches
                                                        et gestion du backlog
                                                        produit
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold">
                                                        Résultat :
                                                    </p>
                                                    <p>
                                                        Cette expérience
                                                        m&apos;a permis de
                                                        renforcer mes
                                                        compétences en gestion
                                                        de projet et
                                                        développement front-end
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default About;
