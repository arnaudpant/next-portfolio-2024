import { ExperiencesType, InfosType, NavLinksType, ProjectType, ResumeType, ServicesType, SkillsType, StatsType } from "@/types/types";
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
    {
        num: 36,
        text: "Pull Request",
    },
];

/** SERVICE */
export const services: ServicesType[] = [
    {
        num: "01",
        title: "Développement web front-end",
        description: "Développement d'application web avec Next.js, React et TypeScript",
    },
    {
        num: "02",
        title: "Création de SaaS",
        description: "Création de SaaS avec Next.js",
    },
    {
        num: "03",
        title: "Création de site vitrine",
        description: "",
    },
    {
        num: "04",
        title: "Création de site e-commerce",
        description: "",
    },
];

/** ABOUT */
export const about: ResumeType = {
    title: "A propos",
    description: "bla bla",
    info: [
        {
            fieldName: "Nom",
            fieldValue: "Arnaud Pantenier",
        },
        {
            fieldName: "Téléphone",
            fieldValue: "(+33)6 71 39 09 12",
        },
        {
            fieldName: "Email",
            fieldValue: "arnaud.pantenier@gmail.com",
        },
    ],
};

export const experience: ExperiencesType = {
    icon: "/resume/badge.svg",
    title: "Mes expériences professionnelles",
    description: "Je développe des sites depuis 2019",
    items: [
        {
            company: "MikeCodeur",
            poste: "Front-end et chef de projet",
            duration: "Avril 2024 - Aujourd'hui",
        },
        {
            company: "HuilesVak",
            poste: "Création site E-commerce",
            duration: "Mars 2024 - Aujourd'hui",
        },
        {
            company: "MikeCodeur",
            poste: "Back-end et Front-end",
            duration: "Décembre 2023 - Mars 2024",
        },
    ],
};

export const education: ExperiencesType = {
    icon: "/resume/cap.svg",
    title: "Formations",
    description: "",
    items: [
        {
            company: "React Mastery",
            poste: "Développeur React",
            duration: "Mai 2023 - Février 2024",
        },
        {
            company: "Cours en ligne",
            poste: "HTML CSS Javascript",
            duration: "Septembre 2020 - Mai 2023",
        },
    ],
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