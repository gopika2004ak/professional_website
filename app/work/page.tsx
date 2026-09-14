import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Selected Work", description: "Conceptual and academic architecture studies by Gopika A K." };

export default function WorkPage() {
  return <><section className="page-hero"><div className="page-hero-meta"><p className="eyebrow">Archive / 2025–26</p></div><div className="page-hero-main"><h1 className="display">Selected<br />Work</h1><p>Studies around conservation, material, domestic life and the possibilities held within existing places.</p></div></section><section className="work-index page-shell"><div className="disclaimer"><p className="eyebrow">A note on the work</p><p>These four entries are clearly marked conceptual placeholders. Their structure is ready for Gopika’s actual academic projects, drawings, photographs and reflections.</p></div>{projects.map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} index={index} /></Reveal>)}</section></>;
}
