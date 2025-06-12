import { For } from "solid-js";
import { langs, useI18n, type Lang } from "~/i18n";
import { FleurDeLys, Trillium } from "./icons";

type Props = {
  value: Lang;
  onChange: (value: Lang) => void;
};

export function LangSelect(props: Props) {
  const langIcons = {
    en: <Trillium />,
    fr: <FleurDeLys />,
  };
  const {
    dict: {
      root: { langCodes, langLabels },
    },
  } = useI18n();
  return (
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost">
        {langIcons[props.value]}
        {langCodes[props.value]}
      </div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-300 rounded-box z-1 p-2 shadow-md"
      >
        {/* TODO: Indicate which language is currently selected */}
        <For each={langs}>
          {(lang) => (
            <li>
              <a onClick={() => props.onChange(lang)}>
                {langIcons[lang]}
                {langLabels[lang]}
              </a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
