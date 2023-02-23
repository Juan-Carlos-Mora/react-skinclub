import ItemCount from "./ItemCount"

const ItemDetail =({item})=>{
    return(
        <div className="d-flex justify-content-center">
            <div className="">
                <div class="width-card-detail">
                    <img src={item.imagen} class="imagendetail" alt={item.nombre}/>
                    <div class="text-center">
                        <h5 class="">{item.nombre}</h5>
                        <p class="">{item.description}</p>
                        <ItemCount stock={item.stock}/>                    
                    </div>
                </div>  
            </div>
        </div>
         
        )
};

export default ItemDetail;