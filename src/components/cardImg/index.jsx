import Image from 'next/image'
import styles from './styles.module.css';

export default function CardImg({ src, title }) {
	return (
		<picture>
			<Image
				className={styles.img}
				src={src}
				alt={title}
				quality={100}
				width={250}
				height={200}
			/>
		</picture>
	)
}