import NextHead from "../src/components/nextHead";
import Perfil from "../src/components/perfil";
import styled from "styled-components"
import Image from "next/image";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1rem;
  background-color: ${props => props.theme.colors.header};
  
  picture{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 40vw;
    h2{
    color: ${props => props.theme.colors.highlights};
    font-family: ${props => props.theme.font.title};
    font-size: 2rem;
    padding: 1rem;
  }
  .img{
    margin: auto;
  }
  }
  ul{
    list-style: none;
    width: 30vw;
    text-align: center;
}
  .button{
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    border: none;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.text};
    font-size: 1.5rem;
    background-color: ${props => props.theme.colors.background};

    }

`;

let tech = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'React Native', 'Python']

export default function HomePage() {
    return (
        <main>
            <NextHead text="My Site" />
            <Perfil
                style='homePage'
                src='/img/perfil/homePage.png'
                alt=""
                title="Hello"
                description="I'm"
                highlights="Dias"
            />
            <Section>
                <picture>
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
                <ul >
                    {tech.map((e) => (<li className="button">{e}</li>))}
                </ul>
            </Section>
        </main>
    )
}