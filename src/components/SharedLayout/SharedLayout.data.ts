'use client'

import React from "../../../public/icons-tecs/react-svgrepo-com.svg"
import Html from "../../../public/icons-tecs/html-5-svgrepo-com.svg"
import Css from "../../../public/icons-tecs/css-3-svgrepo-com.svg"
import Next from "../../../public/icons-tecs/nextjs-fill-svgrepo-com.svg"
import Sass from "../../../public/icons-tecs/sass-svgrepo-com.svg"
import Javascript from "../../../public/icons-tecs/javascript-svgrepo-com.svg"
import Jest from "../../../public/icons-tecs/jest-svgrepo-com.svg"
import Git from "../../../public/icons-tecs/git-svgrepo-com.svg"
import GitHub from "../../../public/icons-tecs/github-142-svgrepo-com.svg"
import Jira from "../../../public/icons-tecs/jira-svgrepo-com.svg"
import Bitbucket from "../../../public/icons-tecs/bitbucket-svgrepo-com.svg"
import Jekins from "../../../public/icons-tecs/jenkins-svgrepo-com.svg"
import TypeScript from "../../../public/icons-tecs/typescript-official-svgrepo-com.svg"
import StyledComponents from "../../../public/icons-tecs/styled-componets.png"

import Expo from "../../../public/icons-tecs/expo-svgrepo-com.svg"
import ReactNative from "../../../public/icons-tecs/react-native.svg"
import Redux from "../../../public/icons-tecs/redux-svgrepo-com.svg"
import Kotlin from "../../../public/icons-tecs/kotlin-1-logo-svgrepo-com.svg"

import Node from "../../../public/icons-tecs/nodejs-icon-logo-svgrepo-com.svg"
import Php from "../../../public/icons-tecs/php-svgrepo-com.svg"
import Java from "../../../public/icons-tecs/java-svgrepo-com.svg"
import Nest from "../../../public/icons-tecs/nestjs-svgrepo-com.svg"
import Laravel from "../../../public/icons-tecs/laravel-svgrepo-com.svg"
import PostegreSql from "../../../public/icons-tecs/postgresql-svgrepo-com.svg"
import MySql from "../../../public/icons-tecs/mysql-logo-svgrepo-com.svg"
import MongoDb from "../../../public/icons-tecs/mongodb-svgrepo-com.svg"
import Adonis from "../../../public/icons-tecs/adonisjs-svgrepo-com.svg"
import Express from "../../../public/icons-tecs/express-svgrepo-com.svg"
import Vercel from "../../../public/icons-tecs/vercel-fill-svgrepo-com.svg"
import Docker from "../../../public/icons-tecs/docker-svgrepo-com.svg"
import Firebase from "../../../public/icons-tecs/firebase-svgrepo-com.svg"
import Postman from "../../../public/icons-tecs/postman-icon-svgrepo-com.svg"
import Prisma from "../../../public/icons-tecs/light-prisma-svgrepo-com.svg"
import Linux from "../../../public/icons-tecs/linux-svgrepo-com.svg"
import GoogleGPC from "../../../public/icons-tecs/gcp-svgrepo-com.svg"
import GoogleGKE from "../../../public/icons-tecs/google-gke-svgrepo-com.svg"
import { StaticImageData } from "next/image"

interface Items {
  iconItem: StaticImageData;
  nameItem: string;
}

export interface Ingredient {
  icon: string;
  name: string;
  label: Items[];
}

export const allItems: Ingredient[] = [
  {
    icon: '1',
    name: "Frontend",
    label: [
      {
        iconItem: Javascript,
        nameItem: 'JavaScript'
      },
      {
        iconItem: TypeScript,
        nameItem: 'TypeScript'
      },
      {
        iconItem: React,
        nameItem: 'React'
      },
      {
        iconItem: Redux,
        nameItem: 'Redux'
      },
      {
        iconItem: Next,
        nameItem: 'Next.JS'
      },
      {
        iconItem: Html,
        nameItem: 'HTML5'
      },
      {
        iconItem: Css,
        nameItem: 'CSS3'
      },
      {
        iconItem: Sass,
        nameItem: 'Sass'
      },
      {
        iconItem: StyledComponents,
        nameItem: 'Styled Components'
      },
      {
        iconItem: Jest,
        nameItem: 'Jest'
      },
      {
        iconItem: Git,
        nameItem: 'Git'
      },
      {
        iconItem: GitHub,
        nameItem: 'GitHub'
      },
      {
        iconItem: Jira,
        nameItem: 'Jira'
      },
      {
        iconItem: Bitbucket,
        nameItem: 'Bitbucket'
      },
      {
        iconItem: Jekins,
        nameItem: 'Jekins'
      }
    ]
  },
  {
    icon: '2',
    name: "Mobile",
    label: [
      {
        iconItem: Javascript,
        nameItem: 'JavaScript'
      },
      {
        iconItem: TypeScript,
        nameItem: 'TypeScript'
      },
      {
        iconItem: Kotlin,
        nameItem: 'Kotlin'
      },
      {
        iconItem: ReactNative,
        nameItem: 'React Native'
      },
      {
        iconItem: Expo,
        nameItem: 'Expo'
      }
    ]
  },
  {
    icon: '3',
    name: "Backend",
    label: [
      {
        iconItem: Node,
        nameItem: 'Node'
      },
      {
        iconItem: TypeScript,
        nameItem: 'TypeScript'
      },
      {
        iconItem: Php,
        nameItem: 'PHP'
      },
      {
        iconItem: Java,
        nameItem: 'Java'
      },
      {
        iconItem: Nest,
        nameItem: 'Nest.JS'
      },
      {
        iconItem: Express,
        nameItem: 'Express.JS'
      },
      {
        iconItem: Adonis,
        nameItem: 'Adonis.JS'
      },
      {
        iconItem: Laravel,
        nameItem: 'Laravel'
      },
      {
        iconItem: Docker,
        nameItem: 'Docker'
      },
      {
        iconItem: PostegreSql,
        nameItem: 'PostegreSQL'
      },
      {
        iconItem: MySql,
        nameItem: 'MySQL'
      },
      {
        iconItem: MongoDb,
        nameItem: 'MongoDB'
      },
      {
        iconItem: Prisma,
        nameItem: 'Prisma'
      },
      {
        iconItem: Postman,
        nameItem: 'Postman'
      },
      {
        iconItem: Vercel,
        nameItem: 'Vercel'
      },
      {
        iconItem: Firebase,
        nameItem: 'Firebase'
      },
      {
        iconItem: GoogleGPC,
        nameItem: 'Google GPC'
      },
      {
        iconItem: GoogleGKE,
        nameItem: 'Google GKE'
      },
      {
        iconItem: Jekins,
        nameItem: 'Jekins'
      },
      {
        iconItem: Linux,
        nameItem: 'Linux'
      }
    ]
  },
];

const [frontend, mobile, backend] = allItems;
export const initialTabs = [frontend, mobile, backend];
