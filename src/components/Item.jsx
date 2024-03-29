import { Link } from "react-router-dom";
const Item  =({item})=>{
   
    return(
        
        <div>
            <Link className="colores2" to={item.id}>
            <div className="card text-center width-card mb-4 colores2">
                <div className="width-card-interno">
                    <img src={item.imagen} className="card-img-top imagen" alt={item.nombre}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p>${item.precio}</p>
                        </div>    
                </div>
            </div>
            </Link>
        </div>
    )
};

export default Item;