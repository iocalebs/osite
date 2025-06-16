import { Title } from "@solidjs/meta";
import { useI18n } from "~/i18n";

export default function Services() {
  const {
    dict: {
      services: { title, introHeading, intro1, intro2 },
    },
  } = useI18n();
  return (
    <>
      <Title>{title}</Title>
      <main class="prose p-4">
        <h2 class="sr-only">{introHeading}</h2>
        <p class="mb-0">{intro1}</p>
        <p class="mt-2">{intro2}</p>
      </main>
    </>
  );
}
