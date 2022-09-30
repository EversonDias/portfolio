import Image from "next/image";
import styled from "styled-components"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1rem;
  background-color: ${props => props.theme.colors.header};
  h2{
    color: ${props => props.theme.colors.highlights};
    font-family: ${props => props.theme.font.title};
    font-size: 2rem;
    padding: 1rem;
  }
  .container{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .divider{
    width: 40vw;
  }
  .img{
    margin: auto;
  }
  .button{
    width: 100%;
    height: 2.5rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    border: none;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.text};
    background-color: ${props => props.theme.colors.background};
    font-size: 1.5rem;
  }
`;

export function CardHome({ tech }) {
  return (
    <Container>
      <picture className="divider container">
        <h2>Web Developer</h2>
        <div className='img'>
          <Image
            src='/img/perfil/programador.svg'
            alt='pessoa atrás de um computador com funde de um history de commits do github'
            quality={100}
            width={250}
            height={200}
          />
        </div>
      </picture >

      <div>
        {tech.map((e) => (<button className="button" >{e}</button>))}
      </div>
    </Container>
  )
}