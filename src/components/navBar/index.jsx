/*import de modules react */
import { useContext } from "react"

/*import de modues styled-components */
import { ThemeContext } from "styled-components"

/*import do botão de traca de tema */
import Link from "next/link"
import styles from './styles.module.css';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link href="/projects"><a className={styles.a}>Projects</a></Link>
            <Link href="/about"><a className={styles.a}>About</a></Link>

            {/* <Link href="/about">Contact</Link> */}
        </nav>

    )
}