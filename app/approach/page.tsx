import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Approach",
  description: "Gopika A K's architectural approach to conservation, adaptation, material and everyday experience.",
};

const values = [
  ["01", "Observe first", "Read the site, climate and everyday patterns before drawing."],
  ["02", "Keep what matters", "Let memory, useful fabric and cultural identity remain legible."],
  ["03", "Use less", "Prefer precise interventions to unnecessary replacement."],
  ["04", "Show material", "Let earth, timber, age and construction stay visible."],
  ["05", "Design for life", "Begin with comfort, rituals and how people actually live."],
];

const areas = [
  "Conservation",
  "Adaptive reuse",
  "Renovation",
  "Vernacular architecture",
  "Earth architecture",
  "Timber",
  "Interiors",
  "Architectural representation",
  "Sketching",
  "Visual storytelling",
];

export default function ApproachPage() {
  return (
    <div className="editorial-page approach-page">
      <section className="editorial-intro page-shell">
        <p className="eyebrow">Approach / 01 · Design ethos</p>
        <div>
          <h1 className="display">Before building</h1>
          <div className="editorial-intro-copy">
            <p className="lead">
              Read what is already there.<br />
              Change only what earns its place.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell rule-top">
        <Reveal className="philosophy">
          <p>
            I begin by reading the building, climate, materials, routines and memories already present. From that understanding, I make a few precise changes that preserve character, improve daily life and keep old and new legible.
          </p>
        </Reveal>
      </section>

      <section className="page-shell">
        <div className="section-heading">
          <span>02</span>
          <p>Working values</p>
          <h2>Five guides for the work</h2>
        </div>
        <div className="values-list">
          {values.map(([number, title, copy]) => (
            <Reveal className="value-row" key={number}>
              <span className="eyebrow">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="areas page-shell">
        <p className="eyebrow">03 / Areas of interest</p>
        <Reveal className="area-cloud">
          {areas.map((area) => <span key={area}>{area}</span>)}
        </Reveal>
      </section>
    </div>
  );
}
