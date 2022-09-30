import Data from '../../../data/projects'
import styled from 'styled-components'
import CardImg from '../../components/cardImg';

const Container = styled.section`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 5rem;
    a{
        margin-top: 1rem;
        font-family: ${props =>props.theme.font.title};
        color: ${props => props.theme.colors.highlights};
        text-decoration: none;
        font-size: 1.5rem;
        h1{
            margin-bottom: 1rem;
        }
        div{
            display: flex;
            overflow: hidden;
            margin:auto;
            height: 200px;
            background-color: ${props =>props.theme.colors.header};
            border-radius: 10px;
            box-shadow: 2px 2px 4px black;
            transition: 500ms;
            &:hover{
                transform: scale(1.05, 1.05);
            }
            p{
                font-family: ${props =>props.theme.font.text};
                color: ${props =>props.theme.colors.text};
                font-size: 1.5rem;
                width: 60%;
                padding: 1.5rem;
                margin-left: 4rem;
            }
        }
    }
`;


export default function Projects() {
    const DataBase = Data

    return (
        <Container>
            {DataBase.map((e) => (
                <a href={e.link} target='_black'>
                    <h1>{e.title}</h1>
                    <div>
                        <CardImg
                            src={e.img}
                            title={e.title}
                        />
                        <p>
                            {e.about}
                        </p>
                    </div>
                </a>
            )
            )}
        </Container>
    )
}