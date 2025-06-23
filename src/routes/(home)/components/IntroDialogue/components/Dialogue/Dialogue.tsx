import { JSXElement, onMount } from "solid-js";
import { DialogueContext, DialogueController } from "./context";
import { Bubble, Option, Options, Pause, Respond, Say } from "./components";

export function Dialogue(props: { children: JSXElement }) {
  const eventQueue: (() => void)[] = [];
  const controller: DialogueController = {
    register: (event: () => void) => {
      eventQueue.push(event);
    },
    next: () => {
      const nextEvent = eventQueue.shift();
      if (nextEvent) {
        nextEvent();
      }
    },
  };

  onMount(() => {
    controller.next();
  });

  return (
    <DialogueContext.Provider value={controller}>
      <div class="flex flex-col gap-4">{props.children}</div>
    </DialogueContext.Provider>
  );
}

Dialogue.Bubble = Bubble;
Dialogue.Option = Option;
Dialogue.Options = Options;
Dialogue.Pause = Pause;
Dialogue.Respond = Respond;
Dialogue.Say = Say;
