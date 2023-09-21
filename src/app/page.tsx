import { About } from "@/components/About/About";
import { Cover } from "@/components/Cover/Cover";
import { Experience } from "@/components/Experience/Experience";
import { HardSkills } from "@/components/HardSkills/HardSkills";

export default function Home() {
  return (
    <div>
      <Cover />
      <About />
      <Experience />
      <HardSkills />
    </div>
  );
}