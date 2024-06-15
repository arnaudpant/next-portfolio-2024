import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-sm xl:text-lg text-white/70">
                            Développeur Web
                        </span>
                        <h1 className="h1 mb-5 mt-2">
                            Hello, je suis <br />
                            <span className="text-accent">Arnaud</span>
                        </h1>
                        <p className="max-w-[500px] mb-5 text-white">
                            Développeur Front-end Next & React
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8 mb-2">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2 px-4 py-1"
                            >
                                <span>Mon CV</span>
                                <Download size={28} />
                            </Button>
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
