import CartWidget from "./CartWidget";


const Navegador =() =>{
    return(
<div className="container-fluid">
<div className="row">
  <div className="">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid colores me-2 ms-2"><img className="me-3 ms-2" src="image/fondos/skinclub.png" alt="Skinclub2.0" width={150}/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"/></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item me-3"><a className="nav-link text-reset" href="/locales">Mejoras</a></li>
            <li className="nav-item me-3"><a className="nav-link text-reset" href="/locales">Misiones</a></li>
            <li className="nav-item me-3"><a className="nav-link text-reset" href="/locales">Batallas</a></li>
            <li className="nav-item me-3"><a className="nav-link text-reset" href="/locales">Cajas Gratis</a></li>
        </ul>
      </div>
      <div>
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