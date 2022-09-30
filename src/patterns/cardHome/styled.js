import styled from "styled-components";

export const Container = styled.section`
display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1rem;
  background-color: ${props => props.theme.colors.header};
  
  .picture{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 40vw;
    
    
  }
  .h2{
    color: ${props => props.theme.colors.highlights};
    font-family: ${props => props.theme.font.title};
    font-size: 2rem;
    padding: 1rem;
  }
  .img{
    margin: auto;
  }
  .button{
    width: 100%;
    height: 2.5rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    border: none;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.text};
    background-color: ${props => props.theme.colors.background};
    font-size: 1.5rem;
  }
`