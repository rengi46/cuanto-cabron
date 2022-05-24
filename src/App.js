import { Meme } from "./components/card";
import { CreaMeme } from "./components/fCreaMeme";
import { ListaMemes } from "./components/listaMemes";
import Modal from "./components/modal";
import { NavBar } from "./components/navBar";

function App() {
  return (
    <div className="">
      <NavBar/>
      <ListaMemes/>
    </div>
  );
}

export default App;
