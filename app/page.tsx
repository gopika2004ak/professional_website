import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Visual } from "@/components/visual";
import { projects } from "@/data/projects";
import { experiments } from "@/data/experiments";

const principles = [
  ["01", "Observe", "Start with the building, the people and the life already present."],
  ["02", "Preserve", "Treat memory and useful existing fabric as design resources."],
  ["03", "Adapt", "Make careful changes that help old spaces serve life now."],
  ["04", "Material", "Let earth, timber, texture and construction remain legible."],
  ["05", "Experience", "Resolve comfort, function and the small routines of a day."],
  ["06", "Make", "Think through drawing, models, observation and work by hand."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="display">Gopika A K</h1>
            <p className="hero-quote">Observing what exists before<br className="desktop-break" /> deciding what comes next.</p>
            <div className="hero-meta"><span>Architecture student</span><span>Conservation / Material / Memory</span></div>
          </div>
          <div className="hero-image-wrap"><Image src="/images/projects/courtyard-memory/hero.png" alt="A weathered Kerala courtyard house viewed through a dark timber threshold" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <div className="hero-link-row"><Link className="text-link" href="/work">Selected work <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="intro-section page-shell">
        <p className="eyebrow">01 / Introduction</p>
        <Reveal className="intro-copy"><p className="statement">A B.Arch student interested in the quieter intelligence of <em>existing places</em>—and in drawing, material and making as ways to understand them.</p><aside className="body">Gopika’s work moves between conservation, adaptive reuse, vernacular architecture and visual storytelling. She is drawn to earth, timber, old houses and the everyday rituals that give spaces meaning.</aside></Reveal>
      </section>

      <section className="selected-work page-shell">
        <SectionHeading index="02" label="Selected work" title="Four studies in memory and material" />
        {projects.map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} index={index} /></Reveal>)}
      </section>

      <section className="approach-preview page-shell">
        <SectionHeading index="03" label="A way of working" title="Few moves, carefully chosen" />
        <div className="principles">{principles.map(([number, title, copy], index) => <Reveal className="principle" delay={index * .04} key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
        <div className="section-link"><Link href="/approach" className="text-link">Read the approach <ArrowRight size={15} /></Link></div>
      </section>

      <section className="archive-preview page-shell">
        <SectionHeading index="04" label="Field notes" title="A more personal archive" />
        <div className="archive-strip">{experiments.slice(0, 3).map((item) => <Reveal key={item.number}><Visual image={item} /></Reveal>)}</div>
        <div className="section-link"><Link href="/experiments" className="text-link">Open the sketchbook <ArrowRight size={15} /></Link></div>
      </section>

      <section className="about-preview page-shell">
        <Reveal><div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Gopika A K"><span>PORTRAIT / TO BE REPLACED</span></div></Reveal>
        <Reveal className="about-preview-copy"><p className="eyebrow">05 / About</p><h2>Calm in<br /><em>chaos.</em></h2><p>Architecture student, sketcher and visual storyteller. Gopika approaches places with curiosity—travelling, listening, documenting and making before drawing conclusions.</p><div className="currently"><p className="eyebrow">Currently interested in</p><div><span>Conservation</span><span>Earth</span><span>Timber</span><span>Old houses</span><span>Kerala</span></div></div><div className="section-link"><Link href="/about" className="text-link">Meet Gopika <ArrowRight size={15} /></Link></div></Reveal>
      </section>
    </>
  );
}
