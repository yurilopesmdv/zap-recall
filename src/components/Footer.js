import styled from "styled-components"

export default function Footer(props) {
    return (
        <DivFooter>
            <h2>{props.completed}/4 concluídos</h2>
        </DivFooter>
    )
}
const DivFooter = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    height: 70px;
    bottom: 0;
    h2 {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`