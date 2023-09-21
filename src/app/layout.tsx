import { Poppins, Varela_Round } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { MenuProvider } from "@/context/MenuContext";
import { Header } from "@/components/Header/Header";

export const metadata = {
  title: "Estadia",
  description: "Plataforma de reserva de hotéis",
};

const poppins = Varela_Round({ subsets: ["latin"], weight: "400" });

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
