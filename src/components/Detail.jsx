import { useParams } from "react-router-dom";
import Layout from "./Layout";
import ProductCard from "./ProductCard";
import products from "../services/data/product";
import { MDBIcon } from "mdb-react-ui-kit";
import NumberFormat from "react-number-format";

const Detail = () => {
  const params = useParams();
  const item = products.filter(
    (element) => element.name === params.productName
  );
  const priceAfterDiscount =
    item[0].originalPrice -
    (item[0].originalPrice * item[0].discountPercent) / 100;
  return (
    <Layout>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={`product/${item[0].image}`}
              alt=""
              className="img-fluid img-thumbnail mb-4 mb-md-0 w-100"
            ></img>
          </div>
          <div className="col-md-6">
            <h2>{item[0].name}</h2>
            <MDBIcon icon="star" size="md" className="text-warning"></MDBIcon>
            <MDBIcon icon="star" size="md" className="text-warning"></MDBIcon>
            <MDBIcon icon="star" size="md" className="text-warning"></MDBIcon>
            <MDBIcon icon="star" size="md" className="text-warning"></MDBIcon>
            <MDBIcon icon="star" size="md" className="text-warning"></MDBIcon>
            <p className="mt-3">{item[0].longDescription}</p>
            <div className="bg-success bg-opacity-10 p-2 rounded-2 mb-2">
              <h3 className="">
                <NumberFormat
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"Rp "}
                  value={priceAfterDiscount}
                  displayType="text"
                />
              </h3>
              {item[0].discountPercent > 0 && (
                <span className="text-muted text-decoration-line-through">
                  Rp. {item[0].originalPrice}
                </span>
              )}
            </div>
            <div className="d-sm-flex p-2 flex-row justify-content-between align-items-end">
              <div>
                <p><small>Jumlah Beli:</small></p>
              <div className="btn-group mb-2 mb-sm-0 text-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-type="minus"
                  data-field="quant[2]"
                >
                  <MDBIcon icon="minus" size="lg"></MDBIcon>
                </button>
                <input
                  type="text"
                  name="quant[2]"
                  class="form-control text-center"
                  value="5"
                  min="1"
                  max="100"
                />
                <button
                  type="button"
                  class="btn btn-primary"
                  data-type="plus"
                  data-field="quant[2]"
                >
                  <MDBIcon icon="plus" size="lg"></MDBIcon>
                </button>
              </div>
              </div>
              <button type="button" className="btn btn-success">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>  
    </Layout>
  );
};

export default Detail;
