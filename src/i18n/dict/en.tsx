import { JSXElement } from "solid-js";

export default {
  root: {
    title: "Infotech Ottawa",
    email: "caleb@infotechottawa.ca",
    unexpectedError:
      "An unexpected error has occurred. The site administrator has been notified and will be looking into the problem shortly.",
    meanwhileContact: (mailto: JSXElement) => (
      <>In the meantime, please contact {mailto} for all business inquiries.</>
    ),
  },
  home: {
    welcomeUnderConstruction:
      "Welcome! Our website is currently under construction. Please forgive our appearance as we build our space.",
    intro:
      "Infotech Ottawa is an IT consultancy focused on small and medium-sized businesses in the Ottawa area.",
    email: "caleb@infotechottawa.ca",
    inquiries: (mailto: JSXElement) => (
      <>For all business inquiries, please contact Caleb at {mailto}.</>
    ),
  },
};
