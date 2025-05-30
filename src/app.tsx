import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { getRequestEvent } from "solid-js/web";
import { FileRoutes } from "@solidjs/start/router";
import { LangSelect } from "./components";
import { I18nProvider } from "./lib";
import config from "./config";
import dict from "./dict";
import "./app.css";

type Lang = "en" | "fr";

function getHost(): string | undefined {
  if (import.meta.env.SSR) {
    return getRequestEvent()?.request.headers.get("host") || undefined;
  } else {
    return window.location.host;
  }
}

function getDomain(): string | undefined {
  const host = getHost();
  if (!host) {
    return undefined;
  }
  const domain = host.split(":")[0];
  return domain;
}

function getLang(): Lang {
  const domain = getDomain();
  if (!domain) {
    // TODO: Log something?
    return "en";
  }
  if (domain.endsWith(config.domain.en)) {
    return "en";
  } else if (domain.endsWith(config.domain.fr)) {
    return "fr";
  } else {
    // TODO: Log something?
    return "en";
  }
}

export default function App() {
  const lang = getLang();
  const handleLangChange = (newLang: Lang) => {
    const newUrl = new URL(window.location.href);
    newUrl.hostname = config.domain[newLang];
    window.location.href = newUrl.toString();
  };
  const { title } = dict[lang];
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
