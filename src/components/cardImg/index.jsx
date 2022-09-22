import Image from 'next/image'
import styled from "styled-components"

const Container = styled.picture`
    display: block;
    position: relative;
    margin: 0 30px;
    height: 125px;
    width: 200px;
    box-shadow: 5px 5px 10px #05050530;
    transition: 500ms;
    &:hover{
        transform: scale(1.1, 1.1);
    }
    #img{
        border-radius: 6px;

    }
`
export default function CardImg({ src, title }) {
    return (
        <Container>
                <Image 
                id='img'
                    layout='fill'
                    src={src}
                    alt={title}
                    width={200}
                    height={125}
                />
        </Container>
    )
}