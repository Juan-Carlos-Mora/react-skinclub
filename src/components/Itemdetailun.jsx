import ItemDetail from "./ItemDetail";


const Itemdetailun =({items})=> {
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-3">
                    <ItemDetail item={item} />
                </div>
            ))}
        </div>
    );
}

export default Itemdetailun;  