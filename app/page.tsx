import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-sm xl:text-lg text-white/70">
                            Développeur Web
                        </span>
                        <p className="h1 mb-5 mt-2">
                            Hello, je suis <br />
                            <span className="text-accent">Arnaud</span>
                        </p>
                        <h1 className="text-xl max-w-[500px] mb-5 text-white">
                            Développeur Front-end Next & React
                        </h1>
                        <div className="flex flex-col xl:flex-row items-center gap-8 mb-2">
                            <Link
                                href="https://flowcv.com/resume/kgrlfo7rug"
                                target="_blank"
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-2 px-4 py-1"
                                >
                                    <span>Mon CV</span>
                                    <Download size={28} />
                                </Button>
                            </Link>
                            <div className="mb-5 xl:mb-0">
                                <Socials />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
