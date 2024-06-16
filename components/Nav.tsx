"use client";

import { linksNavigation } from "@/lib/data";
import { NavLinks } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {linksNavigation.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}
                    className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
