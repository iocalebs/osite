import { Title } from "@solidjs/meta";
import { useI18n } from "~/i18n";

export default function Services() {
  const {
    dict: {
      services: { title, intro1, intro2 },
    },
  } = useI18n();
  return (
    <>
      <Title>{title}</Title>
      <main class="prose mt-0 p-4">
        <p>{intro1}</p>
        {/* TODO: Fix paragraph spacing */}
        <p>{intro2}</p>
      </main>
    </>
  );
}
