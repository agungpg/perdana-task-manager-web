import "./globals.css";
import 'react-calendar/dist/Calendar.css';
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { QueryProvider } from "@/components/providers/QueryProvider";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Perdana Task Manager",
  description: "Perdana Task Manager",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/ptm_logo_192.png",
    apple: "/icons/ptm_logo_512.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
