import Item from "./Item";
import ItemDetail from "./ItemDetail";


const Itemdetailun =({items})=> {
    return (
        <div className="row">
            {Items.map(Item => (
                <div className="col-md-3">
                    <ItemDetail item={Item} />
                </div>
            ))}
        </div>
    );
}

export default Itemdetailun;  