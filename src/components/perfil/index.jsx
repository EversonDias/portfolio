import Image from "next/image";
import styles from './styles.module.css';

export default function Perfil({ title, description='', highlights='', alt, src, style}) {

    return (
        <section className={styles.container}>
            <section className={styles[style]}>
                <div>
                    <h1 className={styles.h1}>{title}</h1>
                    <h2 className={styles.h2}>{description} <span className={styles.highlights}>{highlights}</span></h2>
                </div>
                <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={500}
                    quality={100}
                />
            </section>
        </section>
    )
}