/*import de modules react */
import { useContext } from "react"

/*import de modues styled-components */
import { ThemeContext } from "styled-components"

/*import do botão de traca de tema */
import Switch from 'react-switch'

import Link from "next/link"
import styled from "styled-components"

const Container = styled.nav`
    display: flex;
    align-items: center;
    a {
        margin-right: 1.2rem;
        text-decoration: none;
        color: ${props => props.theme.colors.title};
        &:hover{
            color: ${props => props.theme.colors.highlights};
            text-shadow: 2px 2px 4x white;
        }
    }
`;

export default function NavBar({ themeChange }) {
    const { colors, title } = useContext(ThemeContext)
    return (
        <Container>
            <Link href="/projects">Projects</Link>
            <Link href="/about">Abut</Link>
            <Link href="/about">Contact</Link>
            <Switch
                onChange={themeChange}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.highlights}
                onColor={colors.highlights}
            />
        </Container>

    )
}