import { useState } from "react"
import styled from "styled-components"
import icone_erro from "../assets/icone_erro.png"
import icone_quase from "../assets/icone_quase.png"
import icone_certo from "../assets/icone_certo.png"
import { PerguntaEscondida, PerguntaMostrada, DivPergunta, DivReposta, ButtonGreen, ButtonRed, ButtonYellow } from "./CardsStyle"

export default function Card(props) {
    const { object, seta_play, seta_virar, setCompleted, completed, setSequencia, sequencia, setHeight } = props
    const [cardState, setCardState] = useState(0)
    const [color, setColor] = useState('#333333')
    const [textDecoration, setTextDecoration] = useState('none')
    const [iconePergunta, setIconePergunta] = useState(<img data-test="play-btn"  onClick={mostrarPergunta} src={seta_play} alt={"seta_play"} />)

    function mostrarPergunta() {
        setCardState(1)
    }
    function mostrarResposta() {
        setCardState(2)
    }
    function errado() {
        const completo = completed + 1
        setCardState(0)
        setColor('#FF3030')
        setTextDecoration('line-through')
        setIconePergunta(<img data-test="no-icon" src={icone_erro} alt={'icone_erro'} />)
        setCompleted(completed + 1)
        setSequencia([...sequencia, icone_erro])
        if(completo === 4){
            setHeight('171px')
        }
    }
    function quase() {
        const completo = completed + 1
        setCardState(0)
        setColor('#FF922E')
        setTextDecoration('line-through')
        setIconePergunta(<img data-test="partial-icon" src={icone_quase} alt={'icone_quase'} />)
        setCompleted(completed + 1)
        setSequencia([...sequencia, icone_quase])
        if(completo === 4){
            setHeight('171px')
        }
    }
    function certo() {
        const completo = completed + 1
        setCardState(0)
        setColor('#2FBE34')
        setTextDecoration('line-through')
        setIconePergunta(<img data-test="zap-icon" src={icone_certo} alt={'icone_certo'} />)
        setCompleted(completed + 1)
        setSequencia([...sequencia, icone_certo])
        if(completo === 8){
            setHeight('171px')
        }
    }
    if (cardState === 0) {
        return (
            <PerguntaEscondida data-test="flashcard" color={color} textDecoration={textDecoration}>
                <h1 data-test="flashcard-text">{object.title}</h1>
                {iconePergunta}
            </PerguntaEscondida>
        )
    }
    if (cardState === 1) {
        return (
            <PerguntaMostrada data-test="flashcard">
                <DivPergunta>
                    <h1 data-test="flashcard-text">{object.question}</h1>
                </DivPergunta>
                <DivReposta>
                    <img data-test="turn-btn" onClick={mostrarResposta} src={seta_virar} alt={"seta_virar"} />
                </DivReposta>
            </PerguntaMostrada>
        )
    }
    if(cardState === 2) {
        return (
            <PerguntaMostrada data-test="flashcard">
                <DivPergunta>
                    <h1 data-test="flashcard-text">{object.answer}</h1>
                </DivPergunta>
                <DivReposta>
                    <ButtonRed data-test="no-btn" onClick={errado}>Não Lembrei</ButtonRed>
                    <ButtonYellow data-test="partial-btn" onClick={quase}>Quase não lembrei</ButtonYellow>
                    <ButtonGreen data-test="zap-btn" onClick={certo}>Zap!</ButtonGreen>
                </DivReposta>
            </PerguntaMostrada>
        )
    }
}
