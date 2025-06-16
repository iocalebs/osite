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
    welcomeUnderConstruction:
      "Welcome! Our website is currently under construction. Please forgive our appearance as we build our space.",
    intro:
      "Infotech Ottawa is an IT consultancy focused on small and medium-sized businesses in the Ottawa area.",
    email: "caleb@infotechottawa.ca",
    inquiries: (mailto: JSXElement) => (
      <>For all business inquiries, please contact {mailto}.</>
    ),
  },
  services: {
    title: "Services - Infotech Ottawa",
    introHeading: "Services",
    intro1: "Infotech Ottawa offers a wide range of IT-related services.", // TODO: including...
    intro2:
      "While we are primarily focused on local businesses in Ottawa, we are happy to serve you wherever you are in the world.",
  },
};
