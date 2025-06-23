import { createSignal, onMount } from "solid-js";

export function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = createSignal(false);

  onMount(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  });

  return reducedMotion;
}
