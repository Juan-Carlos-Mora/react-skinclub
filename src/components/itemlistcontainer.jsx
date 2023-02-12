const Itemlistcontainer = ({greeting})=>{
return(


<div className="container">
    <div className="row">
        <div className="col text-center">
            <div className="alert alert-danger" role="alert">
                <h1>{greeting}</h1>
            </div>
        </div>
    </div>
</div>


)


}

export default Itemlistcontainer;