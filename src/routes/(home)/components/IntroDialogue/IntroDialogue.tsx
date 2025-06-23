import { useI18n } from "~/i18n";
import { Dialogue } from "./components";
import { createSignal, Match, Switch, Show } from "solid-js";

type DialogueOption = "bizdev" | "webdev" | "other";

export function IntroDialogue() {
  const {
    dict: {
      home: {
        welcome,
        serviceGreeting,
        optionBizdev,
        optionWebdev,
        optionOther,
        happyBizdev,
        happyWebdev,
        otherQuestions,
        forMoreInfo,
        emailBizdev,
        emailWebdev,
        emailInquiries,
        phoneDomestic,
        phoneE164,
      },
    },
  } = useI18n();
  const [selectedOption, setSelectedOption] = createSignal<DialogueOption>();
  const selectOption = (opt: DialogueOption) => () => setSelectedOption(opt);
  return (
    <Dialogue>
      <Dialogue.Bubble>
        <Dialogue.Say>{welcome}</Dialogue.Say>
        <Dialogue.Pause />
        <Dialogue.Say>{serviceGreeting}</Dialogue.Say>
      </Dialogue.Bubble>
      <Dialogue.Pause />
      <Dialogue.Options>
        <Dialogue.Option
          selected={selectedOption() == "bizdev"}
          onClick={selectOption("bizdev")}
        >
          {optionBizdev}
        </Dialogue.Option>
        <Dialogue.Option
          selected={selectedOption() == "webdev"}
          onClick={selectOption("webdev")}
        >
          {optionWebdev}
        </Dialogue.Option>
        <Dialogue.Option
          selected={selectedOption() == "other"}
          onClick={selectOption("other")}
        >
          {optionOther}
        </Dialogue.Option>
      </Dialogue.Options>
      <Show when={selectedOption()}>
        <Switch>
          <Match when={selectedOption() == "bizdev"}>
            <Dialogue.Respond>
              <p>{happyBizdev}</p>
              <p class="mb-0">{forMoreInfo}</p>
              <ul class="m-0! list-none p-0">
                <li>
                  <a href={`tel:${phoneE164}`}>{phoneDomestic}</a>
                </li>
                <li>
                  <a href={`mailto:${emailBizdev}`}>{emailBizdev}</a>
                </li>
              </ul>
            </Dialogue.Respond>
          </Match>
          <Match when={selectedOption() == "webdev"}>
            <Dialogue.Respond>
              <p>{happyWebdev}</p>
              <p class="mb-0">{forMoreInfo}</p>
              <ul class="m-0! list-none p-0">
                <li>
                  <a href={`tel:${phoneE164}`}>{phoneDomestic}</a>
                </li>
                <li>
                  <a href={`mailto:${emailWebdev}`}>{emailWebdev}</a>
                </li>
              </ul>
            </Dialogue.Respond>
          </Match>
          <Match when={selectedOption() == "other"}>
            <Dialogue.Respond>
              <p>{otherQuestions}</p>
              <ul class="m-0! list-none p-0">
                <li>
                  <a href={`tel:${phoneE164}`}>{phoneDomestic}</a>
                </li>
                <li>
                  <a href={`mailto:${emailInquiries}`}>{emailInquiries}</a>
                </li>
              </ul>
            </Dialogue.Respond>
          </Match>
        </Switch>
      </Show>
    </Dialogue>
  );
}
