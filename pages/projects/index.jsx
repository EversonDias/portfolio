import NextHead from "../../src/components/nextHead";
import Projects from "../../src/patterns/projects";

export default function Home() {
    return (
        <> 
        <NextHead text="Home"/>
            <main>
                <Projects />
            </main> 
        </>
    )
}

