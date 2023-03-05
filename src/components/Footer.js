import { useState } from "react"
import styled from "styled-components"
import icone_erro from "../assets/icone_erro.png"
import party from "../assets/party.png"
import sad from "../assets/sad.png"

export default function Footer(props) {
    const {completed, sequencia, height} = props
    
    if(completed === 0){
        return (
            <DivFooter height={height}>
                <h2>{completed}/8 concluídos</h2>
            </DivFooter>
        )
    }
    if(completed < 8) {
        return (
            <DivFooter height={height}>
                <h2>{completed}/8 concluídos</h2>
                <div>
                    {sequencia.map( (icone, index) => <img key={index} src={icone} alt={'icone'} />    )}
                </div>
            </DivFooter>
        )
    }
    if(completed === 8 && !sequencia.includes(icone_erro)){
        
        return (
            <DivFooter height={height}>
                <div>
                    <img src={party} alt={'party'} />
                    <h1>Parabéns!</h1>
                </div>
                <h2>Você não esqueceu de nenhum flashcard!</h2>
                <h2>{completed}/8 concluídos</h2>
                <div>
                    {sequencia.map( (icone) => <img key={icone} src={icone} alt={'icone'} />    )}
                </div>
            </DivFooter>
        )
    }
    if(completed === 8 && sequencia.includes(icone_erro)) {
        
        return (
            <DivFooter height={height}>
                <div>
                    <img src={sad} alt={'sad'} />
                    <h1>Putz...</h1>
                </div>
                <h2>Ainda faltam alguns...
                    Mas não desanime!</h2>
                <h2>{completed}/8 concluídos</h2>
                <div>
                    {sequencia.map( (icone) => <img key={icone} src={icone} alt={'icone'} />    )}
                </div>
            </DivFooter>
        )
    }
    
}
const DivFooter = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    height: ${ (props) => props.height};
    bottom: 0;
    h2 {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
    div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        img{
            margin: 10px 3px;
        }
    }
`