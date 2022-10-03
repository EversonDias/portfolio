import styles from './styles.module.css';
import Image from 'next/image';

let tech = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'React Native', 'Python']
export default function CardHome() {
  return (
    <section className={styles.section}>
      <picture className={styles.picture}>
        <h2 className={styles.h2}>Web Developer</h2>
        <div className={styles.img}>
          <Image
            src='/img/perfil/programador.svg'
            alt='pessoa atrás de um computador com funde de um history de commits do github'
            quality={100}
            width={250}
            height={200}
          />
        </div>
      </picture >
      <ul className={styles.ul} >
        {tech.map((e) => (<li className={styles.button}>{e}</li>))}
      </ul>
    </section>
  )
}