import { withSentry } from "@sentry/solidstart";
import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(
  withSentry(
    {
      server: {
        preset: "vercel",
      },
      vite: {
        plugins: [tailwindcss()],
        server: {
          // Allows language switching to be tested on localhost by temporarily
          // mapping prod hosts to loopback in /etc/hosts
          allowedHosts: ["infotechottawa.ca", "infothequeottawa.ca"],
        },
      },
    },
    // TODO: Create GitHub issue/PR to allow undefined here?
    {},
  ),
);
