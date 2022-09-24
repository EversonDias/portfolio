import styled from "styled-components"
import Link from "next/link"

const Container = styled.span`
  font-size: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  font-family: ${props => props.theme.font.title};
  color: ${props => props.theme.colors.title};
  cursor: pointer;
  .size35{
    font-size: 30px;
    padding: 2px;
  } 
  .size30{
    font-size: 20px;
    padding: 2px;
  }
  .size25{
    font-size: 15px;
    padding: 2px;
  }
`
export default function Logo ({href}){
  return <Link href={href}>
    <Container>D <span className="size35">I</span> <span className="size30">A</span> <span className="size25">S</span> <span className="size30">D</span> <span className="size35">E</span> V</Container>
  </Link>
}