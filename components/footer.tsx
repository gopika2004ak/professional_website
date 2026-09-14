import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer page-shell">
      <div className="footer-lead">
        <p className="eyebrow">Continue exploring</p>
        <Link href="/contact" className="footer-title focus-ring">Let&apos;s talk <ArrowUpRight strokeWidth={1} /></Link>
      </div>
      <div className="footer-grid">
        <div><strong>GOPIKA A K</strong><p>Architecture / Conservation / Making</p></div>
        <nav aria-label="Footer navigation"><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/approach">Approach</Link><Link href="/experiments">Experiments</Link></nav>
        <div><p>Bachelor of Architecture<br />CHRIST University<br />Semester 07</p></div>
        <p className="copyright">© {new Date().getFullYear()} Gopika A K</p>
      </div>
    </footer>
  );
}
