import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Visual } from "@/components/visual";
import { experiments } from "@/data/experiments";

export const metadata: Metadata = { title: "Experiments", description: "Sketches, site notes, material studies, photography and making from Gopika A K's evolving archive." };

export default function ExperimentsPage() {
  const categories = ["Climate", "Thresholds", "Material", "Roofscape", "Settlement", "Everyday life"];
  return <div className="editorial-page page-shell"><section className="editorial-intro"><p className="eyebrow">Field archive / 01–08</p><div><h1 className="display">Field<br /><em>Notes</em></h1><div className="editorial-intro-copy"><p className="lead">Eight site-visit readings of climate, material, thresholds and everyday life across four distinct places.</p></div></div></section><div className="experiment-filter" aria-label="Archive categories">{categories.map((category) => <span key={category}>{category}</span>)}</div><p className="archive-note">Reference imagery currently frames these studies and can be replaced with Gopika&apos;s original photographs and sketches.</p><section className="experiment-grid">{experiments.map((item) => <Reveal className="experiment-item" key={item.number}><Visual image={item} /><div className="experiment-meta"><div><span>{item.number} · {item.category}</span><h2>{item.title}</h2></div><span className="experiment-location">{item.location}<br />{item.year}</span></div><p>{item.caption}</p></Reveal>)}</section></div>;
}
