/*import de modules react */
import { useContext } from "react"

/*import de modues styled-components */
import styled from "styled-components"
import { ThemeContext } from "styled-components"

/*import do botão de traca de tema */
import Switch from 'react-switch'

/*style do container e toda aplicação dentro dele */
const Container = styled.header`
        background: ${props => props.theme.colors.header};
        height: 60px;
        color: ${props => props.theme.colors.title};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
    `

export const Header = ({ themeChange }) => {
    const { colors, title} = useContext(ThemeContext)
    
    return (
        <Container>
            <h1>My Portfolio</h1>
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