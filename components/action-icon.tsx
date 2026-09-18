import { AtSign, Facebook, Github, Instagram, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import type { ActionType } from "@/types/action";

const icons: Partial<Record<ActionType, LucideIcon>> = {
  Email: Mail,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Threads: AtSign,
  X: Twitter,
};

export function ActionIcon({ type, size = 16 }: { type: ActionType; size?: number }) {
  const Icon = icons[type];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}

export function actionLabel(type: ActionType) {
  if (type === "Email") return "E-mail";
  if (type === "Facebook") return "Facebook";
  if (type === "Github") return "GitHub";
  if (type === "Linkedin") return "LinkedIn";
  if (type === "X") return "X / Twitter";
  return type;
}
