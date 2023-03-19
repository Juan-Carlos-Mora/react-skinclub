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
        <Route exact path={"/"} element={<Itemlistcontainer/>}/>
        <Route exact path={"/Categoria/:id"} element={<Itemlistcontainer/>}/>
        <Route exact path={"/:id"} element={<ItemDetailcontainer/>}/>
        <Route exact path={"/Categoria/Fusil/:id"} element={<ItemDetailcontainer/>}/>
        <Route exact path={"/Categoria/Sniper/:id"} element={<ItemDetailcontainer/>}/>
        <Route exact path={"/Categoria/Knife/:id"} element={<ItemDetailcontainer/>}/>
        <Route exact path={"*"} element={<Error404/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}
export default App;

