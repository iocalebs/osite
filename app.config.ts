import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
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
});
