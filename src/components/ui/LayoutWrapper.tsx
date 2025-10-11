"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import NavigationBar from "@/components/ui/NavigationBar";
import PathToTitle from "@/constants/layout";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = PathToTitle[pathname as keyof typeof PathToTitle] || "Perdana Task Manager";

  return (
    <body className="min-h-screen flex justify-center !bg-[#f5f5f5]">
      <div className="max-w-[560px] w-full bg-white">
        <Header title={title} isFixed={true} />
        <main className="pt-[69px] pb-[60px]">
          {children}
        </main>
      </div>
      <NavigationBar />
    </body>
  );
}

