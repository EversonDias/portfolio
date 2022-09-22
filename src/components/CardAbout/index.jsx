import styled from "styled-components"

const Container = styled.article`
  background-color: ${props => props.theme.colors.header};
  color: ${props => props.theme.colors.text};
  width: 80vw;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 6px;
  p{
    text-indent: 1rem;
    margin-top: 1rem;
    line-height: 1.5rem;
  }
`

export default function CardAbout() {
  return (
    <Container>
      <h1>Olá, Seja bem-vindo.</h1>

      <p>Tenho 27 anos. Moro em São Paulo, Capital desde os meus 3 anos, sou mais um baiano paulista em meio de tantos.</p>

      <p>Sou Apaixonado por futebol sofro pelo São Paulo FC 🥲</p>

      <p>sou mais caseiro que tartaruga 🐢, vira e mexe jogo um FIFA 🎮 e quando fico com raiva, vou jogar o PES ( Efootbol ) para me lembrar quanto FIFA é melhor kkkk</p>

      <p>Trabalho desde os meus 15 anos e nunca me sentir realizado, desafiado. Sempre trabalhei com público, com venda ou atendimento.</p>

      <p>Em junho de 2022 descobrir a Trybe e percebi que meu sonho de criança poderia se torna realidade, o processo seletivo iria começar em 7 julho, tomei a decisão de vira programador. comecei a estudar por conta YOUTUBE, com proposito de me prepara para o prosseco da trybe. E continuo estudando, pois descobrir que a frase "Só sei que nada sei" <cite>Sócrates</cite> viraria um mantra para deixa minha mente sempre aberta a novos conhecimento e novas prensibilidades.</p>

    </Container>
  )
}