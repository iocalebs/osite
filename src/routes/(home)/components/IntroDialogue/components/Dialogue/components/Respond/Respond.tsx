import { createSignal, JSXElement, Show } from "solid-js";
import { Bubble } from "../Bubble";
import styles from "./Respond.module.css";

export function Respond(props: { children: JSXElement }) {
  const [loaded, setLoaded] = createSignal(false);
  setTimeout(() => setLoaded(true), 1800);
  return (
    <Bubble>
      <Show
        when={loaded()}
        fallback={<span class="loading loading-dots loading-xl" />}
      >
        <div class={styles.Respond}>{props.children}</div>
      </Show>
    </Bubble>
  );
}
