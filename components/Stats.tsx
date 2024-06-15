"use client";

import { StatsType } from "@/types/types";
import CountUp from "react-countup";

const stats: StatsType[] = [
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

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-4 max-w-[90vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <>
                            <div
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={4}
                                    delay={2}
                                    className="text-3xl xl:text-5xl font-extrabold"
                                />
                                <p className="max-w-[90px]">{item.text}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
