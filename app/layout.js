import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fantom Sonic || Speed",
  description: "Landing page for Fantom Sonic || Speed ($fSONIC)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#F5EFCE" }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
