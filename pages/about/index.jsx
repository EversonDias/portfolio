import Perfil from "../../src/components/perfil";
import NextHead from "../../src/components/nextHead";
import CardAbout from "../../src/components/CardAbout";

export default function About(){
  return(
      <main>
        <NextHead text="Sobre" />
        <Perfil />
        <CardAbout />
      </main>
  )
}