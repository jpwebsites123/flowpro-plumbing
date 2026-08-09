import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline-light" | "emergency";
  icon?: LucideIcon;
  className?: string;
  external?: boolean;
};

const variantClass: Record<string, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "outline-light": "btn-outline-light",
  emergency: "btn-emergency",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${variantClass[variant]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {Icon && <Icon size={18} strokeWidth={2.5} aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {Icon && <Icon size={18} strokeWidth={2.5} aria-hidden="true" />}
      {children}
    </Link>
  );
}
