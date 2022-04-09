import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBIcon } from "mdb-react-ui-kit";
import ProductCard from "./ProductCard";
import products from "../services/data/product";
import Layout from "./Layout";
import categories from "../services/data/categories";

const Home = () => {
  const [product, setProduct] = useState(products)
  const [categorySelected, setCategorySelected] = useState("all");

  const handleCategories = (e) => {
    const currentCategorySelected = e.target.id;
    setCategorySelected(currentCategorySelected);
    if(currentCategorySelected === "all") {
      setProduct(products)
    } else {
      const productByCategory = products.filter((item, index) => item.category === currentCategorySelected);
      setProduct(productByCategory)
    }
  }
  return (
    <Layout>
      {/* Content Utama */}
      <div className="row mt-5">
        {/* Sidebar */}
        <div className="col-md-3">
          {/* Categories */}
          <div className="row mb-5">
            <div className="col">
              <h3 className="">Categories</h3>
              <ul className="list-group list-group-flush mt-3">
                {categories.map((item, index) => {
                  return(
                    <li className={`d-flex justify-content-between align-items-center p-1  ${item === categorySelected ? "bg-success bg-opacity-10 rounded-3" : "" }`} onClick={(e) => handleCategories(e)} id={item}>
                    {item}
                  <span className="badge badge-primary badge-pill bg-success bg-opacity-25">
                    {products.filter((product, productIndex) => product.category === item).length}
                  </span>
                </li>
                  )
                })}
                <li className={`d-flex justify-content-between align-items-center p-1  ${"all" === categorySelected ? "bg-success bg-opacity-10 rounded-3" : "" }`} onClick={(e) => handleCategories(e)} id="all">
                    All
                  <span className="badge badge-primary badge-pill bg-success bg-opacity-25">
                    {products.length}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Order By */}
          <div className="row mb-5">
            <div className="col">
              <h3 className="">Order by</h3>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="inputRadio1"
                  name="order"
                />
                <label className="form-check-label" for="inputRadio1">
                  Alphabet
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="inputRadio2"
                  name="order"
                />
                <label className="form-check-label" for="inputRadio2">
                  Termurah
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="inputRadio3"
                  name="order"
                />
                <label className="form-check-label" for="inputRadio3">
                  Termahal
                </label>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="row mb-5">
            <div className="col">
              <h3 className="">Rating</h3>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inputCheck1"
                />
                <label className="form-check-label" for="inputCheck1">
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inputCheck2"
                />
                <label className="form-check-label" for="inputCheck2">
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inputCheck3"
                />
                <label className="form-check-label" for="inputCheck3">
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inputCheck4"
                />
                <label className="form-check-label" for="inputCheck4">
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="inputCheck5"
                />
                <label className="form-check-label" for="inputCheck5">
                  <MDBIcon
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                  <MDBIcon
                    far
                    icon="star"
                    size="md"
                    className="text-warning"
                  ></MDBIcon>
                </label>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="row">
            <div className="col">
              <h3 className="">Price</h3>
              <input
                className="form-range"
                type="range"
                id="formRange1"
              ></input>
              <div className="d-flex justify-content-between">
                <span className="">Min</span>
                <span className="">Max</span>
              </div>
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  id="inputMin"
                  className="form-control me-4"
                  placeholder="0"
                  disabled
                ></input>
                <input
                  type="text"
                  id="inputMax"
                  className="form-control"
                  placeholder="000"
                  disabled
                ></input>
              </div>
              <div className="d-flex justify-content-between my-3">
                <button type="button" className="btn btn-success">
                  Apply
                </button>
                <button type="button" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Card */}
        <div className="col-md-9 mt-5 mt-md-0">
          <div className="row row-cols-auto justify-content-center row-cols-sm-2 row-cols-lg-3 mb-2 g-4">
            {product.map((item, index) => {
              return <ProductCard item={item} key={index} />;
            })}
          </div>
          <div className="col text-center mb-5">
            <button type="button" className="btn btn-success mt-5">
              Show More Products
              <MDBIcon icon="angle-double-down" className="ms-2"></MDBIcon>
            </button>
          </div>
        </div>
      </div>

          </Layout>
  );
};

export default Home;
