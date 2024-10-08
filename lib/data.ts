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
        num: 31,
        text: "Projets terminés",
    },
    {
        num: 2,
        text: "Projets en cours",
    },
    {
        num: 880,
        text: "Commits (2024)",
    },
];

/** SERVICE */
export const services: ServicesType[] = [
    {
        num: "01",
        title: "Développement web front-end",
        description: "Je suis spécialisé en React, un framework moderne et puissant qui permet de créer des applications web performantes, avec des interfaces utilisateur intuitives et esthétiques. Mon objectif est de transformer vos idées en réalités numériques robustes et évolutives.",
    },
    {
        num: "02",
        title: "Création de SaaS",
        description: "Avec Next.js, je développe des applications SaaS (Software as a Service) efficaces. Je suis capable de transformer vos besoins métier en solutions technologiques concrètes, avec une expérience utilisateur de haute qualité.",
    },
    {
        num: "03",
        title: "Création de sites internet",
        description: "Je conçois et développe des sites vitrines et des landing pages qui mettent en valeur vos produits ou services, optimisées pour le référencement (SEO). Chaque projet est réalisé sur mesure, avec une attention particulière portée au design et à l'ergonomie, afin de maximiser l'impact visuel et l'engagement des visiteurs. Mon objectif est de vous aider à captiver votre audience et à convertir les visiteurs en clients.",
    },
    {
        num: "04",
        title: "Création de sites E-commerce",
        description: "Je propose la création de sites E-commerce avec Next.js ou WordPress. Je développe des plateformes de vente en ligne qui offrent une gestion simplifiée des produits et un processus de commande sécurisé. Que vous choisissiez Next.js pour une solution sur mesure ou WordPress pour sa flexibilité et ses nombreuses extensions, je m'engage à fournir une boutique en ligne qui répond à vos besoins et à ceux de vos clients.",
    },
];

/** ABOUT */
// Experiences Pro
export const experience: ExperiencesType = {
    icon: "/resume/badge.svg",
    title: "Mes expériences professionnelles",
    description: "Je développe des sites depuis 2019.",
    items: [
        {
            company: "N'JoyLife",
            poste: "Développeur web",
            duration: "Septembre 2020 - Aujourd'hui",
            description: "Création d'un site vitrine pour un professionnel."
        },
        {
            company: "HuilesVak",
            poste: "Développeur WordPress",
            duration: "Septembre 2023 - Aujourd'hui",
            description: "Création d'un site E-commerce avec WordPress, WooCommerce, Stripe."
        },
    ],
};

// Formations
export const formation: FormationsType = {
    icon: "/resume/cap.svg",
    title: "Les formations de développeurs suivies",
    description: "J'ai commencé à me former en autodidacte avant de me professionnaliser avec une formation React Mastery",
};

export const skillsList: SkillsType = {
    title: "Mes technos",
    description: "Liste des technologies utilisés",
    skillsList: [
        {
            icon: FaReact,
            name: "React",
        },
        {
            icon: SiNextdotjs,
            name: "Next",
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
        category: 'Full Stack',
        title: "Application de gestion de cave à vin",
        description: "J'ai développé une application de gestion de cave à vin complète pour les amateurs de vin. Les utilisateurs peuvent organiser leurs bouteilles dans des racks virtuels, facilitant ainsi la gestion visuelle et pratique de leur cave. L'ajout et la suppression de bouteilles sont simplifiés grâce à une interface intuitive, permettant de mettre à jour leurs stocks rapidement et efficacement. La visualisation des stocks est également intégrée, offrant une vue d'ensemble claire et détaillée du contenu de la cave.",
        stacks: ['React', 'TypeScript', 'Firebase'],
        image: '/portfolio/site1.png',
        live: 'https://rack-a-pinard.web.app/',
        github: 'https://github.com/arnaudpant/ts-rack-pinard',
    },
    {
        num: '02',
        category: 'Full Stack',
        title: "Site E-Commerce",
        description: "J'ai recréé le site e-commerce d'un client sous WordPress avec Next.js, Prisma, Neon.io, Stripe",
        stacks: ['Next', 'Prisma', 'Neon'],
        image: '/portfolio/site4.png',
        live: 'https://e-commerce-huiles.vercel.app',
        github: 'https://github.com/arnaudpant/e-commerce-huiles',
    },
    {
        num: '03',
        category: 'Full Stack',
        title: "Site de vente de produits entre particuliers",
        description: 'Cette application permet aux utilisateurs de créer des annonces, de parcourir les produits disponibles, et de finaliser des transactions en ligne de manière sécurisée.',
        stacks: ['React', 'TypeScript', 'Firebase'],
        image: '/portfolio/site2.png',
        live: 'https://bootcamp-vinted.netlify.app/',
        github: 'https://github.com/arnaudpant/vinted',
    },
    {
        num: '04',
        category: 'Front-end | Design',
        title: "Site vitrine pour un client",
        description: "En collaboration avec la cliente, j'ai développé un site vitrine mettant en avant ses services et approches naturelles. Utilisant Figma pour le design initial, nous avons créé une interface utilisateur qui reflète l'identité visuelle de sa pratique. Le site inclut des sections détaillant les services proposés, les ateliers, etc.",
        stacks: ['React', 'TypeScript', 'Figma'],
        image: '/portfolio/site3.png',
        live: 'https://www.joelle-corda-naturopathe.fr/index.html',
        github: 'https://github.com/arnaudpant/ts-njoylife',
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
