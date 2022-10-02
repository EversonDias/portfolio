import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import Logo from '../../components/logo';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo style='footer' />
      <p className={styles.p}> &copy; 2022, Everson Dias Dev</p>
      <div id={styles.container}>
        <a className={styles.a} href="https://www.linkedin.com/in/eversondiasdev/" target="_black" ><FaLinkedin /></a>
        <a className={styles.a} href="https://github.com/EversonDias" target="_black" ><FaGithubSquare /></a>
      </div>
    </footer>
  )
}