/*styles globais */
import { Global } from "../src/styles/global"
/*import de componentes no.
obs: NextHead esta localizada as informações de meta do next/head  */

import { Header } from "../src/patterns/header";
import Footer from "../src/patterns/footer";

/*Importação de temas e para aplicação de tema */
import { ThemeProvider } from "styled-components";
import light from '../src/styles/themes/light';
import dark from "../src/styles/themes/dark";

/*modules react */
import { useState } from "react";

/*modules nookies responsável por salvar a definição de tema */
import { setCookie, parseCookies } from "nookies";

export default function MyApp(props) {

    /* essa função serve para salvar o tema na variável theme
    obs: quando a pagina e carregada ela faz a alteração de acordo com os cooks*/
    const [theme, setTheme] = useState(props.userTheme === 'dark'?(dark):(light))

    /*esta função serve para alterar os temas */
    const themeChange = () => {
        setTheme(theme.title === 'light' ? dark : light)
    } 

    /*salvando as configurações de temas no cooks */
   setCookie(null, "userTheme", theme.title, {
    maxAge: 86400 * 30,
    path: "/"
   })
    return (
        <ThemeProvider theme={theme}>
            <Global />
            <Header themeChange={themeChange} />
            <props.Component {...props.pageProps}/>
            <Footer />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context){
    const cookies = parseCookies(context)

    return{
        props: {
            userTheme: cookies.userTheme
        }
    }
}