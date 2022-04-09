import { MDBRipple } from "mdb-react-ui-kit";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const item = props.item;
    const priceAfterDiscount = item.originalPrice - ((item.originalPrice * item.discountPercent) / 100);

    return (
    <div className="col">
              <div className="card h-100">
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                <img className="card-img-top p-3" alt="" src={`product/${props.item.image}`} />
                <div className="mask" style={{ backgroundColor:'rgba(251, 251, 251, 0.15)'}}></div>
                </MDBRipple>
                <div className="card-body">
                  <Link to={item.name}>
                  <h5 className="card-title">{item.name}</h5>
                  </Link>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-body d-flex flex-row align-items-center justify-content-between">
                  <div>
                    <h5 className="card-title">
                      <NumberFormat thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} value={priceAfterDiscount} displayType="text" />
                    </h5>
                    {item.discountPercent > 0 && (<p className="card-text">
                      <small className="text-muted text-decoration-line-through">Rp. {item.originalPrice}</small>
                    </p>)}
                  </div>
                  <button type="button" className="btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
    )
}

export default ProductCard;