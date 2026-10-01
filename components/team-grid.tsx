"use client";

import { useState } from "react";
import Image from "next/image";
import { TeamMember } from "@/lib/types";
import { cn } from "@/lib/utils";

type TeamGridProps = {
  members: TeamMember[];
  className?: string;
};

export function TeamGrid({ members, className }: TeamGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:gap-8",
        className
      )}
    >
      {members.map((member) => (
        <TeamCard key={member.slug} member={member} />
      ))}
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const [pinned, setPinned] = useState(false);

  return (
    <article className="panel flex flex-col p-5 md:p-6">
      <button
        type="button"
        aria-expanded={pinned}
        aria-label={`Show credentials for ${member.name}`}
        onClick={() => setPinned((open) => !open)}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-black/10 bg-[#faf7f2] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal/40"
      >
        {member.headshot ? (
          <Image
            src={member.headshot}
            alt={member.headshotAlt ?? member.name}
            fill
            sizes="(min-width: 640px) 45vw, 100vw"
            className="object-cover"
            style={member.headshotPosition ? { objectPosition: member.headshotPosition } : undefined}
          />
        ) : (
          <div className="photo-fallback flex h-full items-center justify-center">
            <span className="font-serif text-5xl text-charcoal/20">
              {member.name.charAt(0)}
            </span>
          </div>
        )}

        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-4 overflow-y-auto bg-charcoal/95 px-6 py-8 text-white transition-opacity duration-300 group-hover:opacity-100",
            pinned ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
            Credentials
          </p>
          <ul className="space-y-3">
            {member.credentials.map((credential) => (
              <li key={credential} className="text-sm leading-6 text-white/90">
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </button>

      <h3 className="mt-6 font-serif text-2xl text-charcoal">{member.name}</h3>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-taupe">
        {member.title}
      </p>
      <div className="mt-4 space-y-4 text-sm leading-7 text-charcoal/70">
        {member.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      {member.philosophy ? (
        <blockquote className="mt-6 border-l border-stone pl-5 font-serif text-lg leading-8 text-charcoal/80">
          {member.philosophy}
        </blockquote>
      ) : null}
    </article>
  );
}
