'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';


const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.99,
                    transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
                }}
            >
                <div className="absolute w-[200px] h-[200px] xl:w-[398px] xl:h-[398px] ">
                    <Image
                        src="/profile.png"
                        priority
                        quality={100}
                        fill
                        alt={"portrait de Arnaud"}
                        className="object-contain z-10"
                    />
                </div>

                <motion.svg
                    className="w-[202px] h-[202px] xl:w-[400px] xl:h-[400px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#5B5BD6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 129=0 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;