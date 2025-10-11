
import "./globals.css";
import Header from "@/components/ui/Header";
import 'react-calendar/dist/Calendar.css';
import NavigationBar from "@/components/ui/NavigationBar";

export const metadata = {
  title: "Perdana Task Manager",
  description: "Perdana Task Manager",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/icons/ptm_logo_192.png",
    apple: "/icons/ptm_logo_512.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center !bg-[#f5f5f5]">
        <div className="max-w-[560px] w-full bg-white">
        <Header title="Dashboard" isFixed={true} />
        <main className="pt-[69px] pb-[60px]">
            {children}
          </main>
        </div>
        <NavigationBar />
      </body>
    </html>
  );
}
