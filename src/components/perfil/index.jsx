import styled from "styled-components";
import Data from '../../../data/tecnologias'

const Container = styled.section`
text-align: center;
display: flex;
flex-direction: column;
h1{
    font-size: 40px;
    margin: 20px;
    color: ${props => props.theme.colors.title};
}
#perfil{
    border-radius: 50%;
    border: solid 4px ${props => props.theme.colors.highlights};
    width: 300px;
    margin: auto;
}
picture{
    margin: 50px auto;
    background: ${props => props.theme.colors.header};
    width: 700px;
    border-radius: 6px;

    h2{
        color: ${props => props.theme.colors.title};;
        margin-top: 20px;
    }
    img{
        margin: 10px 5px 20px 5px;
        width: 50px;
    }
}

`

export default function Perfil() {
const tecnologias = Data

    return (
        <Container>
            <h1>Everson Dias</h1>
            <img id="perfil" src="https://avatars.githubusercontent.com/u/108692716?v=4" alt="foto de perfil everson dias" />

            <picture>
                <h2>Tecnologias</h2>
                {tecnologias.map((e)=> (
                    <img src={e.url} alt={e.name}/>
                ))}
            </picture>

        </Container>
    )
}