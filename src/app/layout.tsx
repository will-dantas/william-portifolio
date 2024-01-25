import { Inter, Inter_Tight } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { MenuProvider } from "@/context/MenuContext";
import { Header } from "@/components/Header/Header";

export const metadata = {
  title: "William Dantas",
  description: "Potifólio de William Dantas",
  icons: {
    icon: "../../public/logo-william.png"
  },
};

const inter = Inter_Tight({ style: "normal", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
