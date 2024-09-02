// Componente App, por padrão o componente raiz do projeto

import "./App.css";
import { Greeting } from "./components/Ex_Solved/Greeting";
import { Greeting2 } from "./components/Ex_Solved/Greeting2";
import { ListContainer } from "./components/Ex_Solved/Strings";
import { Countdown } from "./components/Ex_Solved/Countdown";
import { Random } from "./components/Ex_Solved/Random";
import { RandomList } from "./components/Ex_Solved/RandomList";
import { ToggleText } from "./components/Ex_Solved/ToggleText";
import { Wrapper } from "./components/Ex_Solved/Wrapper";
import { CheckText } from "./components/Ex_Solved/CheckText";

const list: string[] = ["ReuniEx", "PlantEx", "CapacitEx", "PÉx", "LibrEx"];

function App() {
  return (
    <div className="App">
      <Greeting name="ExMachiner B)" age="21"/>
      <Greeting2 name="ExMachiner B)" age="22"/>
      <ListContainer></ListContainer>
      <Wrapper>
        <Wrapper> <Countdown/> </Wrapper>
        <Wrapper> <Random/> </Wrapper>
        <Wrapper> <RandomList list={list}></RandomList> </Wrapper>
        <Wrapper> <ToggleText/> </Wrapper>
        <Wrapper> <CheckText/> </Wrapper>
      </Wrapper>
    </div>
  );
}

export default App;
