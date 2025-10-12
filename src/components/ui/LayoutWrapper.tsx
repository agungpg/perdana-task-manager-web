"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import NavigationBar from "@/components/ui/NavigationBar";
import {PathToTitle, pathWithHome, pathWithNavbar} from "@/constants/layout";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = PathToTitle[pathname as keyof typeof PathToTitle] || "Perdana Task Manager";

  const isPathWithHome = pathWithHome.includes(pathname);
  const isPathWithNavbar = pathWithNavbar.includes(pathname);
  const headerForMainClass = isPathWithHome ? "pt-[69px]" : "pt-[0px]";
  const navbarForMainClass = isPathWithNavbar ? "pb-[60px]" : "pb-[0px]";
  
  return (
    <body className="min-h-screen flex justify-center !bg-[#f5f5f5]">
      <div className="max-w-[560px] w-full bg-white">
        {isPathWithHome && <Header title={title} isFixed={true} />}
        <main className={`${headerForMainClass} ${navbarForMainClass}`}>
          {children}
        </main>
      </div>
      {isPathWithNavbar && <NavigationBar />}
    </body>
  );
}

