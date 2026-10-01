import Image from "next/image";
import { Button } from "@/components/button";
import { team } from "@/data/site";
import { cn } from "@/lib/utils";

type ProviderCardProps = {
  className?: string;
};

export function ProviderCard({ className }: ProviderCardProps) {
  const [lead] = team;

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[32px] border border-black/10 bg-[#faf7f2] shadow-float",
        className
      )}
    >
      <Image
        src={lead.headshot ?? ""}
        alt={lead.headshotAlt ?? lead.name}
        fill
        sizes="(min-width: 640px) 460px, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
        <Button href="/about#meet-the-team" variant="light">
          Meet the Team
        </Button>
      </div>
    </div>
  );
}
