import { createSignal, onCleanup, Show } from "solid-js";
import { usePrefersReducedMotion } from "~/a11y";
import { useDialogue } from "../../context";

type SayProps = {
  children: string;
};

export function Say(props: SayProps) {
  const dialogue = useDialogue();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleChars, setVisibleChars] = createSignal(0);
  dialogue.register(() => {
    const interval = setInterval(() => {
      setVisibleChars((prev) => prev + 1);
      if (visibleChars() === props.children.length) {
        clearInterval(interval);
        dialogue.next();
      }
    }, 25);
    onCleanup(() => clearInterval(interval));
  });
  return (
    <Show when={!prefersReducedMotion()} fallback={props.children}>
      <span aria-label={props.children} class="relative inline-block">
        <span
          aria-hidden="true"
          class="pointer-events-none text-transparent select-none"
        >
          {props.children}
        </span>
        <span aria-hidden="true" class="absolute top-0 left-0 whitespace-pre">
          {props.children.slice(0, visibleChars())}
        </span>
      </span>
    </Show>
  );
}
