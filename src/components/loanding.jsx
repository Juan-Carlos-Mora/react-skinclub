const Loading = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div class="d-flex justify-content-center">
                        <h1>Cargando....</h1>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loading;