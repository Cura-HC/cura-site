import Image from "next/image";
import { cn } from "@/lib/utils";

type OfficeFrameProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function OfficeFrame({ title, subtitle, imageSrc, imageAlt = "Cura Health Collective office", className }: OfficeFrameProps) {
  if (imageSrc) {
    return (
      <div
        className={cn(
          "group relative min-h-[420px] overflow-hidden rounded-[32px] border border-black/10 shadow-float",
          className
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          priority={imageSrc.includes("cura-office-sign")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
          <h3 className="font-serif text-3xl">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/80">{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "photo-fallback glass-line relative overflow-hidden rounded-[32px] border border-black/10 p-8 shadow-float",
        className
      )}
    >
      <div className="absolute inset-x-6 top-6 h-px bg-black/10" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-black/10 bg-white/30 blur-[2px]" />
      <div className="relative flex min-h-[320px] flex-col justify-between">
        <div className="max-w-xs rounded-3xl border border-black/10 bg-white/60 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.28em] text-taupe">Cura Health Collective</p>
          <p className="mt-2 text-sm leading-6 text-charcoal/70">
            A calm, modern care environment in Hoboken, NJ.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-charcoal/70">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
