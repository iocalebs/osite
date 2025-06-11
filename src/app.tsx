import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { ErrorBoundary, Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start/router";
import { HiddenErrorButton, LangSelect } from "./components";
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
        <ErrorBoundary
          fallback={(err) => {
            console.error("Error caught at root boundary:", err);
            const { unexpectedError, email, meanwhileContact } = dicts[lang];
            return (
              <main class="prose p-4">
                <p>{unexpectedError}</p>
                <p>
                  {meanwhileContact(<a href={`mailto:${email}`}>{email}</a>)}
                </p>
              </main>
            );
          }}
        >
          <I18nProvider value={lang}>
            <MetaProvider>
              <Meta lang={lang} />
              <Title>{title}</Title>
              <header>
                <nav class="navbar justify-between px-4 py-2 shadow-sm">
                  <h1 class="text-2xl font-bold">{title}</h1>
                  <LangSelect value={lang} onChange={handleLangChange} />
                </nav>
              </header>
              <Suspense>{props.children}</Suspense>
              <HiddenErrorButton />
            </MetaProvider>
          </I18nProvider>
        </ErrorBoundary>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
