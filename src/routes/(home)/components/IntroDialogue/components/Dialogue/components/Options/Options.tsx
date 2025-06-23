import { children, createSignal, For, Show } from "solid-js";
import { usePrefersReducedMotion } from "~/a11y";
import { useDialogue } from "../../context";
import { Option } from "../Option";
import styles from "./Options.module.css";

type Props = {
  children: ReturnType<typeof Option>[];
};

export function Options(props: Props) {
  const dialogue = useDialogue();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ready, setReady] = createSignal(false);
  dialogue.register(() => {
    setReady(true);
  });
  const showOptions = () => prefersReducedMotion() || ready();
  return (
    <Show when={showOptions()}>
      {(() => {
        const options = children(() => props.children);
        return (
          <div class="flex flex-col gap-2">
            <For each={options.toArray()}>
              {(option, i) => (
                <div
                  classList={{ [styles.Option]: !prefersReducedMotion() }}
                  style={{
                    ...(!prefersReducedMotion() && {
                      "animation-delay": `${i() * 120}ms`,
                    }),
                  }}
                >
                  {option}
                </div>
              )}
            </For>
          </div>
        );
      })()}
    </Show>
  );
}
