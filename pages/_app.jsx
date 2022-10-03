/*styles globais */
import './styles.css'

import { Header } from "../src/patterns/header";
import Footer from "../src/patterns/footer";


export default function MyApp(props) {
    //adicionar um callback para trocar o tema sempre que for trocado no sistema.
    

    return (
        <>
            <Header />
            <props.Component {...props.pageProps} />
            <Footer />
        </>
    )
}