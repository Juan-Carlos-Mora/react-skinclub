import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";

const Navegador =() =>{
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid colores me-2 ms-2"><Link className={"Logodescripcion"} to={"/"}><img className="me-3 ms-2" src="image/fondos/skinclub.png" alt="Skinclub2.0" width={150}/></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item me-3">
                      <NavLink className={"nav-link colores2"}  to={"/Categoria/Fusil"}>Fusil</NavLink></li>
                      <li className={"nav-item me-3"}>
                      <NavLink className="nav-link colores2"   to={"/Categoria/Sniper"}>Sniper</NavLink></li>
                      <li className={"nav-item me-3"}>
                      <NavLink className="nav-link colores2"  to={"/Categoria/Knife"}>Knife</NavLink></li>
                  </ul>
                  <CartWidget/>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
  
    )
};

export default Navegador;