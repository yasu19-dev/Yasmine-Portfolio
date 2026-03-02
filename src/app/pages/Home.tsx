import { Hero } from "../components/Hero";
import { Introduction } from "../components/Introduction";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Approach } from "../components/Approach";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Approach />
      <Contact />
    </>
  );
}
