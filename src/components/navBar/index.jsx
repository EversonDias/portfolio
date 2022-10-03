import Link from "next/link"
import styles from './styles.module.css';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'

export default function NavBar() {
    let theme;
    const handleTheme = () => {
        if (theme) {
            theme = false
            document.body.setAttribute('class', 'dark')
        } else {
            theme = true
            document.body.setAttribute('class', 'light')
        }
    }    

    return (
        <nav className={styles.nav}>
            <Link href="/projects"><a className={styles.a}>Projects</a></Link>
            <Link href="/about"><a className={styles.a}>About</a></Link>

            {/* <Link href="/about">Contact</Link> */}
            <MdDarkMode className={styles.icon} onClick={handleTheme} />
        </nav>

    )
}
