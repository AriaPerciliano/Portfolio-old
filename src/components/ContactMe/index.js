import styled from "styled-components";

const StyledContact = styled.footer`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    section {

    }
    p {
        padding: 10px;
        font-size: 1.3em;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    img {
        height: 80px;
        width: 80px;
        margin: 10px;
    }
    h2 {
        display: flex;
        width: 80%;
        padding: 20px 10px 10px;
        margin: auto;
        justify-content: left;
        background-color: #0a0612;
        border-bottom: 3px solid rebeccapurple;
    }
    button {
        background-color: blueviolet;
        height: 60px;
        padding: 20px;
        font-size: 1.3em;
        color: rgb(236, 217, 255);
        cursor: pointer;
        border-radius: 10px;
        border: none;
    }
`;

export default function Contact() {
    return(
        <StyledContact>
        <h2>Onde me encontrar?</h2>
        <section>
            <p>Você pode me encontrar aqui!</p>
                <div>
                    <a href=""><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-github-480.png" alt="Github" /></a>
                    <a href=""><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-html-5-480.png" alt="Linkedin" /></a>
                    <a href=""><img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-git-480.png" alt="Gmail" /></a>
                </div>
        </section>
        </StyledContact>
    )
}