import { type ComponentType } from "react";
import HomeIcon from "@/components/icons/HomeIcon";
import AboutIcon from "@/components/icons/AboutIcon";
import LatestIcon from "@/components/icons/LatestIcon";
import ContactIcon from "@/components/icons/ContactIcon";

export interface NavItem {
  label: string;
  to: string;
  icon: ComponentType<{ className?: string }>;
}

export const floatingMenuNav: NavItem[] = [
  { label: "Home", to: "/", icon: HomeIcon },
  { label: "About", to: "/about", icon: AboutIcon },
  { label: "Latest", to: "/latest", icon: LatestIcon },
  { label: "Contact", to: "/contact", icon: ContactIcon },
];
