import { useState } from "react";
import Tela from "./components/Tela";
import TelaInicial from "./components/TelaInicial";
const telas = [TelaInicial, Tela]

function App() {
  const [clicked, setClicked] = useState(false)
  if(clicked) {
    return (
      <Tela />
    )
  }
  return (
    <TelaInicial setClicked={setClicked}/>
  )
  
}

export default App;
