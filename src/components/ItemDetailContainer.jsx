import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Itemdetailun from "./Itemdetailun"
import arrayproductos from "./json/productos.json"


const ItemDetailcontainer= ()=>{
   
   const [item, setItem]= useState({})
   const {id} = useParams();
   
   
   
    useEffect(()=>{
        const promesa= new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(arrayproductos.find(prod => prod.index === parseInt(id)));
        },2000)

        });

        promesa.then((respuesta)=>{
            setItem(respuesta);
    })
    },  [id])
   
   
   
    return(

       <div>
        <Itemdetailun item={item}/>
       </div>

    )
};
export default ItemDetailcontainer;