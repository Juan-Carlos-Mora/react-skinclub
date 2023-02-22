import { useState } from "react";

const ItemCount =({stock})=>{
    const [ items, setItems] = useState(1);
    const [itemStock, setItemStock]= useState(stock)
    
    const incrementarStock=()=>{
        if (items< itemStock){setItems(items + 1);}

    };
    const decrecerStock=()=>{
        if(items> 1){setItems(items - 1);}
    };
    
    const onAdd =() =>{
        if(itemStock>= items){
            setItemStock(itemStock-items);
            setItems(1);
            console.log("Agregaste: "+items+" al carrito")
             
        }
    };
    
    return(


    <div>
        <div className="container">
            <div className="row">
                <div className="col my-2">
                    <div class="btn-group">
                        <button  class="btn Botonagregar" onClick={decrecerStock}>-</button>
                        <button  class="btn Botonagregar">{items}</button>
                        <button  class="btn Botonagregar" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col my-2">
                <button className="btn Botonagregar" onClick={onAdd}> Agregar al Carrito</button>
            </div>
        </div>
    </div>
    
    )
};

export default ItemCount; 