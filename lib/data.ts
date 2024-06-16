import { ExperiencesType,  NavLinksType,  ResumeType, ServicesType, StatsType } from "@/types/types";

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
        title: "Développement web",
        description: "",
    },
    {
        num: "02",
        title: "Création de SaaS",
        description: "Développement de SaaS avec Next.js",
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

export const skills = {
    title: "Mes skills",
    description: "Bla bla",
    skillsList: [
        {
            icon: '',
            name: 'html 5'
        }
    ]
}