import { createEffect } from "solid-js";
import { useDialogue } from "../../context";

type Props = {
  millis?: number;
};

export function Pause(props: Props) {
  const dialogue = useDialogue();
  dialogue.register(() =>
    createEffect(() => {
      setTimeout(() => {
        dialogue.next();
      }, props.millis || 200);
    }),
  );
  return null;
}
