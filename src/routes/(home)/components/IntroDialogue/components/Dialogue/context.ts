import { createContext, useContext } from "solid-js";

export type DialogueController = {
  register: (event: () => void) => void;
  next: () => void;
};

export const DialogueContext = createContext<DialogueController>();

export function useDialogue() {
  const ctx = useContext(DialogueContext);
  if (!ctx) {
    throw new Error("Say must be used inside a Dialogue");
  }
  return ctx;
}
