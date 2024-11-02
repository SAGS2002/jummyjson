import Detalle from "./Detalle"

const Cardprod = ({item}) => {
  return (
    <>
    <div className="col-md-4 col-lg-3 mb-4 mx-auto"  >
                <div className="card h-100" data-bs-theme="dark">
                <div className="card-header p-0">
                    <img src={item.thumbnail} alt={item.title}  className="img-fluid rounded-top" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between text-center">
                    <h3 className="lead text-sombra fw-bold">{item.title}</h3>
                    <p className="text-success text-sombra">{item.brand}</p>
                    <small className="text-sombra">{item.description.slice(0, 90)}...</small>
                    <h2 className="text-danger  mt-3 text-sombra">{item.price.toFixed(2).toLocaleString()}$</h2>
                </div>
                <div className="card-footer text-center d-grid">
                    <button className="btn btn-primary btn-sm " data-bs-toggle="modal" >Detalle</button>
                </div>
            </div>
        </div>
       <Detalle item={item} key={item.id} />
    </>
  )
}

export default Cardprod
