import { useI18n } from "~/i18n";

export default function Home() {
  const {
    dict: { welcomeUnderConstruction, intro, inquiries, email },
  } = useI18n();
  return (
    <main class="prose p-4">
      <p>{welcomeUnderConstruction}</p>
      <p>{intro}</p>
      <p>{inquiries(<a href={`mailto:${email}`}>{email}</a>)}</p>
    </main>
  );
}
