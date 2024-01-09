import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Cover } from "@/components/Cover/Cover";
import { Experience } from "@/components/Experience/Experience";
import { ExperienceCompanies } from "@/components/ExperienceCompanies/ExperienceCompanies";
import { HardSkills } from "@/components/HardSkills/HardSkills";
import { InfiniteCarousel } from "@/components/InfiniteCarousel/InfiniteCarousel";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <Cover />
      <About />
      <Experience />
      <HardSkills />
      <Projects />
      <ExperienceCompanies />
      <Contact />
      <InfiniteCarousel />
    </div>
  );
}