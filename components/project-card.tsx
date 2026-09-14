import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Visual } from "./visual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-layout-${index % 2}`}>
      <Link href={`/work/${project.slug}`} className="project-visual-link focus-ring" aria-label={`View ${project.title}`}>
        <Visual image={project.heroImage} />
      </Link>
      <div className="project-copy">
        <span className="project-number">{project.number} / 04</span>
        <div><p className="eyebrow">{project.type} · {project.year}</p><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.subtitle}</p></div>
        <div className="project-bottom"><span>{project.location}</span><Link href={`/work/${project.slug}`} className="circle-link" aria-label={`Open ${project.title}`}><ArrowUpRight strokeWidth={1.2} /></Link></div>
      </div>
    </article>
  );
}
