import { Link } from "react-router-dom";



const Item  =({item})=>{
   
    return(
        
        <div>
            <div className="card text-center width-card mb-4">
                <div className="width-card-interno">
                    <Link className="colores2" to={item.index}>
                        <img src={item.imagen} className="card-img-top imagen" alt={item.nombre}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p>${item.precio}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Item;