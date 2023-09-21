import { StaticImageData } from "next/image";

export interface ICardAbout {
  title: string;
  image: StaticImageData;
  text: string;
  type: string;
}
