import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { identitySchema } from "@/lib/structured-data";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: "Bikash Shaw Portfolio",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@Bikash__Shaw",
  },
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
      <body>
        <JsonLd data={identitySchema} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="bg-background text-foreground flex min-h-dvh flex-col pt-16">
              <NavBar />
              <div className="flex flex-1 flex-col px-4 md:px-20">
                <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 md:px-6">
                  <main id="main-content" className="flex flex-1 flex-col">
                    {children}
                  </main>
                  <Footer />
                </div>
              </div>
              <div className="pointer-events-none fixed top-16 right-20 bottom-0 left-20 z-40 hidden md:block"></div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
