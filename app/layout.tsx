import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { VercelToolbar } from "@vercel/toolbar/next";

import { SideBar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polity",
  description: "Wealth Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="marker-io" strategy="afterInteractive">
          {`
            window.markerConfig = {
              project: '673c9aeac69e926a4bf7db08',
              source: 'snippet'
            };
            !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","clearReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden bg-gray-50 w-full text-gray-900">
          <VercelToolbar />
          {/* <SideBar /> */}

          {/* <div className="relative flex overflow-y-auto overflow-x-hidden py-2 px-2 h-screen w-full"> */}
          {children}
          {/* </div> */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
