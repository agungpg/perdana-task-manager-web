import "./globals.css";
import 'react-calendar/dist/Calendar.css';
import LayoutWrapper from "@/components/ui/LayoutWrapper";

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
      <LayoutWrapper>{children}</LayoutWrapper>
    </html>
  );
}
