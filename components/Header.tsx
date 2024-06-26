import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="pb-8 pt-2 xl:py-12 text-textcolor">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        Arnaud<span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Contactez-moi</Button>
                    </Link>
                </div>
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
