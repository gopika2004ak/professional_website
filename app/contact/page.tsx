import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Contact Gopika A K for conversations around architecture, conservation, making or collaboration." };

// Social profile links can be updated when Gopika's final profiles are ready.
const contactLinks = [
  { label: "Email", value: "gopika.ak@arch.christuniversity.in", href: "mailto:gopika.ak@arch.christuniversity.in" },
  { label: "Instagram", value: "@your-handle", href: "https://instagram.com/" },
  { label: "LinkedIn", value: "Your LinkedIn profile", href: "https://linkedin.com/" },
  { label: "Location", value: "Bengaluru, India", href: "https://maps.google.com/?q=Bengaluru%2C%20India" },
];

export default function ContactPage() {
  return <div className="contact-page"><div className="contact-grid"><aside className="contact-side"><p className="eyebrow">Contact / 01</p><p className="eyebrow">For conversations around architecture,<br />conservation, making or collaboration.</p></aside><section className="contact-main"><div><h1 className="display">Have something worth preserving, studying or <em>reimagining?</em></h1><div className="contact-links">{contactLinks.map((item) => <a className="contact-link" href={item.href} key={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}><span>{item.label}</span><strong>{item.value}</strong><ArrowUpRight size={18} strokeWidth={1.2} /></a>)}</div><p className="contact-note">Social profiles shown here are placeholders and can be updated before publishing or submitting the portfolio.</p></div><p className="eyebrow">Gopika A K · B.Arch · Semester 07</p></section></div></div>;
}
