
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegador from "./components/Navbar";
import Itemlistcontainer from "./components/itemlistcontainer";
import Error404 from "./components/Error404";
import ItemDetailcontainer from "./components/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
    <div>
      <Navegador />
      <Routes>
        <Route exact path={""} element={<Itemlistcontainer/>}/>
        <Route exact path={"/categoria/:id"} element={<Itemlistcontainer/>}/>
        <Route exact path={"/item/:id"} element={<ItemDetailcontainer/>}/>
        <Route exact path={"*"} element={<Error404/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}
export default App;

