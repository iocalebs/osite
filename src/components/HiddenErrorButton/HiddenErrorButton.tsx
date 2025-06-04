import { createEffect, createSignal } from "solid-js";

/**
 * Hidden button that triggers errors when clicked, to test [error boundaries](https://docs.solidjs.com/reference/components/error-boundary).
 */
export function HiddenErrorButton() {
  const [shouldThrow, setShouldThrow] = createSignal(false);
  createEffect(() => {
    if (shouldThrow()) {
      throw new Error("This is a test error.");
    }
  });
  return (
    <button
      type="button"
      class="hidden"
      aria-hidden="true"
      tabIndex={-1}
      onClick={() => setShouldThrow(true)}
    >
      Trigger Error
    </button>
  );
}
