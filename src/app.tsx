import { MetaProvider, Title } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>InfoTech Ottawa</Title>
      <header>
        <nav class="navbar shadow-sm">
          <a href="/" class="text-2xl font-bold">
            <h1>InfoTech Ottawa</h1>
          </a>
        </nav>
      </header>
      <main class="prose p-2">
        <p>
          Welcome! Our website is currently under construction. Please pardon
          our appearance as we build our space.
        </p>
        <p>
          For all business inquiries, please contact{" "}
          <a href="mailto:caleb@infotechottawa.ca">caleb@infotechottawa.ca</a>.
        </p>
      </main>
    </MetaProvider>
  );
}
