import { useContext } from "react";
import { IMenuontext } from "../context/MenuContext.interface";
import { MenuContext } from "../context/MenuContext";

export function useMenu(): IMenuontext {
  const context = useContext(MenuContext);

  return context;
}
