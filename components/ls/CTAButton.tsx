import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "card";
  target?: string;
  rel?: string;
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  target,
  rel
}: CTAButtonProps) {
  return (
    <a
      className={`cta-button cta-button--${variant}`}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
