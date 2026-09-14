"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Approach", "/approach"],
  ["Experiments", "/experiments"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="wordmark focus-ring" href="/" aria-label="Gopika A K, home">GOPIKA <span>A K</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link className={`nav-link focus-ring ${path.startsWith(href) ? "active" : ""}`} href={href} key={href}>{label}</Link>
        ))}
      </nav>
      <button className="menu-button focus-ring" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
      </button>
      <div className={`mobile-panel ${open ? "open" : ""}`} id="mobile-menu">
        <div className="mobile-count">INDEX / 05</div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => <Link href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
        </nav>
        <p>B.Arch · Semester 07<br />CHRIST University</p>
      </div>
    </header>
  );
}
