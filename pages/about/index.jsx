import Perfil from "../../src/components/perfil";
import NextHead from "../../src/components/nextHead";
import CardAbout from "../../src/components/cardAbout";
import styled from "styled-components";

const Container = styled.main`
`

export default function About(){
  return(
      <Container>
        <NextHead text="Sobre" />
        <Perfil
        style='about'
        src='/img/perfil/about.png' 
        alt='foto de perfil 3x4 do desenvolvedor do site Everson Dias em um escritório'
        title='About'
        highlights="Everson Dias"
        />
          <CardAbout />
      </Container>
  )
}