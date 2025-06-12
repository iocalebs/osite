import { For } from "solid-js";
import { langs, useI18n, type Lang } from "~/i18n";
import icons from "./icons";

type Props = {
  value: Lang;
  onChange: (value: Lang) => void;
};

export function LangSelect(props: Props) {
  const {
    dict: {
      root: { langCodes, langLabels },
    },
  } = useI18n();
  return (
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost">
        {icons[props.value]}
        {langCodes[props.value]}
      </div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-300 rounded-box z-1 p-2 shadow-md"
      >
        <For each={langs}>
          {(lang) => (
            <li>
              <a onClick={() => props.onChange(lang)}>
                {icons[lang]}
                {langLabels[lang]}
              </a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
