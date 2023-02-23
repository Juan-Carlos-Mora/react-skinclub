import ItemDetail from "./ItemDetail";


const Itemdetailun =({items})=> {
    return (
        <div className="d-flex justify-content-center">
            {items.map(item => (
                <div className="col">
                    <ItemDetail item={item} />
                </div>
            ))}
        </div>
    );
}

export default Itemdetailun;  