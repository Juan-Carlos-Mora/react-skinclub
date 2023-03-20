import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./Itemlist";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const Itemlistcontainer = ()=>{
    const [items, setItems]= useState([]);
    const {id}=useParams();
       
       
    useEffect (()=> {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ?  query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs (filter).then(elements =>{
            setItems(elements.docs.map(element => ({id: element.id, ...element.data()})));    
        });
        
    }, [id]);    


    return(

        <div className="container my-5">
            <ItemList items={items}/>
        </div>

)


};

export default Itemlistcontainer;