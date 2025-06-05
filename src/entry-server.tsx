// @refresh reload
import * as Sentry from "@sentry/solidstart";
import { createHandler, StartServer } from "@solidjs/start/server";

Sentry.init({
  dsn: "https://d1ed2501f04fff038d3e61e2794fb20e@o4509412081467392.ingest.us.sentry.io/4509435304607744",
  integrations: [Sentry.captureConsoleIntegration()],
  tracesSampleRate: 1.0,
});

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
