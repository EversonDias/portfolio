
import NavBar from "../../components/navBar"
import styled from "styled-components"
import Logo from "../../components/logo"

/*style do container e toda aplicação dentro dele */
const Container = styled.header`
        background: ${props => props.theme.colors.header};
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
    `

export const Header = ({ themeChange }) => {


    return (
        <Container>
            <Logo href="/"/>
            <NavBar themeChange={themeChange} />
        </Container>
    )
}