import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { provider } from "@/data/site";
import { cn } from "@/lib/utils";

type ProviderCardProps = {
  className?: string;
};

export function ProviderCard({ className }: ProviderCardProps) {
  return (
    <div
      className={cn(
        "panel overflow-hidden rounded-[32px] p-8 shadow-float",
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.28em] text-taupe">
        Meet the Provider
      </p>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="relative aspect-[4/5] w-full max-w-[200px] shrink-0 overflow-hidden rounded-[24px] border border-black/10 bg-[#faf7f2]">
          <Image
            src={provider.headshot}
            alt={provider.headshotAlt}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-charcoal">
            {provider.credentials
              ? `${provider.name}, ${provider.credentials}`
              : provider.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">
            {provider.blurb}
          </p>
          <Link
            href="/about#meet-the-provider"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-charcoal transition hover:text-black"
          >
            Learn More
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
