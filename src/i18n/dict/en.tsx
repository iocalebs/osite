import { JSXElement } from "solid-js";

export default {
  title: "Infotech Ottawa",
  intro1:
    "Welcome! Our website is currently under construction. Please forgive our appearance as we build our space.",
  intro2:
    "Infotech Ottawa is an IT consultancy focused on small and medium-sized businesses in the Ottawa area.",
  intro3: (mailto: JSXElement) => (
    <>For all business inquiries, please contact us at {mailto}.</>
  ),
  email: "caleb@infotechottawa.ca",
};
