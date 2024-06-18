import { IconType } from "react-icons/lib";

export type NavLinks = {
    name: string;
    path: string
}

export type StatsType = {
    num: number;
    text: string
}

export type ServicesType = {
    num: string;
    title: string;
    description: string;
}

export type ResumeType = {
    title: string;
    description: string;
    info: InfoResumeType[]
}

type InfoResumeType = {
    fieldName: string;
    fieldValue: string;
}

export type ExperiencesType = {
    icon: string,
    title: string,
    description: string
    items: ExperiencesItemsType[]
}

type ExperiencesItemsType = {
    company: string,
    poste: string,
    duration: string,
}

export type NavLinksType = {
    name: string,
    path: string
}

export type SkillsType = {
    title: string;
    description: string;
    skillsList: TechnosList[];
};


type TechnosList =
    {
        icon: IconType
        name: string
    }

export type ProjectType = {
    num: string;
    category: string;
    title: string;
    description: string;
    stacks: StackList[];
    image: string;
    live?: string;
    github?: string;
}

type StackList = 'Next' | 'React' | 'TypeScript' | 'Firebase' | 'Tailwind' | 'ShadCN'

export type InfosType = {
    icon: IconType
    title: string
    description: string;
}