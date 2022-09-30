import Image from "next/image";
import styled from "styled-components";

const Container = styled.section`
text-align: center;
h1{
    font-size: 40px;
    margin: 20px;
    color: ${props => props.theme.colors.title};
}

section{
    display: flex;
    background: transparent;
    font-family: ${props => props.theme.font.title};
    align-items: center;
    padding-top: 2rem;

    
    h1{
        font-size: 7rem;
        color: ${props => props.theme.colors.background};
        text-shadow: 2px 2px 4px black;
    }
    h2{
        font-size: 4rem;
        color: ${props => props.theme.colors.background};
        text-shadow: 2px 2px 4px black;
    }
    .highlights{
        color: ${props =>props.theme.colors.highlights};
    }
}
.about{
    justify-content: space-around;
}
.homePage{
    justify-content: space-between;
    h1, h2{
        margin-left: 20rem;
    }
}

`

export default function Perfil({ title, description='', highlights='', alt, src, style}) {

    return (
        <Container>
            <section className={style}>
                <div>
                    <h1>{title}</h1>
                    <h2>{description} <span className='highlights'>{highlights}</span></h2>
                </div>
                <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={500}
                    quality={100}
                />
            </section>
        </Container>
    )
}