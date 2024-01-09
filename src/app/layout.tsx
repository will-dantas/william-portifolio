import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { MenuProvider } from "@/context/MenuContext";
import { Header } from "@/components/Header/Header";
import Logo from "../../public/logo-wd.png"
import Head from "next/head";

export const metadata = {
  title: "William Dantas",
  description: "Potifólio de William Dantas",
  icons: {
    icon: "../../public/logo-wd.png"
  },
};

const poppins = Inter({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MenuProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Header />
            {children}
          </StyledComponentsRegistry>
        </MenuProvider>
      </body>
    </html>
  );
}
