"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const linksNavigation: NavLinks[] = [
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
