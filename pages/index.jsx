import NextHead from "../src/components/nextHead";
import Perfil from "../src/components/perfil";
import { CardHome } from "../src/patterns/cardHome";

export default function HomePage() {
    return (
        <main>
            <NextHead text="My Site" />
            <Perfil
                style='homePage'
                src='/img/perfil/homePage.png'
                alt=""
                title="Hello"
                description="I'm"
                highlights="Dias"
            />
            <CardHome tech={['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'React Native', 'Python']}/>
        </main>
    )
}