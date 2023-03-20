import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount =({stock, onAdd})=>{
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
    
    const addToCart =() =>{
        if(itemStock >= items){
            setItemStock(itemStock-items);
            setItems(1);
            console.log("Agregaste: "+items+" al carrito");
            setItemAdded(true);
            onAdd(items);
            

             
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
                    <div className="btn-group">
                        <button  className="btn Botonagregar" onClick={decrecerStock}>-</button>
                        <button  className="btn Botonagregar">{items}</button>
                        <button  className="btn Botonagregar" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col my-2">
                {itemAdded ? <Link to={"/cart"} className={"btn Botonagregar"}>Terminar Mi Compra</Link>:  <button className="btn Botonagregar" onClick={addToCart}>Agregar al Carrito</button>}
               
            </div>
        </div>
    </div>
    
    )
};

export default ItemCount; 