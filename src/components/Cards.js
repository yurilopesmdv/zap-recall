import styled from "styled-components"
import Card from "./Card"
export default function Cards(props) {
    const {questions, seta_play, seta_virar, setCompleted} = props
    return (
        <Deck >
            {questions.map((object) => <Card key={object.title} object={object}
            seta_play={seta_play} seta_virar={seta_virar}/>)}
        </Deck>
    )
}
const Deck = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    div{
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
        img {
            width: 20px;
            height: 23px;
        }
    }
`