import styled from "styled-components";
import NextHead from "../src/components/nextHead";
import Perfil from "../src/components/perfil";

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
        </main>
    )
}