import { StaticImageData } from "next/image";

export interface IProjectData {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
  tecs: string;
  link: string;
}