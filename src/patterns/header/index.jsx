import Logo from "../../components/logo"
import NavBar from "../../components/navBar"
import styles from './styles.module.css'

export const Header = () => {

    return (
        <header className={styles.header}>
            <Logo href="/"/>
            <NavBar />
        </header>
    )
}