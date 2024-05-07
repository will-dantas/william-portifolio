import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { CardContainer, CardMotion, ImageCard } from "../Cover.styles";
import { cardVariants } from "../Cover.animate";

interface ElementsProps {
  elements: StaticImageData[];
}

interface Props {
  emoji: StaticImageData;
}

function Card({ emoji }: Props) {
  return (
    <CardContainer
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <CardMotion variants={cardVariants}>
       <ImageCard src={emoji} alt="some image"/>
      </CardMotion>
    </CardContainer>
  );
}

export const ArrayLooper = ({ elements }: ElementsProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [elements]);

  return (
    <Card emoji={elements[index]} key={elements[index] as any} />
  );
};