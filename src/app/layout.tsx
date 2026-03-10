import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Bikash Shaw",
  description: "Created by Bikash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <Analytics />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground pt-16">
              <NavBar />
              <div className="px-4 md:px-20">
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                  {children}
                  <Footer />
                </div>
              </div>
              <div className="hidden md:block fixed top-16 bottom-0 left-20 right-20 pointer-events-none z-40">
                <div className="max-w-4xl mx-auto h-full border-l-4 border-r-4 border-t-4 border-dotted border-border" />
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
