import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
    a{
        text-decoration: none;
        font-size: 30px;
        color: ${props => props.theme.colors.text}
    }
`
export const NavHome = () => {
    return (
        <Container>
            <Link href="/home">Dias Dev</Link>
        </Container>

    )
}