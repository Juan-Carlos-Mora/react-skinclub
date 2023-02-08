
import Openbox from "./openbox";
import Navegador from "./Navbar";
import './index.css';



const App = () => {
  return(
<div className="container-fluid" >
    <div className="col-12">
        <Navegador/> 
        <div>
        <Openbox/>
        </div>
    </div>
  </div>
  )
};
export default App;
