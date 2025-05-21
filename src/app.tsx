import { MetaProvider, Title } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>InfoTech Ottawa</Title>
      <main>
        <h1>InfoTech Ottawa</h1>
        <p>Welcome to InfoTech Ottawa!</p>
        <p>
          Our website is currently under construction. Please pardon our
          appearance as we build our space.
        </p>
        <p>
          For all business inquiries, please contact{" "}
          <a href="mailto:caleb@infotechottawa.ca">caleb@infotechottawa.ca</a>.
        </p>
      </main>
    </MetaProvider>
  );
}
