'use client'

import { createContext, useState } from "react";
import { IMenuProviderProps, IMenuontext } from "./MenuContext.interface";

export const MenuContext = createContext({} as IMenuontext);

export const MenuProvider = ({ children }: IMenuProviderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MenuContext.Provider value={{
      menuOpen,
      handleMenu
    }}>
      {children}
    </MenuContext.Provider>
  );
};
