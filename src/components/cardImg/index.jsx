import Image from 'next/image'
import styled from "styled-components"

const Container = styled.picture`
	.img{
		border-radius: 6px 0px 0px 6px;
		display: block;
		position: relative;
		margin: 0 30px;
		height: 125px;
		width: 200px;
  }
`
export default function CardImg({ src, title }) {
	return (
		<Container>
			<Image
				className='img'
				src={src}
				alt={title}
				quality={100}
				width={250}
				height={200}
			/>
		</Container>
	)
}