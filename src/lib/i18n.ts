import { createContext, useContext } from "solid-js";
import dicts from "~/dict";

export type Lang = "en" | "fr";

const I18nContext = createContext<Lang>();

export const I18nProvider = I18nContext.Provider;

export function useI18n() {
  const lang = useContext(I18nContext);
  if (!lang) {
    // TODO: log error
    return {
      lang: "en",
      dict: dicts.en,
    };
  }
  return {
    lang,
    dict: dicts[lang],
  };
}
