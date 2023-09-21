import { ReactNode } from 'react';

export interface IMenuontext {
  menuOpen: boolean;
  handleMenu: () => void;
}

export interface IMenuProviderProps {
  children: ReactNode;
}
