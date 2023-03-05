import styled from "styled-components";
import Cards from "./Cards";
import Footer from "./Footer";
import Logo from "./Logo";
import seta_play from "../assets/seta_play.png"
import seta_virar from "../assets/seta_virar.png"
import questions from "./questions"
import { useState } from "react";
export default function Tela() {
    const [completed, setCompleted] = useState(0)
    const [sequencia, setSequencia] = useState([])
    const [height, setHeight] = useState('70px')
    return (
        <Background>
            <Logo />
            <Cards questions={questions}
                seta_play={seta_play}
                seta_virar={seta_virar}
                setCompleted={setCompleted}
                completed={completed}
                sequencia={sequencia}
                setSequencia={setSequencia}
                setHeight={setHeight}
                height={height} />
            <Footer completed={completed}
                sequencia={sequencia}
                height={height}
            />
        </Background>
    )
}
const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FB6B6B;
    @media(max-width: 600px) {
        width: 100vw;
        height: 100%;
    }
`