import { getRequestEvent } from "solid-js/web";
import type { Lang } from "./i18ntypes";

function getHost(): string | undefined {
  const requestEvent = getRequestEvent();
  if (requestEvent) {
    const host = requestEvent.request.headers.get("host");
    if (host == null) {
      console.error(
        "Language detection failure: unable to determine domain: no Host header in request event",
      );
      return undefined;
    }
    return host;
  } else if (typeof window !== "undefined") {
    return window.location.host;
  } else {
    console.error(
      "Language detection failure: unable to determine domain: no request event or window object",
    );
    return undefined;
  }
}

export function detectDomainLang(domains: Record<Lang, string>): Lang {
  const domain = getHost()?.split(":")[0];
  if (!domain) {
    console.error(
      "Language detection failure: unable to determine domain - defaulting to 'en'",
    );
    return "en";
  }
  for (const [lang, langDomain] of Object.entries(domains)) {
    if (domain.endsWith(langDomain)) {
      return lang as Lang;
    }
  }
  console.error(
    `Language detection failure: unrecognized domain ${domain} - defaulting to 'en'`,
  );
  return "en";
}
