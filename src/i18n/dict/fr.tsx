import { JSXElement } from "solid-js";
import en from "./en";

export default {
  root: {
    title: "Infothèque d'Ottawa",
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
    welcomeUnderConstruction:
      "Bienvenue ! Notre site web est en construction — merci de votre patience pendant que nous le mettons en place.",
    intro:
      "L'infothèque d'Ottawa est une firme de services-conseils en TI axée sur les petites et moyennes entreprises de la région d'Ottawa-Gatineau.",
    inquiries: (mailto: JSXElement) => (
      <>
        Pour toute demande liée à nos services, veuillez nous contacter à{" "}
        {mailto}.
      </>
    ),
    email: "caleb@infothequeottawa.ca",
  },
  services: {
    title: "Services - Infothèque d'Ottawa",
    intro1:
      "L'infothèque d'Ottawa offre un éventail de services liés à l'informatique.",
    intro2:
      " Bien que nous soyons principalement axés sur les petites et moyennes entreprises dans la région d'Ottawa-Gatineau, nous sommes heureux de vous servir où que vous soyez.",
  },
} satisfies typeof en;
