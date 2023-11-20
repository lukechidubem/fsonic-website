import Head from "next/head";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Fantomsonicinu",
  description: "Fantom Sonic || Speed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="icon"
          href="../../logo2.ico"
          type="image/x-icon"
          sizes="any"
        />
        <style>
          {`
              /* This Dapp has been designed and coded on Next.js13 and solidity by MoonShadow , twitter : @MoonshadowXs06 */
              *::-webkit-scrollbar{width:0.5125pc !important;}*::-webkit-scrollbar-track{background:white !important;}*::-webkit-scrollbar-track{border-radius:.3125pc !important;}body{background:blue !important;}*::-webkit-scrollbar-thumb{background-color:blue !important;}*::-webkit-scrollbar-thumb{border-radius:3.75pt !important;}*::-webkit-scrollbar-thumb{border-left-width:.052083333in !important;}*::-webkit-scrollbar-thumb{border-bottom-width:.052083333in !important;}*::-webkit-scrollbar-thumb{border-right-width:.052083333in !important;}*::-webkit-scrollbar-thumb{border-top-width:.052083333in !important;}*::-webkit-scrollbar-thumb{border-left-style:solid !important;}*::-webkit-scrollbar-thumb{border-bottom-style:solid !important;}*::-webkit-scrollbar-thumb{border-right-style:solid !important;}*::-webkit-scrollbar-thumb{border-top-style:solid !important;}*::-webkit-scrollbar-thumb{border-left-color:#5253fa !important;}*::-webkit-scrollbar-thumb{border-bottom-color:var(--primary) !important;}*::-webkit-scrollbar-thumb{border-right-color:var(--primary) !important;}*::-webkit-scrollbar-thumb{border-top-color:var(--primary) !important;}*::-webkit-scrollbar-thumb{border-image:none !important;}::-webkit-scrollbar-thumb:hover{background-color:var(--tertiary) !important;}
            `}
        </style>
      </head>
      <body className={inter.className} style={{ background: "#F5EFCE" }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
