import { createContext, useContext } from "solid-js";
import { dicts, Lang } from "./dict";

const I18nContext = createContext<Lang>();

export const I18nProvider = I18nContext.Provider;

export function useI18n() {
  const lang = useContext(I18nContext);
  if (!lang) {
    console.error(
      "useI18n used outside of I18nProvider context: defaulting to 'en'",
    );
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
