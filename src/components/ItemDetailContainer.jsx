import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayproductos from "./json/productos.json"


const ItemDetailcontainer= ()=>{
   
   const [item, setItem]= useState({})
   const {id} = useParams();
   
   
   
    useEffect(()=>{
        const promesa= new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(arrayproductos.find(prod => prod.nombre === id));
        },1000)

        });

        promesa.then((respuesta)=>{
            setItem(respuesta);
    })
    },  [id])
   
   
   
    return(

       <div>
        <ItemDetail item={item}/>
       </div>

    )
};
export default ItemDetailcontainer;