'use client'

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, useAnimation } from "framer-motion";
import { containerAnimationExperience } from "./CardDetailSummary.animations";
import { ICardDatailSummary } from "./CardDetailSummary.interface";
import { CardDetailComponent } from "./components/ContentCardDetail/ContentCardDetail";
import { ContainerCardDetail, Overlay, } from "./CardDetailSummary.styles"
import { CardDetailModal } from "./components/CardDetailModal/CardDetailModal";

export const CardDetailSummary = ({ data }: ICardDatailSummary) => {
  const [selectedId, setSelectedId] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleSelectId = (selectedId: string) => {
    setSelectedId(selectedId as any);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  return (
    <>
      <ContainerCardDetail
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerAnimationExperience}
      >
        {data.map((item) =>
          <CardDetailComponent
            key={item.id}
            item={item}
            selectedId={() => handleSelectId(item.id)}
          />)
        }
      </ContainerCardDetail >
      <AnimatePresence>
        {selectedId && (
          <Overlay>
            <CardDetailModal selectId={selectedId} closeModal={handleCloseModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  )
}
