import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "vercel",
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // To test language switching locally
      // These "subdomains" are mapped to the loopback interface in /etc/hosts
      allowedHosts: [
        "localhost.infotechottawa.ca",
        "localhost.infothequeottawa.ca",
      ],
    },
  },
});
