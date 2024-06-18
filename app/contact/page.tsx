"use client";

import { infosContact } from "@/lib/data";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gp-[30px]">
                    <div className="flex-1 flex items-center xl:justify-start mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">{infosContact.map((info, index) => (
                            <li key={index} className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">
                                    {<info.icon />}
                                    </div>
                                </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{info.title}</p>
                                        <h3 className="text-xl">{info.description}</h3>
                                    </div>
                            </li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
