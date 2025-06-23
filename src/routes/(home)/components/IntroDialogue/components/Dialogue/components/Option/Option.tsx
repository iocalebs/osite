type Props = {
  onClick: () => void;
  children: string;
  selected?: boolean;
};

export function Option(props: Props) {
  return (
    <button
      class={"btn w-1/2"}
      classList={{ "btn-disabled": props.selected }}
      on:click={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}
