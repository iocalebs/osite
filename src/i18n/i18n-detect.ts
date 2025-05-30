import type { Lang } from "./i18n-types";
import { getRequestEvent } from "solid-js/web";

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

type DomainMap = {
  [k in Lang]: string;
};

export function domainLang(domains: DomainMap): Lang {
  const domain = getDomain();
  if (!domain) {
    // TODO: Log something?
    return "en";
  }
  if (domain.endsWith(domains.en)) {
    return "en";
  } else if (domain.endsWith(domains.fr)) {
    return "fr";
  } else {
    // TODO: Log something?
    return "en";
  }
}
