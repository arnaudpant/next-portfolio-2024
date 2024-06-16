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

export type InfoResumeType = {
    fieldName: string;
    fieldValue: string;
}

export type ExperiencesType = {
    icon: string,
    title: string,
    description: string
    items: ExperiencesItemsType[]
}

export type ExperiencesItemsType = {
    company: string,
    poste: string,
    duration: string,
}

export type NavLinksType = {
    name: string,
    path: string
}