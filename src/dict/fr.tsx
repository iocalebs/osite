import { JSXElement } from "solid-js";
import en from "./en";

export default {
  title: "Infothèque d'Ottawa",
  intro1:
    "Bienvenue ! Notre site web est en construction — merci de votre patience pendant que nous le mettons en place.",
  intro2:
    "L'infothèque d'Ottawa est une firme de services-conseils en TI au service des petites et moyennes entreprises de la région d'Ottawa-Gatineau.",
  intro3: (mailto: JSXElement) => (
    <>
      Pour toute demande liée à nos services, veuillez nous contacter à {mailto}
      .
    </>
  ),
  email: "caleb@infothequeottawa.ca",
} satisfies typeof en;
