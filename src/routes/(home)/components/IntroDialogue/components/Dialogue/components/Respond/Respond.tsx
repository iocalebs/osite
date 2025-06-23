import { createSignal, JSXElement, Show } from "solid-js";
import { usePrefersReducedMotion } from "~/a11y";
import { Bubble } from "../Bubble";
import styles from "./Respond.module.css";

export function Respond(props: { children: JSXElement }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [loaded, setLoaded] = createSignal(false);
  setTimeout(() => setLoaded(true), 1800);
  const showResponse = () => prefersReducedMotion() || loaded();
  return (
    <Bubble>
      <Show
        when={showResponse()}
        fallback={<span class="loading loading-dots loading-xl" />}
      >
        <div classList={{ [styles.Respond]: !prefersReducedMotion() }}>
          {props.children}
        </div>
      </Show>
    </Bubble>
  );
}
