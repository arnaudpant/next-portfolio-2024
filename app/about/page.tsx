"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    experience,
    formation,
    skillsList,
} from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";



const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mb-10"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
                        <TabsTrigger value={"about"}>A propos</TabsTrigger>
                        <TabsTrigger value={"experiences"}>
                            Experiences
                        </TabsTrigger>
                        <TabsTrigger value={"formation"}>
                            Formations
                        </TabsTrigger>
                        <TabsTrigger value={"skills"}>Skills</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full text-sm">
                        {/* A PROPOS */}
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px] text-left">
                                <h2 className="text-xl">Ma petite histoire</h2>
                                <h3 className="text-lg px-5 md:px-0">
                                    De la maintenance des Mirages 2000 🚀 au
                                    développement web 👨🏼‍💻{" "}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4 text-md">
                                    <Image
                                        src="/about/M2D.png"
                                        width={300}
                                        height={100}
                                        alt="Mirage 2000 au décollage"
                                        className="rounded-xl"
                                    />
                                    <Image
                                        src="/about/canal.png"
                                        width={300}
                                        height={100}
                                        alt="Mirage 2000 au décollage"
                                        className="rounded-xl"
                                    />
                                </div>
                                <p className="px-8 md:px-0 leading-8">
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
                                <p className="px-8 md:px-0 leading-8">
                                    Aujourd&apos;hui je suis développeur web
                                    Front-End, spécialisé en React &
                                    TypeScript.
                                </p>
                                <p className="px-8 md:px-0 leading-8">
                                    Grâce à mon passé militaire j’ai acquis des
                                    compétences uniques et transférables au
                                    monde du développement avec une solide
                                    experience du travail en équipe.
                                    <br />
                                    Ce sont des atouts précieux pour tous
                                    projets.
                                </p>
                                <p className="px-8 md:px-0 leading-8">
                                    Si vous cherchez un développeur sérieux avec
                                    un savoir être, contactez-moi.
                                </p>
                                <p className="px-8 md:px-0 leading-8">
                                    Disponible en Lorraine et Luxembourg.<br /> En régie.
                                </p>
                            </div>
                        </TabsContent>
                        {/* EXPERIENCES PRO */}
                        <TabsContent value="experiences" className="w-full">
                            <div className="flex flex-col gap-[30px] text-left">
                                <h3 className="text-xl">{experience.title}</h3>
                                <p className="max-w-[600px] text-primary/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#E6E7FF] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                                            >
                                                <span className="text-textcolor/60 text-sm pb-1">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-lg text-accent max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.poste}
                                                </h3>
                                                <p>{item.description}</p>
                                                <span className="text-textcolor/60 text-sm pt-2">
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
                                <h3 className="text-xl">{formation.title}</h3>
                                <p className="max-w-[600px] text-textcolor/60 mx-auto xl:mx-0">
                                    {formation.description}
                                </p>
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="bg-[#E6E7FF] py-6 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                            <span className="text-textcolor/60 text-sm pb-1">
                                                Avril 2024 - Juillet 2024
                                            </span>
                                            <h2 className="text-lg text-accent min-h-[60px] text-center lg:text-left">
                                                Front-end et chef de projet
                                            </h2>
                                            <h3 className="text-md pb-4 pt-2 text-center lg:text-left text-textcolor/60">
                                                Projet en équipe agile
                                            </h3>
                                            <p className="text-textcolor text-md text-left leading-6">
                                                J&apos;ai dirigé le
                                                développement d&apos;un site
                                                internet facilitant la mise en
                                                relation entre des familles
                                                d&apos;accueil et des apprenants
                                                pour des séjours linguistiques
                                                en France. Ce projet, réalisé au
                                                sein d&apos;une équipe de
                                                développeurs, a suivi la
                                                méthodologie Agile Scrum
                                            </p>
                                            <ul className="pt-2 text-textcolor text-md text-left leading-6">
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        1. Gestion de Projet :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Coordination de
                                                        l&apos;équipe de
                                                        développement.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Organisation des
                                                        réunions de sprint
                                                        planning, rétrospectives
                                                        et daily stand-ups pour
                                                        assurer une
                                                        communication efficace
                                                        et une progression
                                                        constante.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Supervision de la
                                                        planification des tâches
                                                        et gestion du backlog
                                                        produit.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        2. Développement
                                                        Front-End :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Développement de
                                                        l&apos;interface
                                                        utilisateur en utilisant
                                                        React et TypeScript.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Revue de code des Pull
                                                        Request.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Supervision de la
                                                        planification des tâches
                                                        et gestion du backlog
                                                        produit.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        3. Utilisation
                                                        Professionnelle de Git
                                                        et GitHub :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Gestion de projets
                                                        collaboratifs avec Git
                                                        et GitHub.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Création et gestion
                                                        des pull requests pour
                                                        intégrer les changements
                                                        de code.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Utilisation des issues
                                                        pour suivre les bugs et
                                                        les nouvelles
                                                        fonctionnalités.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Participation aux
                                                        revues de code pour
                                                        assurer la qualité et la
                                                        cohérence du code au
                                                        sein de l&apos;équipe.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        Résultat :
                                                    </p>
                                                    <p>
                                                        Cette expérience
                                                        m&apos;a permis de
                                                        renforcer mes
                                                        compétences en gestion
                                                        de projet et
                                                        développement front-end.
                                                    </p>
                                                </li>
                                            </ul>
                                            <span className="text-textcolor/60 text-sm pt-5">
                                                MikeCodeur
                                            </span>
                                        </div>
                                    </div>
                                </ScrollArea>
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="bg-[#E6E7FF] py-6 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                            <span className="text-textcolor/60 text-sm pb-1">
                                                Décembre 2023 - Mars 2024
                                            </span>
                                            <h2 className="text-lg text-accent min-h-[40px] text-center lg:text-left">
                                                Front-end et Back-end
                                            </h2>
                                            <h3 className="text-md pb-4 pt-2 text-center lg:text-left text-textcolor/60">
                                                Projet en équipe agile
                                            </h3>
                                            <p className="text-textcolor text-md text-left leading-6">
                                                En tant que développeur web,
                                                j&apos;ai participé au
                                                développement d&apos;un site de
                                                vente de vêtements entre
                                                particuliers, similaire à
                                                Vinted, dans le cadre d&apos;un
                                                projet d&apos;équipe Agile
                                                Scrum. Mon rôle principal a été
                                                de gérer le back-end,
                                                l&apos;authentification avec
                                                Firebase, ainsi que le
                                                déploiement continu.
                                            </p>
                                            <ul className="pt-2 text-textcolor text-md text-left leading-6">
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        1. Développement
                                                        Back-end :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Conception et
                                                        développement de
                                                        l&apos;architecture
                                                        back-end en utilisant
                                                        Firebase pour la gestion
                                                        des bases de données en
                                                        temps réel et le
                                                        stockage sécurisé des
                                                        données.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Mise en œuvre des
                                                        fonctionnalités de
                                                        gestion des
                                                        utilisateurs, des
                                                        annonces de vêtements,
                                                        et des transactions via
                                                        Firebase Cloud Firestore
                                                        et Firebase Realtime
                                                        Database.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Configuration et
                                                        intégration de Firebase
                                                        Authentication pour
                                                        permettre aux
                                                        utilisateurs de
                                                        s&apos;inscrire, de se
                                                        connecter et de
                                                        récupérer leurs comptes
                                                        de manière sécurisée.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        2. Développement
                                                        Front-end :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Création de la page
                                                        d&apos;accueil en
                                                        utilisant React et
                                                        TypeScript pour offrir
                                                        une interface
                                                        utilisateur attractive
                                                        et fonctionnelle, en
                                                        adaptant les designs de
                                                        Vinted grace à
                                                        l&apos;IA.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Développement des
                                                        formulaires de connexion
                                                        et d&apos;ajout de
                                                        vêtements, intégrant les
                                                        validations nécessaires
                                                        pour une expérience
                                                        utilisateur fluide et
                                                        sécurisée, avec
                                                        React-hook-form.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Optimisation des
                                                        performances pour une
                                                        navigation rapide avec
                                                        React Query.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        Résultat :
                                                    </p>
                                                    <p className="pt-3">
                                                        Ce projet m&apos;a
                                                        permis de renforcer mes
                                                        compétences en
                                                        développement back-end,
                                                        en gestion de
                                                        l&apos;authentification
                                                        et en déploiement
                                                        continu, tout en
                                                        collaborant au sein
                                                        d&apos;une équipe Agile.
                                                        J&apos;ai pu developper
                                                        mes competences avec Git
                                                        et GitHub
                                                    </p>
                                                </li>
                                            </ul>
                                            <span className="text-textcolor/60 text-sm pt-5">
                                                MikeCodeur
                                            </span>
                                        </div>
                                    </div>
                                </ScrollArea>
                                <ScrollArea className="h-[600px]">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="bg-[#E6E7FF] py-6 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                            <span className="text-textcolor/60 text-sm pb-1">
                                                Mai 2023 - Mars 2024
                                            </span>
                                            <h2 className="text-lg text-accent min-h-[60px] text-center lg:text-left">
                                                Développeur web React et
                                                TypeScript
                                            </h2>
                                            <h3 className="text-md pb-4 text-center lg:text-left">
                                                Bootcamp React Mastery
                                            </h3>
                                            <p className="text-textcolor text-md leading-6 text-left">
                                                J&apos;ai suivi la formation
                                                Bootcamp React Mastery, un
                                                programme intensif, conçu pour
                                                maîtriser tous les concepts
                                                fondamentaux et avancés de
                                                React. Ce bootcamp m&apos;a
                                                permis de développer des
                                                compétences approfondies en
                                                React tout en me formant à
                                                TypeScript, une compétence
                                                précieuse pour un développeur
                                                front-end moderne.
                                            </p>
                                            <ul className="pt-2 text-textcolor text-md leading-6 text-left">
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        1. Maîtrise de React :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Compréhension des
                                                        bases de React :
                                                        composants fonctionnels
                                                        et classés, état, props,
                                                        hooks, et gestion des
                                                        événements.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Création de composants
                                                        réutilisables et de
                                                        haute performance.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Gestion de l&apos;état
                                                        global avec Context API
                                                        et Redux.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        2. TypeScript :
                                                    </p>
                                                    <p className="pt-3">
                                                        Bien que cette formation
                                                        était en Javascript,
                                                        j&apos;ai profité de
                                                        celle-ci pour me former
                                                        à Typescript en
                                                        effectuant tous les
                                                        exercices et TP avec
                                                        TypeScript.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Introduction et mise
                                                        en œuvre de TypeScript
                                                        dans des projets React
                                                        pour une typage statique
                                                        et une meilleure gestion
                                                        des erreurs.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Utilisation des
                                                        interfaces et types pour
                                                        renforcer la robustesse
                                                        du code.
                                                    </p>
                                                    <p className="pt-3">
                                                        - Intégration de
                                                        TypeScript avec les
                                                        bibliothèques et outils
                                                        de React.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        3. Tests et Qualité du
                                                        Code :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Réalisation de tests
                                                        unitaires,
                                                        d&apos;intégration et
                                                        end-to-end (E2E).
                                                    </p>
                                                    <p className="pt-3">
                                                        - Utilisation de
                                                        frameworks comme Vitest,
                                                        React Testing Library et
                                                        Cypress pour les tests.
                                                    </p>
                                                </li>
                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        4. Design Patterns :
                                                    </p>
                                                    <p className="pt-3">
                                                        - Apprentissage et
                                                        implémentation des
                                                        design patterns pour
                                                        structurer et optimiser
                                                        le code.
                                                    </p>
                                                </li>

                                                <li className="mt-6">
                                                    <p className="font-semibold text-accent">
                                                        Résultat :
                                                    </p>
                                                    <p>
                                                        La formation Bootcamp
                                                        React Mastery m&apos;a
                                                        fourni une base solide
                                                        et complète pour
                                                        développer des
                                                        applications web
                                                        modernes en utilisant
                                                        React et TypeScript.
                                                        Grâce à ce programme,
                                                        j&apos;ai acquis les
                                                        compétences nécessaires
                                                        pour créer des
                                                        applications
                                                        performantes,
                                                        maintenables et je suis
                                                        prêt à relever les défis
                                                        du développement web en
                                                        entreprise.
                                                    </p>
                                                </li>
                                            </ul>
                                            <span className="text-textcolor/60 text-sm pt-5">
                                                MikeCodeur
                                            </span>
                                        </div>
                                    </div>
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
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#E6E7FF] rounded-xl flex justify-center items-center">
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
