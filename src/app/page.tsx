import { About } from "@/components/About/About";
import { Cover } from "@/components/Cover/Cover";
import { HardSkills } from "@/components/HardSkills/HardSkills";

export default function Home() {
  return (
    <div>
      <Cover />
      <About />
      <HardSkills />
    </div>
  );
}