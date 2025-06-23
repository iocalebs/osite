import { JSXElement } from "solid-js";
import en from "./en";

export default {
  root: {
    title: "Infothèque d'Ottawa",
    description:
      "L'infothèque d'Ottawa est une firme de services-conseils en informatique axée sur les petites et moyennes entreprises de la région d'Ottawa-Gatineau.",
    email: "caleb@infothequeottawa.ca",
    unexpectedError:
      "Une erreur inattendue s'est produite. L'administrateur du site a été informé. Nous nous engageons à résoudre le problème aussitôt que possible.",
    meanwhileContact: (mailto: JSXElement) => (
      <>
        En attendant, veuillez contacter {mailto} pour toute demande liée à nos
        services.
      </>
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
    welcome: "Bonjour !",
    serviceGreeting: " Comment pouvons-nous vous aider aujourd'hui ?",
    optionBizdev: "Gestion de logiciels d'entreprise",
    optionWebdev: "Refonte d'un site web",
    optionOther: "Autre",
    happyBizdev:
      "Il nous ferait plaisir de vous aider avec vos logiciels d'entreprise. Nous pouvons également vous aider à en choisir un nouveau si vous en avez besoin.",
    happyWebdev:
      "Il nous ferait plaisir de vous aider à créer ou refaire votre site web d'entreprise. Nous pouvons également vous aider à faire des petites mises à jour lorsque vous en avez besoin.",
    otherQuestions:
      "Pour toute question liée à l'informatique, sentez vous à l'aise de nous contacter directement:",
    forMoreInfo:
      "Pour en connaître davantage, veuillez nous contacter directement:",
    emailBizdev: "bizdev@infothequeottawa.ca",
    emailWebdev: "webdev@infothequeottawa.ca",
    emailInquiries: "info@infothequeottawa.ca",
    phoneDomestic: "(613) 777-5650",
    phoneE164: "+16137775650",
  },
  services: {
    title: "Services - Infothèque d'Ottawa",
    introHeading: "Services",
    intro1:
      "L'infothèque d'Ottawa offre un éventail de services liés à l'informatique.", // TODO: tel que...
    intro2:
      " Bien que nous soyons principalement axés sur les petites et moyennes entreprises dans la région d'Ottawa-Gatineau, nous sommes heureux de vous servir où que vous soyez.",
  },
} satisfies typeof en;
