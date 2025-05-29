import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { getRequestEvent } from "solid-js/web";
import { LangSelect } from "./components";
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
  // TODO: create issue for handling accept-language
  const lang = getLang();
  const handleLangChange = (newLang: Lang) => {
    const newUrl = new URL(window.location.href);
    switch (newLang) {
      case "en":
        newUrl.hostname = config.domain.en;
        break;
      // TODO: investigate why removing this cause doesn't cause TypeScript error
      case "fr":
        newUrl.hostname = config.domain.fr;
        break;
    }
    window.location.href = newUrl.toString();
  };

  const { title, intro1, intro2, intro3, email } = dict[lang];

  return (
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
      <main class="prose p-4">
        <p>{intro1}</p>
        <p>{intro2}</p>
        <p>{intro3(<a href={`mailto:${email}`}>{email}</a>)}</p>
      </main>
    </MetaProvider>
  );
}
