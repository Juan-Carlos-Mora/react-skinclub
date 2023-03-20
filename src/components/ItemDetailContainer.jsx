import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const ItemDetailcontainer = () => {
   
   const [item, setItem]= useState({}); 
   const {id} = useParams();
   
   
   
    useEffect(() => {
        const db = getFirestore();
        const documentos = doc(db, "items", id);
        getDoc(documentos).then(element => {
            console.log(element);
            setItem({id:element.id,...element.data()});
        });
        
    },  [id]);
   
   
   
    return(

       <div>
        <ItemDetail item={item}/>
       </div>

    )
};
export default ItemDetailcontainer;