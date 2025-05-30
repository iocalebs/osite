import { useI18n } from "~/lib";

export default function Home() {
  const {
    dict: { intro1, intro2, intro3, email },
  } = useI18n();
  return (
    <main class="prose p-4">
      <p>{intro1}</p>
      <p>{intro2}</p>
      <p>{intro3(<a href={`mailto:${email}`}>{email}</a>)}</p>
    </main>
  );
}
