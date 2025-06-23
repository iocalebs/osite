import { JSXElement } from "solid-js";

export default {
  root: {
    title: "Infotech Ottawa",
    description:
      "Infotech Ottawa is an IT consultancy primarily serving local businesses in the Ottawa area.",
    email: "caleb@infotechottawa.ca",
    unexpectedError:
      "An unexpected error has occurred. The site administrator has been notified and will be looking into the problem shortly.",
    meanwhileContact: (mailto: JSXElement) => (
      <>In the meantime, please contact {mailto} for all business inquiries.</>
    ),
    langCodes: {
      en: "EN",
      fr: "FR",
    },
    langLabels: {
      en: "English",
      fr: "Français",
    },
  },
  home: {
    welcome: "Welcome!",
    serviceGreeting: " What can we help you with today?",
    optionBizdev: "Business software",
    optionWebdev: "Company website",
    optionOther: "Other",
    happyBizdev:
      "We're happy to help you with any of the business software that you use. We can also help you choose new software to help grow your business or streamline operations.",
    happyWebdev:
      "We're happy to help you update your existing company website, or build a whole new one if you need.",
    otherQuestions:
      "Infotech Ottawa can help solve a wide range of IT-related problems. Please feel free to contact us at:",
    forMoreInfo:
      "For more information, you can contact us directly by phone or email:",
    emailBizdev: "bizdev@infotechottawa.ca",
    emailWebdev: "webdev@infotechottawa.ca",
    emailInquiries: "info@infotechottawa.ca",
    phoneDomestic: "(613) 777-5650",
    phoneE164: "+16137775650",
  },
  services: {
    title: "Services - Infotech Ottawa",
    introHeading: "Services",
    intro1: "Infotech Ottawa offers a wide range of IT-related services.", // TODO: including...
    intro2:
      "While we are primarily focused on local businesses in Ottawa, we are happy to serve you wherever you are in the world.",
  },
};
