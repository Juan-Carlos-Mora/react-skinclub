
import Openbox from "./components/openbox";
import Navegador from "./components/Navbar";




function App() {
  return (
    <div className="container-fluid">
      <div className="col-12">
        <Navegador />
        <div>
          <Openbox />
        </div>
      </div>
    </div>
  );
}
export default App;
