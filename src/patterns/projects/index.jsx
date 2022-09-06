import Data from '../../../data/db'
import CardProjects from '../../components/cardProjects'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    margin-top: 10px;
    text-align: center;
    a{
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-size: 0.7rem;
        h1{
            margin-bottom: 15px;
        }
    }
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
        margin-top: 0;
        a h1{
            margin-top: 10px;
            margin-bottom: 3px;
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
                    <CardProjects
                        src={e.img}
                        title={e.title}
                    />
                </a>
            )
            )}
        </Container>
    )
}