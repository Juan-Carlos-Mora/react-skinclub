
import Openbox from "./components/openbox";
import Navegador from "./components/Navbar";
import Itemlistcontainer from "./components/itemlistcontainer";




function App() {
  return (
    <div className="container-fluid">
      <div className="col-12">
        <Navegador />
        <div>
          <Itemlistcontainer greeting={"Bienvenidos"}/>
          <Openbox />
        </div>
      </div>
    </div>
  );
}
export default App;
