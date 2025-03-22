import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/assets/gbclass.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title:
    "Eshark | Healthcare Patient Management System | Smart Medical Solution",
  description:
    "A modern and reliable healthcare patient management system designed to streamline clinic and hospital operations — including appointments, medical records, billing, and more. Built for doctors, trusted by patients.",
  icons: "/icon.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
