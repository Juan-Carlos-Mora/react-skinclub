import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./loanding";



const ItemDetailcontainer = () => {
   
   const [item, setItem]= useState({}); 
   const [loading, setLoading] = useState(true);
   const {id} = useParams();
   
   
   
    useEffect(() => {
        const db = getFirestore();
        const documentos = doc(db, "items", id);
        getDoc(documentos).then(element => {
            console.log(element);
            setItem({id:element.id,...element.data()});
            setLoading(false);

        });
        
    },  [id]);
   
   
   
    return(

       <div>
        {loading ? <Loading/> : <ItemDetail item={item}/>}
        
       </div>

    )
};
export default ItemDetailcontainer;