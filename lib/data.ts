import { ExperiencesType, FormationsType, InfosType, NavLinksType, ProjectType, ResumeType, ServicesType, SkillsType, StatsType } from "@/types/types";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaSass, FaWordpress, FaFigma, FaPhoneAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFirebase } from "react-icons/si";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const linksNavigation: NavLinksType[] = [
    {
        name: "accueil",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "a propos",
        path: "/about",
    },
    {
        name: "portfolio",
        path: "/portfolio",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

export const stats: StatsType[] = [
    {
        num: 29,
        text: "Projets complétés",
    },
    {
        num: 8,
        text: "Technologies maitrisées",
    },
    {
        num: 824,
        text: "Commits",
    },
    // {
    //     num: 36,
    //     text: "Pull Request",
    // },
];

/** SERVICE */
export const services: ServicesType[] = [
    {
        num: "01",
        title: "Développement web front-end",
        description: "Je suis spécialisé en Next.js et React, des frameworks modernes et puissants qui permettent de créer des applications web performantes et réactives, avec des interfaces utilisateur intuitives et esthétiques. Mon objectif est de transformer vos idées en réalités numériques robustes et évolutives.",
    },
    {
        num: "02",
        title: "Création de SaaS",
        description: "Avec Next.js, je développe des applications SaaS (Software as a Service) efficaces et évolutives. Je suis capable de transformer vos besoins métier en solutions technologiques concrètes, en offrant une expérience utilisateur de haute qualité.",
    },
    {
        num: "03",
        title: "Création de site vitrine",
        description: "Je conçois et développe des sites vitrines et des landing pages percutantes qui mettent en valeur vos produits ou services. Je crée des pages rapides à charger et optimisées pour le référencement (SEO). Chaque projet est réalisé sur mesure, avec une attention particulière portée au design et à l'ergonomie, afin de maximiser l'impact visuel et l'engagement des visiteurs. Mon objectif est de vous aider à captiver votre audience et à convertir les visiteurs en clients.",
    },
    {
        num: "04",
        title: "Création de site e-commerce",
        description: "Je propose la création de sites e-commerce avec Next.js ou WordPress. Grâce à mon expérience, je développe des plateformes de vente en ligne qui offrent une navigation fluide, une gestion simplifiée des produits et un processus de commande sécurisé. Que vous choisissiez Next.js pour une solution sur mesure ou WordPress pour sa flexibilité et ses nombreuses extensions, je m'engage à fournir une boutique en ligne qui répond à vos besoins et à ceux de vos clients.",
    },
];

/** ABOUT */
export const about: ResumeType = {
    title: "A propos",
    description: "",
};

export const experience: ExperiencesType = {
    icon: "/resume/badge.svg",
    title: "Mes expériences professionnelles",
    description: "Je développe des sites depuis 2019.",
};

export const formation: FormationsType = {
    icon: "/resume/cap.svg",
    title: "Formations",
    description: "",
};

export const skillsList: SkillsType = {
    title: "Mes skills",
    description: "Bla bla",
    skillsList: [
        {
            icon: SiNextdotjs,
            name: "Next",
        },
        {
            icon: FaReact,
            name: "React",
        },
        {
            icon: SiTypescript,
            name: "TypeScript",
        },
        {
            icon: SiTailwindcss,
            name: "Tailwind",
        },
        {
            icon: SiFirebase,
            name: "Firebase",
        },
        {
            icon: FaJs,
            name: "Javascript",
        },

        {
            icon: FaHtml5,
            name: "html 5",
        },
        {
            icon: FaCss3Alt,
            name: "CSS",
        },
        {
            icon: FaGithub,
            name: "Git",
        },
        {
            icon: FaSass,
            name: "Sass",
        },
        {
            icon: FaWordpress,
            name: "WordPress",
        },
        {
            icon: FaFigma,
            name: "Figma",
        },
    ],
};

/** PORTFOLIO */

export const projects: ProjectType[] = [
    {
        num: '01',
        category: 'Frontend',
        title: "",
        description: '',
        stacks: ['Next', 'React', 'TypeScript'],
        image: '/portfolio/site1.png',
        live: '',
        github: '',
    },
    {
        num: '02',
        category: 'Frontend',
        title: "",
        description: '',
        stacks: ['React', 'TypeScript'],
        image: '/portfolio/site2.png',
        live: '',
        github: '',
    },
    {
        num: '03',
        category: 'Frontend & Backend',
        title: "",
        description: '',
        stacks: ['React', 'TypeScript', 'Firebase'],
        image: '/portfolio/site3.png',
        live: '',
        github: '',
    },
]

/** CONTACT */

export const infosContact: InfosType[] = [
    {
        icon: FaPhoneAlt,
        title: 'Téléphone',
        description: '(+33)6 71 39 09 12'
    },
    {
        icon: FaEnvelope,
        title: 'Email',
        description: 'arnaud.pantenier@gmail.com'
    },
    {
        icon: FaMapMarkerAlt,
        title: 'Localité',
        description: 'Nancy, France'
    }
]

// items: [
//     {
//         company: "MikeCode",
//         poste: "Développeur React",
//         duration: "Mai 2023 - Février 2024",
//         description: 'Développeur React'
//     },
//     {
//         company: "Cours en ligne",
//         poste: "HTML CSS Javascript",
//         duration: "Septembre 2020 - Mai 2023",
//         description: ''
//     },
// ],