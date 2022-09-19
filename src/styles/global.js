/* estou importando um modulo que criar um styles global */
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/*
para passar as cores já pre-definidas dos temas utilizo uma expressão js para passar as props 
*/
body {
    background: ${props => props.theme.colors.background};
}
main{
    min-height: 88vh;
}
`;