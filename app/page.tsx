import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Visual } from "@/components/visual";
import { projects } from "@/data/projects";
import { experiments } from "@/data/experiments";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";

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
            <p className="eyebrow">Architecture / Conservation / Making</p>
            <h1 className="hero-name"><span>Gopika</span><span>A K</span></h1>
            <span className="hero-rule" aria-hidden="true" />
            <p className="hero-quote">Observing what <em>exists</em> before<br className="desktop-break" /> deciding what comes <em>next</em>.</p>
            <div className="hero-link-row"><Link className="text-link" href="/work">Explore work <ArrowRight size={15} /></Link></div>
          </div>
          <div className="hero-image-wrap"><Image src="/images/projects/courtyard-memory/hero-cropped.png" alt="A weathered Kerala courtyard house surrounding a planted open-air court" fill priority sizes="100vw" /></div>
          <p className="hero-meta">Places / People / Materials / Memory</p>
          <p className="hero-aside">Built spaces<br />hold stories.<span aria-hidden="true" /></p>
        </div>
      </section>

      <nav className="micro-gallery" aria-label="Explore the portfolio">
        {[
          { number: "01", label: "Work", meta: "Courtyard / conservation study", location: "Kerala", href: "/work", src: "/images/projects/courtyard-memory/hero-cropped.png", alt: "Weathered Kerala courtyard architecture" },
          { number: "02", label: "Approach", meta: "Site observation / hill landscape", location: "Shimla", href: "/approach", src: "/images/field-notes/shimla-slate-roof.jpg", alt: "Timber and slate roofscape on a Shimla hillside" },
          { number: "03", label: "Experiments", meta: "Material / light / surface study", location: "Ahmedabad", href: "/experiments", src: "/images/field-notes/ahmedabad-sun-breaker.jpg", alt: "Sunlight and deep concrete shading in Ahmedabad" },
          { number: "04", label: "About", meta: "Personal archive / light / memory", location: "Vietnam", href: "/about", src: "/images/field-notes/vietnam-street-courtyard.jpg", alt: "Layered threshold leading to a planted Vietnamese courtyard" },
        ].map((item) => (
          <Link href={item.href} key={item.href} className="micro-gallery-item">
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 50vw, 25vw" />
            <span className="preview-number">{item.number}</span>
            <span className="preview-meta">{item.meta}</span>
            <span className="preview-location">{item.location}</span>
            <strong>{item.label}</strong><ArrowRight size={15} />
          </Link>
        ))}
      </nav>

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
        <Reveal><PortraitPlaceholder /></Reveal>
        <Reveal className="about-preview-copy"><p className="eyebrow">05 / About</p><h2>Curiosity,<br /><em>made visible.</em></h2><p>Architecture student, sketcher and visual storyteller. Gopika approaches places with curiosity—travelling, listening, documenting and making before drawing conclusions.</p><div className="currently"><p className="eyebrow">Currently interested in</p><div><span>Conservation</span><span>Earth</span><span>Timber</span><span>Old houses</span><span>Kerala</span></div></div><div className="section-link"><Link href="/about" className="text-link">Meet Gopika <ArrowRight size={15} /></Link></div></Reveal>
      </section>
    </>
  );
}
