type Lang = "en" | "fr";

type Props = {
  value: Lang;
  onChange: (value: Lang) => void;
};
export type { Props as LangSelectProps };

export function LangSelect(props: Props) {
  return (
    <select
      class="select select-ghost w-fit pr-8"
      onChange={(e) => props.onChange(e.currentTarget.value as Lang)}
      value={props.value}
    >
      <option value="en" selected={props.value == "en"}>
        EN
      </option>
      <option value="fr" selected={props.value == "fr"}>
        FR
      </option>
    </select>
  );
}
