import styled from "styled-components"
import Card from "./Card"
export default function Cards(props) {
    const {questions, seta_play, seta_virar, setCompleted, completed, setSequencia, sequencia, setHeight, height} = props
    return (
        <Deck height={height}>
            {questions.map((object) => <Card key={object.title} object={object}
            seta_play={seta_play} seta_virar={seta_virar} setCompleted={setCompleted} 
            completed={completed} setSequencia={setSequencia} sequencia={sequencia}
            setHeight={setHeight}/>)}
        </Deck>
    )
}
const Deck = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${ (props) => props.height};
    div{
       
    }
`