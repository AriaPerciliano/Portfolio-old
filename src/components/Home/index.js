import styled from "styled-components"


const StyledHome = styled.section`
    display: flex;
    margin: auto;
    margin-top: 10vh;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    width: 85%;
    height: 90vh;
    padding: 100px 10px;
    h1 {
    font-size: 2em;
    text-align: left;
    }
    h2 {
    font-size: 2.5em;
    text-align: left;
    }
    h3 {
    font-size: 2.5em;
    text-align: left;
    }
`;

export default function Home() {
    return (
        <StyledHome>
            <h1>Ola! Meu nome é</h1>
            <h2>Aria Perciliano Lourenço.</h2>
            <h3>Desenvolvedora Front-End.</h3>
        </StyledHome>
    )
}