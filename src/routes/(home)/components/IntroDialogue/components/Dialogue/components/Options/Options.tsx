import { children, createSignal, For, Show } from "solid-js";
import { useDialogue } from "../../context";
import { Option } from "../Option";
import styles from "./Options.module.css";

type Props = {
  children: ReturnType<typeof Option>[];
};

export function Options(props: Props) {
  const dialogue = useDialogue();
  const [showOptions, setShowOptions] = createSignal(false);
  dialogue.register(() => {
    setShowOptions(true);
  });
  return (
    <Show when={showOptions()}>
      {(() => {
        const options = children(() => props.children);
        return (
          <div class="flex flex-col gap-2">
            <For each={options.toArray()}>
              {(option, i) => (
                <div
                  class={styles.Option}
                  style={{
                    "animation-delay": `${i() * 120}ms`,
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
