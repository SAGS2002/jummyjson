const Detalle = ({item}) => {
    return (
      <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
          <div className="modal-dialog modal-xl">
              <div className="modal-content">
              <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bold text-sombra text-uppercase" id="exampleModalLabel">Detalle del Producto</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                  
              <div className="row py-2">
                  <div className="col-md-5">
                      <img src={item.thumbnail} className="card-img-top rounded border" alt="..." loading="lazy" />
  
                  </div>
                  <div className="col-md-7 fw-bold text-sombra text-uppercase">
                      <h3>{item.category}</h3>
                      {item.brand && <h3>Marca: <span className="fw-bold">{item.brand}</span></h3>}
                      <h4>Stock: <span className="badge bg-info">{item.stock}</span></h4>
                      <h4>Garantia: <span className="fw-bold">{item.warrantyInformation}</span></h4>
                      <h4>SKU: <span className="fw-bold">{item.sku}</span></h4>
                      <ul>Opiniones
                      {item.reviews.map((rev, index) => (
                          <li key={index}>{rev.comment}</li>
                      ))}
                     </ul>
                      <p>{item.description}</p>
                      <h3 className="text-danger">Precio: <span className="fw-bold">{item.price}$</span></h3>
                  </div>
  
              </div>
  
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    
              </div>
              </div>
          </div>
      </div>
  
    )
  }
  
  export default Detalle