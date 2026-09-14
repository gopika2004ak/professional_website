import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "About", description: "About Gopika A K, a seventh-semester Bachelor of Architecture student at CHRIST University." };

const facts = [
  ["Interests", ["Conservation", "Adaptive reuse", "Earth + timber", "Interiors", "Vernacular architecture", "Kerala architecture"]],
  ["Tools / skills", ["Hand sketching", "Architectural composition", "Revit", "AutoCAD", "Canva", "iPad drawing", "Colour grading"]],
  ["Personal archive", ["Site visits", "Travel", "Reading", "Local food + cooking", "Pottery", "Photography", "Wandering / wondering"]],
  ["Looking toward", ["Historic buildings", "Renovation", "Material culture", "Visual storytelling", "Careful interventions", "Everyday wellbeing"]],
];

export default function AboutPage() {
  return <div className="editorial-page"><section className="editorial-intro page-shell"><p className="eyebrow">Profile / 01</p><div><h1 className="display">Gopika A K</h1><div className="editorial-intro-copy"><p className="eyebrow">Architecture student · Designer · Sketcher · Visual storyteller</p><p className="lead">Interested in buildings that carry memory, materials that tell the truth, and the ordinary acts that make a place feel lived in.</p></div></div></section>
    <section className="bio-grid page-shell"><Reveal><div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Gopika A K"><span>PORTRAIT / TO BE REPLACED</span></div></Reveal><Reveal className="bio-copy"><p className="eyebrow">Biography</p><h2>Looking closely,<br />then making.</h2><p>Gopika A K is a seventh-semester Bachelor of Architecture student at CHRIST University whose interests lie in conservation, materiality and the quieter intelligence of existing places. Her work moves between hand sketching, architectural composition, digital tools and close observation of culture, buildings and everyday life.</p><p>She is particularly drawn to earth, timber, renovation, vernacular architecture and spaces carrying memory. Site visits, travel, food and making help her understand architecture beyond the drawing sheet—as something shaped by weather, use, craft and time.</p><div className="facts">{facts.map(([title, items]) => <div className="fact" key={title as string}><h3>{title}</h3><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></Reveal></section>
    <Reveal><section className="quote-band"><p className="eyebrow">A personal note</p><blockquote>“Calm in chaos.”</blockquote></section></Reveal>
    <section className="page-shell about-next"><Link href="/approach" className="text-link">Read the design approach <ArrowRight size={15} /></Link></section>
  </div>;
}
