import Link from "next/link"
import './styles.module.css';
import styles from './styles.module.css';

export default function Logo({ href = '#', style = 'default' }) {
  return <Link href={href}>
    <span>
      <span className={styles[style]}>D <span className={styles.size35}>I</span> <span className={styles.size30}>A</span> <span className={styles.size25}>S</span> <span className={styles.size30}>D</span> <span className={styles.size35}>E</span> V</span>
    </span>
  </Link>
}