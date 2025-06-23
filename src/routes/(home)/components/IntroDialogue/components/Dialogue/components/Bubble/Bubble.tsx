import { JSXElement } from "solid-js";

export function Bubble(props: { children: JSXElement }) {
  return (
    <div class="bg-base-200 w-fit rounded-lg px-6 py-3 [&_p:first-of-type]:m-0">
      {props.children}
    </div>
  );
}
