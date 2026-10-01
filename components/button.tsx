import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outline-light";
  size?: "md" | "lg";
  className?: string;
};

const styles = {
  primary:
    "bg-charcoal text-white shadow-float hover:bg-black hover:-translate-y-0.5",
  secondary:
    "border border-charcoal/20 bg-white/80 text-charcoal hover:border-charcoal/40 hover:bg-white",
  ghost: "bg-transparent text-charcoal hover:bg-black/5",
  light: "bg-white text-charcoal shadow-float hover:bg-white/90 hover:-translate-y-0.5",
  "outline-light": "border border-white/35 bg-transparent text-white hover:border-white/70 hover:bg-white/10"
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-[15px]"
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className
}: ButtonProps) {
  const shared = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal/50",
    sizes[size],
    styles[variant],
    className
  );

  const content = (
    <>
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={shared}>
        {content}
      </Link>
    );
  }

  return <button className={shared}>{content}</button>;
}
