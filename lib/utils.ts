type ClassValue = string | false | null | undefined | Record<string, boolean> | ClassValue[];

// Small local equivalent of the cn helper used by the component system.
export function cn(...inputs: ClassValue[]): string {
  return inputs.flatMap((input) => {
    if (!input) return [];
    if (typeof input === "string") return [input];
    if (Array.isArray(input)) return [cn(...input)];
    return Object.entries(input).filter(([, enabled]) => enabled).map(([name]) => name);
  }).join(" ");
}
