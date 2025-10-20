import "./globals.css";
import 'react-calendar/dist/Calendar.css';
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { QueryProvider } from "@/components/providers/QueryProvider";


export const metadata = {
  title: "Perdana Task Manager",
  description: "Perdana Task Manager",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "standalone",
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
      <QueryProvider>
        <LayoutWrapper>{children}</LayoutWrapper>
      </QueryProvider>
    </html>
  );
}
