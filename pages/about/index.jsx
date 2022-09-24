import Perfil from "../../src/components/perfil";
import NextHead from "../../src/components/nextHead";
import CardAbout from "../../src/components/CardAbout";
import styled from "styled-components";

const Container = styled.main`
  div{
    
  }
`

export default function About(){
  return(
      <Container>
        <NextHead text="Sobre" />
        <Perfil />
        <div>
          <CardAbout />
        </div>
      </Container>
  )
}