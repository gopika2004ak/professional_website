import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Approach", description: "Gopika A K's architectural approach to conservation, adaptation, material and everyday experience." };

const values = [
  ["01", "Observe before intervening", "Understand the site, people, climate and existing building before beginning to draw."],
  ["02", "Preserve what matters", "Treat cultural identity, memory and useful existing fabric as resources—not obstacles."],
  ["03", "Use less, carefully", "Prefer a few deliberate architectural moves to unnecessary complexity or replacement."],
  ["04", "Respect material", "Let earth, timber, texture, age and the marks of construction remain visible and meaningful."],
  ["05", "Design for everyday life", "Make comfort, function, mental wellbeing and daily routines central to architectural decisions."],
];
const areas = ["Conservation", "Adaptive reuse", "Renovation", "Vernacular architecture", "Earth architecture", "Timber", "Interiors", "Architectural representation", "Sketching", "Visual storytelling"];

export default function ApproachPage() {
  return <div className="editorial-page"><section className="editorial-intro page-shell"><p className="eyebrow">Method / 01</p><div><h1 className="display">Before<br />building</h1><div className="editorial-intro-copy"><p className="lead">A position on what to retain, what to change, and how little may be enough.</p></div></div></section>
    <section className="page-shell rule-top"><Reveal className="philosophy"><p>I am interested in architecture that begins with observation rather than replacement. Existing buildings, materials, habits and memories often hold qualities worth retaining. My approach is to understand these layers before adding anything new, using design as a careful act of adaptation. I am drawn to earth, timber and spaces shaped through everyday use. Good architecture does not need many gestures; it needs the right ones.</p></Reveal></section>
    <section className="page-shell"><div className="section-heading"><span>02</span><p>Working values</p><h2>Five guides for the work</h2></div><div className="values-list">{values.map(([number, title, copy]) => <Reveal className="value-row" key={number}><span className="eyebrow">{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></section>
    <section className="areas page-shell"><p className="eyebrow">03 / Areas of interest</p><Reveal className="area-cloud">{areas.map((area) => <span key={area}>{area}</span>)}</Reveal></section>
  </div>;
}
