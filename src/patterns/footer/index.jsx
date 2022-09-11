import styled from 'styled-components';
import {FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.colors.header};
  height: 45px;
  width: 100%;
  text-align: center;
  
  #container{
    display: flex;
    justify-content: center;
  }
  p {
    color: ${props => props.theme.colors.text};
  }
  a {
    font-size: 20px;
    color: ${props => props.theme.colors.text};
    &:hover{
        font-size: 22px;
        color: ${props => props.theme.colors.highlights} ;
    }
  }

`;

export default function Footer(){
    return(
        <Container>
            <p>Desenvolvido por Everson Dias</p>
            <div id='container'>
                <div>
                    <a href="https://www.linkedin.com/in/eversondiasdev/" target="_black" ><FaLinkedin/></a>
                    </div>
                <div>
                    <a href="https://github.com/EversonDias" target="_black" ><FaGithubSquare/></a>
                    </div>
                </div>
        </Container>
    )
}