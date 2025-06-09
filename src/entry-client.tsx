// @refresh reload
import * as Sentry from "@sentry/solidstart";
import { solidRouterBrowserTracingIntegration } from "@sentry/solidstart/solidrouter";
import { mount, StartClient } from "@solidjs/start/client";
import { injectSpeedInsights } from "@vercel/speed-insights";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: "https://d1ed2501f04fff038d3e61e2794fb20e@o4509412081467392.ingest.us.sentry.io/4509435304607744",
    integrations: [
      Sentry.captureConsoleIntegration(),
      solidRouterBrowserTracingIntegration(),
    ],
    tracesSampleRate: 1.0,
  });
}

injectSpeedInsights();

mount(() => <StartClient />, document.getElementById("app")!);
