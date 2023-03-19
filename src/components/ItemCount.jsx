import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount =({stock})=>{
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock]= useState(stock);
    const [ itemAdded, setItemAdded]= useState(false);

   
    const incrementarStock=()=>{
        if (items < itemStock)
        {setItems(items + 1);
        }

    }
    const decrecerStock=()=>{
        if(items > 1){setItems(items - 1);
        }
    }
    
    const onAdd =() =>{
        if(itemStock >= items){
            setItemStock(itemStock-items);
            setItems(1);
            console.log("Agregaste: "+items+" al carrito");
            setItemAdded(true);

             
        }
    }
    useEffect(() => {
        setItemStock(stock);
    }, [stock])

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
                {itemAdded ? <Link to={"/cart"} className="btn Botonagregar">Terminar Mi Compra</Link>:  <button className="btn Botonagregar" onClick={onAdd}>Agregar al Carrito</button>}
               
            </div>
        </div>
    </div>
    
    )
};

export default ItemCount; 