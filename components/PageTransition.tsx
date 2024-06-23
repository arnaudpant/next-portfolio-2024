"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { delay: 0, duration: 2, ease: "easeInOut" },
                }}
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            <div key={pathname}>{children}</div>
        </AnimatePresence>
    );
};

export default PageTransition;
