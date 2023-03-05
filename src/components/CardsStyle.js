import styled from "styled-components"
const PerguntaEscondida = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Recursive';
    color: #333333;
    margin-bottom: 20px;
    h1{
        color: ${(props) => props.color};
        text-decoration: ${(props) => props.textDecoration};
    }
    img {
        width: 20px;
        height: 23px;
    }
`
export {PerguntaEscondida}
const PerguntaMostrada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 300px;
    background-color: #ffffd5;
    height: 131px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-weight: 700;
    font-family: 'Recursive';
    color: ${(props) => props.color};
    margin-bottom: 20px;
    img {
        width: 20px;
        height: 23px;
    }
`
export {PerguntaMostrada}
const DivPergunta = styled.div`
    width:100%
`
export {DivPergunta}
const DivReposta = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export {DivReposta}
const ButtonRed = styled.button`
    background: #FF3030;
    border-radius: 5px;
    width: 85.17px;
    height: 37.17px;
    border: none;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Recursive';
    margin-right: 10px;
`
export {ButtonRed}
const ButtonYellow = styled.button`
    background: #FF922E;
    border-radius: 5px;
    width: 85.17px;
    height: 37.17px;
    border: none;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Recursive';
    margin-right: 10px;
`
export {ButtonYellow}
const ButtonGreen = styled.button`
    background: #2FBE34;
    border-radius: 5px;
    width: 85.17px;
    height: 37.17px;
    border: none;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Recursive';
`
export {ButtonGreen}
