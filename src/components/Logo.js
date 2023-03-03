import styled from "styled-components"
import logo from "../assets/logo.png"
export default function Logo() {
    return (
       <DivLogo>
            <img src={logo} alt={"logo"}/>
            <h1>ZapRecall</h1>
       </DivLogo>
    )
}
const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 50px;
    img {
        width: 52px;
        height: 60px;
    }
    h1 {
        font-size: 36px;
        color: #FFFFFF;
        font-weight: 400;
        font-family: 'Righteous';
        margin-left: 30px;
    }
`
