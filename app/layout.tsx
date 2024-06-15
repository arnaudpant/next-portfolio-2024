import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainMono",
});

export const metadata: Metadata = {
    title: "Portfolio Arnaud P.",
    description: "Portfolio développeur web next react typescript en Lorraine, Nancy",
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
                <StairTransition />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
