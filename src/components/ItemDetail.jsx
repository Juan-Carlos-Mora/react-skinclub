import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCount from "./ItemCount"

const ItemDetail =({item})=>{
    const {addItem}= useContext(CartContext);
const onAdd = (quantity) => {
    addItem(item, quantity);
}


    return(
        <div className="d-flex justify-content-center">
            <div className="row">
                <div className="width-card-detail">
                    <img src={item.imagen} className="imagendetail" alt={item.nombre}/>
                    <div className="text-center">
                        <h5 key={item.nombre}>{item.nombre}</h5>
                        <p key={item.description}>{item.description}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd}/>                    
                    </div>
                </div>  
            </div>
        </div>
         
        )
};

export default ItemDetail;