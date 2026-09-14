import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";
import { Visual } from "@/components/visual";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return project ? { title: project.title, description: `${project.type}: ${project.subtitle}. Conceptual placeholder project.` } : {}; }

function TextSection({ index, title, children }: { index: string; title: string; children: string }) {
  return <Reveal><section className="project-section page-shell"><p className="project-section-label">{index}</p><div className="project-section-body"><h2>{title}</h2><p>{children}</p></div></section></Reveal>;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug); const previous = projects[(index - 1 + projects.length) % projects.length]; const next = projects[(index + 1) % projects.length];
  return <article className="project-hero"><header><div className="project-hero-top"><div className="project-id"><p className="eyebrow">Project / {project.number}</p><p className="eyebrow">{project.status}</p></div><div className="project-title-block"><h1 className="display">{project.title}</h1><p>{project.subtitle}</p></div></div><div className="project-hero-visual"><Visual image={project.heroImage} priority /></div><dl className="project-meta page-shell"><div><dt>Type</dt><dd>{project.type}</dd></div><div><dt>Location</dt><dd>{project.location}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Area</dt><dd>{project.area}</dd></div></dl></header>
    <TextSection index="01 / Overview" title="A premise">{project.context}</TextSection><TextSection index="02 / Brief" title="What is being asked">{project.brief}</TextSection>
    <section className="gallery-pair page-shell">{project.gallery.map((image) => <Reveal key={image.caption}><Visual image={image} /></Reveal>)}</section>
    <TextSection index="03 / Design intent" title="Retain, repair, add">{project.designIntent}</TextSection><TextSection index="04 / Concept" title="The central idea">{project.concept}</TextSection><TextSection index="05 / Process" title="Thinking through making">{project.process}</TextSection>
    <section className="drawing-spread page-shell"><SectionHeading index="06" label="Drawings" title="Brighter islands of thought" /><div className="drawing-grid">{project.drawings.map((image) => <Visual image={image} key={image.caption} />)}</div></section>
    <section className="project-section page-shell"><p className="project-section-label">07 / Material</p><div className="project-section-body"><h2>What the hand remembers</h2><Visual image={project.sketches[0]} /><div className="materials-row">{project.materials.map((material, i) => <div className="material" key={material}><span>0{i + 1}</span><p>{material}</p></div>)}</div></div></section>
    <TextSection index="08 / Reflection" title="What remains">{project.reflection}</TextSection>
    <nav className="project-nav" aria-label="Project navigation"><Link href={`/work/${previous.slug}`}><span>Previous project</span><strong>{previous.title}</strong></Link><Link href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong></Link></nav>
  </article>;
}
