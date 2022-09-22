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
.img{
    border-radius: 50%;
}
`

export default function Perfil() {
    const tecnologias = Data

    return (
        <Container>
            <h1>Everson Dias</h1>
            <Image
                className="img"
                layout="fixed"
                src="/img/perfil/perfil.jpeg"
                alt="foto de perfil 3x4 do desenvolvedor do site Everson Dias em um escritório"
                width={200}
                height={200}
            />
        </Container>
    )
}