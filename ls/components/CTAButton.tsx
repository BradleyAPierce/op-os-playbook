import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function CTAButton({
  children,
  href,
  variant = "primary"
}: CTAButtonProps) {
  return (
    <a className={`cta-button cta-button--${variant}`} href={href}>
      {children}
    </a>
  );
}
