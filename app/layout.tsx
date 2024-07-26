import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const JetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainMono",
});

export const metadata: Metadata = {
    title: "Portfolio de Développeur Web à Nancy | Next.js, React & TypeScript | Disponible pour des postes en Lorraine, Nancy et au Luxembourg",
    description:
        "Découvrez le portfolio de Arnaud P., développeur web spécialisé en React, basé en Lorraine et disponible au Luxembourg. Explorez mes projets et compétences en développement front-end.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={JetBrainsMono.variable}>
                <Header />
                {/* <StairTransition /> */}
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
