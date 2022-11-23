import styled from "styled-components";

const StyledMenu = styled.header`
    display: flex;
    flex-direction: row-reverse;
    height: 60px;
    width: 100%;
    top: 0px;
    right: 0px;
    align-items: center;
    padding: 16px;
    gap: 5px;
    position: fixed;
    z-index: 50;
    a {
        height: 55px;
        align-items: center;
        padding: 20px;
        text-decoration: none;
        color: rgb(236, 217, 255);
        font-size: 1.2em;
    }
`;

export default function Menu() {
    return (
        <StyledMenu>
                <nav>
                    <a href="#">Sobre Mim</a>
                    <a href="#">Habilidades</a>
                    <a href="#">Projéto</a>
                    <a href="#">Contato</a>
                </nav>
        </StyledMenu>
    )
}