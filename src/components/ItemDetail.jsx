import ItemCount from "./ItemCount"

const ItemDetail =({item})=>{
    return(
        <div>
            <div className="card text-center width-card mb-4">
                <div className="width-card-interno">
                    <img src={item.imagen} className="card-img-top imagen" alt={item.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p>{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                    </div>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;