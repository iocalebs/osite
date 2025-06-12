import en from "./en";
import fr from "./fr";

// Probably not the most optimal way to load dictionaries.
// Potential performance issue?
export const dicts = {
  en,
  fr,
};

export type Lang = "en" | "fr";

export const langs = ["en", "fr"] as Lang[];
