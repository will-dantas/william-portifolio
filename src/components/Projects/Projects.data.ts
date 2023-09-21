'use client'

import Estadia from "../../../public/aplications/estadia-capa.png";
import NlwCopa from "../../../public/aplications/capa-nwl-copa.png";
import WaiterApp from "../../../public/aplications/capa-waiter-app.png";
import { IProjectData } from "./Projects.interface";

export const projectData: IProjectData[] = [
  {
    id: '0',
    title: "Estadia",
    image: Estadia,
    description: "Estadia é uma plataforma online de hospedagem. Onde o usuário pode se autenticar, fazer a reserva e pagar a viagem em apenas um lugar.",
    tecs: "React, Next.JS, TypeScript, JavaScript, Tailwind CSS, Axios, Prisma, PostgresSQL...",
    link: 'https://estadia-web.vercel.app'
  },
  {
    id: '1',
    title: "Waiter app",
    image: WaiterApp,
    description: "É uma aplicação gerar pedidos em um restaurante e todo o processo é atualizado em tempo real.",
    tecs: "React, React Native, Expo, TypeScript, JavaScript, Styled Components, Prisma, MongoDB, Express, Docker...",
    link: 'https://github.com/will-dantas/waiter-app-mobile'
  },
  {
    id: '2',
    title: "NWL Copa",
    image: NlwCopa,
    description: "É uma aplicativo para geração de grupos para apostas dos jogos da copa do mundo, onde quem pontua poderá subir no ranking do grupo.",
    tecs: "React Native, Expo, TypeScript, JavaScript, Axios, Prisma, PostgresSQL...",
    link: 'https://github.com/will-dantas/nlw-copa-mobile'
  }
];
