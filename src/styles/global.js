/* estou importando um modulo que criar um styles global */
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
/* import de fintes css */
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bentham&family=Koulen&display=swap');

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
html, body, main{
    min-height: 87vh;
}
`;