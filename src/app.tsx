import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start/router";
import { LangSelect } from "./components";
import { type Lang, I18nProvider, detectDomainLang, dicts } from "./i18n";
import "./app.css";

const domains: Record<Lang, string> = {
  en: "infotechottawa.ca",
  fr: "infothequeottawa.ca",
};

export default function App() {
  const lang = detectDomainLang(domains);
  const handleLangChange = (newLang: Lang) => {
    const newUrl = new URL(window.location.href);
    newUrl.hostname = domains[newLang];
    window.location.href = newUrl.toString();
  };
  const { title } = dicts[lang];
  return (
    <Router
      root={(props) => (
        <I18nProvider value={lang}>
          <MetaProvider>
            <Meta lang={lang} />
            <Title>{title}</Title>
            <header>
              <nav class="navbar justify-between px-4 py-2 shadow-sm">
                <a href="/" class="text-2xl font-bold">
                  <h1>{title}</h1>
                </a>
                <LangSelect value={lang} onChange={handleLangChange} />
              </nav>
            </header>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        </I18nProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
