import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export function Visual({ image, priority = false, className = "" }: { image: ProjectImage; priority?: boolean; className?: string }) {
  const ratio = image.ratio ?? "landscape";
  return (
    <figure className={`visual ${ratio} ${className}`}>
      <div className={`visual-frame tone-${image.tone ?? "forest"}`}>
        {image.src ? (
          <Image src={image.src} alt={image.alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 80vw" />
        ) : (
          <div className="architectural-placeholder" role="img" aria-label={image.alt}>
            <span className="placeholder-sun" /><span className="placeholder-plane one" /><span className="placeholder-plane two" />
            <small>IMAGE / DRAWING<br />TO BE REPLACED</small>
          </div>
        )}
      </div>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}
