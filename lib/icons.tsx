import {
  AlertTriangle,
  Waves,
  Droplet,
  Flame,
  Bath,
  ShowerHead,
  Wrench,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Waves,
  Droplet,
  Flame,
  Bath,
  ShowerHead,
  Wrench,
  Gauge,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Wrench;
}
