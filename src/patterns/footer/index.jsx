import styled from 'styled-components';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import Logo from '../../components/logo';

const Container = styled.footer`
  background-color: ${props => props.theme.colors.header};

  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.title};
  
  #container{
    display: flex;
    justify-content: center;
  }
  p {
    font-family: ${props => props.theme.font.text};
    color: ${props => props.theme.colors.title};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  a {
    font-size: 1.2rem;
    padding: 0.2rem;
    color: ${props => props.theme.colors.title};
    &:hover{
        color: ${props => props.theme.colors.highlights} ;
    }
  }

`;

export default function Footer() {
  return (
    <Container>
      <Logo style='footer' />
      <p> &copy; 2022, Everson Dias Dev</p>
      <div id='container'>
        <a href="https://www.linkedin.com/in/eversondiasdev/" target="_black" ><FaLinkedin /></a>
        <a href="https://github.com/EversonDias" target="_black" ><FaGithubSquare /></a>
      </div>
    </Container>
  )
}