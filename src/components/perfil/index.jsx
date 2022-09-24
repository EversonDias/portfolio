import Image from "next/image";
import styled from "styled-components";
import Data from '../../../data/tecnologias'

const Container = styled.section`
text-align: center;
h1{
    font-size: 40px;
    margin: 20px;
    color: ${props => props.theme.colors.title};
}

section{
    display: flex;
    background-image: linear-gradient(to top, ${props => props.theme.gradient.primary}, ${props => props.theme.gradient.secondary});
    font-family: ${props => props.theme.font.title};
    align-items: center;
    justify-content: space-around;
    h1{
        font-size: 7rem;
        color: ${props => props.theme.colors.background};
        text-shadow: 2px 2px 4px black;
    }
    h2{
        font-size: 4rem;
        color: ${props => props.theme.colors.highlights};
        text-shadow: 2px 2px 4px black;
    }
}

`

export default function Perfil() {
    const tecnologias = Data

    return (
        <Container>
            <section>
                <div>
                    <h1>About</h1>
                    <h2>Everson Dias</h2>
                </div>
                <Image
                    src="/img/perfil/about.png"
                    alt="foto de perfil 3x4 do desenvolvedor do site Everson Dias em um escritório"
                    width={500}
                    height={500}
                />
            </section>
        </Container>
    )
}