import type { Metadata } from "next";

import { Action } from "./action";
import { Section } from "./section";

export interface Content {
  metadata: Metadata;
  header?: { title: string; subtitle: string; };
  sections: Section[];
  footer?: { text: string; url: string; };
  actions: Action[];
}
