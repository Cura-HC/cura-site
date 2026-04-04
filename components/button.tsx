import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary: "bg-charcoal text-white hover:bg-black shadow-soft",
  secondary: "border border-black/10 bg-white/80 text-charcoal hover:bg-white",
  ghost: "bg-transparent text-charcoal hover:bg-black/5"
};

export function Button({
  href,
  children,
  variant = "primary",
  className
}: ButtonProps) {
  const shared = cn(
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={shared}>
        {children}
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    );
  }

  return <button className={shared}>{children}</button>;
}
