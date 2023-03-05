import styled from "styled-components";
import logo from "../assets/logo.png"
export default function TelaInicial(props) {
    function iniciar() {
        props.setClicked(true)
    }
    return (
        <Fundo>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={iniciar}>Iniciar Recall</button>
        </Fundo>
    );
}
const Fundo = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;
    h1 {
        font-family: 'Righteous';
        font-size: 36px;
        font-weight: 400;
        color: #FFFFFF;
        font-style: normal;
        margin: 50px 0;
    }
    button {
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: #D70900;
    }
    @media(max-width: 600px) {
        width: 100vw;
        height: 100vh;
        button {
            width: 40%;
        }
    }
`;
