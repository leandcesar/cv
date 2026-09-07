import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiThreads,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Mail, Sun, Linkedin, Languages, Download } from "lucide-react";
import type { ReactNode } from "react";
import type { ActionType } from "@/types/action";

export const Icons = {
  Github: <SiGithub className="w-4 h-4" />,
  Email: <Mail className="w-4 h-4" />,
  Facebook: <SiFacebook className="w-4 h-4" />,
  Instagram: <SiInstagram className="w-4 h-4" />,
  Linkedin: <Linkedin className="w-4 h-4" />,
  Threads: <SiThreads className="w-4 h-4" />,
  X: <SiX className="w-4 h-4" />,
  Theme: <Sun className="w-4 h-4" />,
  Language: <Languages className="w-4 h-4" />,
  PDF: <Download className="w-4 h-4" />,
} satisfies Record<ActionType, ReactNode>;
