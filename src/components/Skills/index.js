import styled from "styled-components";

const StyledSkills = styled.section`
        color: rgb(236, 217, 255);
        background-color: #0a0612;
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 40px;
    section {
        width: 80%;
        display: flex;
        flex-direction: row;
        margin: auto;
    }
    p   {
        width: 90%;
        font-size: 1.3em;
        margin: 15px auto;
    }
    div {
        margin: 20px;
        width: 30%;
    }
    img {
        height: 100px;
        width: 100px;

    }
    button {
        background-color: blueviolet;
        color: rgb(236, 217, 255);
        height: 60px;
        padding: 20px;
        font-size: 1.3em;
        border-radius: 10px;
        border: none;
        cursor: pointer;
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
    h3 {
        margin: 10px;
        font-size: 1.5em;
    }
`;

export default function Skills() {
    return (
        <StyledSkills>
            <h2>Habilidades</h2>
            <section>
                <div>
                    <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-html-5-480.png" alt="HTML" />
                    <h3>HTML</h3>
                    <p><strong>HTML</strong> é uma <em>Linguagem de Marcação de Hipertexto</em> utilizada no desenvolvimento de paginas na web. HTML é basicamente o responsável pela estrutura dos conteúdos da página. Eu possuo cerca de 3 meses de experiência com HTML.</p>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-css3-480.png" alt="CSS" />
                    <h3>CSS</h3>
                    <p><strong>CSS</strong> é uma <em>Linguagem de Folhas de Estilos</em>utilizada para aplicar estilos nos elementos de um documento HTML. Eu possuo cerda de 3 meses de experiência com CSS.</p>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-javascript-480.png" alt="Javascript" />
                    <h3>Javascript</h3>
                    <p><strong>Javascript</strong> é uma <em>Linguagem de Programação</em> amplamente utilizada no desenvolvimento de paginas da web, principalmente para criar interatividade com os elementos. Eu possuo cerca de 2 meses de experiência com Javascript.</p>
                </div>
            </section>
            <section>
                <div>
                    <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-react-native-480.png" alt="React" />
                    <h3>ReactJS</h3>
                    <p><strong>ReactJS</strong> é uma <em>Biblioteca Javascript</em> criada pelo Facebook. Ela é utilizada para a criação de interfaces de usuário em páginas da web. Eu possuo cerca de [REDACTED] meses de experiência com React.</p>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-styled-components-480.png" alt="Styled-components" />
                    <h3>Styled-components</h3>
                    <p><strong>Styled-components</strong> é uma <em>Bibliotéca</em> usada para estilizar componentes de React. O Styled-components permite escrever CSS dentro do próprio Javascript.</p>
                </div>
                <div>
                    <img src="https://raw.githubusercontent.com/AriaPerciliano/Portfolio/main/public/icons8-next.js-480.png" alt="NextJS" />
                    <h3>NextJS</h3>
                    <p><strong>NextJS</strong> é um <em>Framework React</em> criado pela Vercel. O Next procura reunir varios tipos de funcionalidades como por exemplo: <em>Server Side Rendering</em>; <em>Static Site Generation</em> e ótimo suporte a bibliotecas <em>CSS in JS</em></p>
                </div>
            </section>
        </StyledSkills>
    )
}