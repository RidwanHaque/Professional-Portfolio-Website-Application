import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ridwan Haque | Portfolio",
  description: "Ridwan Haque's portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
          
          
          {/*Creating two DIV elements to hold our page colors*/}
          <div className="bg-[#ff000025] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" ></div>
          <div className="bg-[#1e00ff1c] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" ></div>
          
          {/*as the viewport gets smaller we need to change the position of the divs this can be done with breakpoints*/}
          {/*absolute positining and relative positining (add the relative class in the body and the elemnts will be positioned relative to the body*/}
          
          <ActiveSectionContextProvider>
          <Header /> 
          {children}
          </ActiveSectionContextProvider>
          
          {/* Footer can be added here if needed */}
      </body>
    </html>
  );
}
