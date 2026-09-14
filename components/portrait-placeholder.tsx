import Image from "next/image";

export function PortraitPlaceholder() {
  return (
    <figure className="portrait-placeholder">
      <Image
        src="/images/about/portrait-placeholder.svg"
        alt="Abstract architectural portrait placeholder for Gopika A K"
        fill
        sizes="(max-width: 640px) 100vw, 45vw"
      />
    </figure>
  );
}
