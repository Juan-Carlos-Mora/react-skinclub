import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegador from "./components/Navbar";
import Itemlistcontainer from "./components/itemlistcontainer";
import Error404 from "./components/Error404";
import ItemDetailcontainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/Context/CartContext";
import Cart from "./components/Context/Cart";



function App() {
  return (
    <CartContextProvider>
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
              <Route exact path={"/Cart"} element={<Cart/>}/>
              <Route exact path={"*"} element={<Error404/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;

