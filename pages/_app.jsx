/*styles globais */
import './styles.css'

import { Header } from "../src/patterns/header";
import Footer from "../src/patterns/footer";

export default function MyApp(props) {
    return (
        <>
            <Header/>
            <props.Component {...props.pageProps}/>
            <Footer />
        </>
    )
}