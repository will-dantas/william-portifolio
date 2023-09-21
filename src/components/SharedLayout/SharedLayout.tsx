'use client'

import { useState } from "react";
import { initialTabs as tabs } from "./SharedLayout.data";
import { motion, AnimatePresence } from "framer-motion";
import { RiComputerLine } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import {
  BarMac,
  ContainerItems,
  DivItems,
  ImageWrapper,
  Li,
  Main,
  Nav,
  Ul,
  Window
} from "./SharedLayout.styles";

export const SharedLayout = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Window>
      <BarMac>
        <button></button>
        <button></button>
        <button></button>
      </BarMac>
      <Nav>
        <Ul>
          {tabs.map((item, index) => (
            <Li
              key={index}
              selected={item === selectedTab ? true : false}
              onClick={() => setSelectedTab(item)}
            >
              {item.icon === '1' ? <RiComputerLine /> :
                item.icon === '2' ? <IoPhonePortraitOutline /> :
                  <VscServerProcess />
              }
              {`${item.name}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Li>
          ))}
        </Ul>
      </Nav>
      <Main>
        <ContainerItems>
          <AnimatePresence mode="wait">
            {selectedTab.label.map((item, index) => (
              <DivItems
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ImageWrapper src={item.iconItem} alt={`Logo do ${item.nameItem}`} />
                <h1>{item.nameItem}</h1>
              </DivItems>
            ))}
          </AnimatePresence>
        </ContainerItems>
      </Main>
    </Window>
  );
}
