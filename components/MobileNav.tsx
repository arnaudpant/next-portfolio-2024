"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetClose,
} from "@/components/ui/sheet";
import { linksNavigation } from "@/lib/data";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <AlignRight className="text-accent" size={32} />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <div className="mt-32 mb-40 text-center text-2xl">
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                Arnaud<span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {linksNavigation.map((link, index) => (
                            <SheetClose asChild key={index}>
                                <Link

                                    href={link.path}
                                    className={`${
                                        link.path === pathname &&
                                        "text-accent border-b-2 border-accent"
                                    } capitalize font-medium hover:text-accent transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};
export default MobileNav;
