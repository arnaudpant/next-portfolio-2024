"use client";

import { services } from "@/lib/data";
import { motion } from 'framer-motion'
import { ArrowDownRight } from "lucide-react";


const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:px-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-2">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-4xl font-extrabold">{service.num}</div>
                                <ArrowDownRight size={36} />
                            </div>
                            <h2 className="text-accent text-xl xl:text-2xl">{service.title}</h2>
                            <p className="text-white/70">{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
