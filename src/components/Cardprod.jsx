import Detalle from "./Detalle"

const Cardprod = ({item}) => {
  return (
    <>
    <div className="card w-96 shadow rounded-md m-2">
                <div className="card-body">
                            <div className="" key={item.id}>
                                <figure><img src={item.images[0]} alt={item.title} className="bg-slate-300 rounded-md m-2 h-80"/></figure>
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary m-3">Buy Now</button>
                                </div>
                            </div>
                
                </div>
            </div>
       <Detalle item={item} key={item.id} />
    </>
  )
}

export default Cardprod
