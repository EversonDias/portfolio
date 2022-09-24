import styled from "styled-components"
import Link from "next/link"

const Container = styled.span` 
.default{
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
}
.footer{
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  font-family: ${props => props.theme.font.title};
  color: ${props => props.theme.colors.title};
  .size35{
    font-size: 15px;
    padding: 2px;
  } 
  .size30{
    font-size: 10px;
    padding: 2px;
  }
  .size25{
    font-size: 7px;
    padding: 2px;
  }
}
`
export default function Logo({ href = '#', style = 'default' }) {
  return <Link href={href}>
    <Container>
      <span className={style}>D <span className="size35">I</span> <span className="size30">A</span> <span className="size25">S</span> <span className="size30">D</span> <span className="size35">E</span> V</span>
    </Container>
  </Link>
}