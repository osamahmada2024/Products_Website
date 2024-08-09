import React, { useEffect } from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";
function Product(props) {
  const { product, length } = props;

  return (
    <div key={product.id} className=" card product-card">
      {!product && <h1>Loading</h1>}
      <img
        src={product.image}
        id="product-img"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {length ? product.title.slice(0, 30) + ".." : product.title}
        </h5>
        <p className="card-text">
          {length
            ? product.description.slice(0, 30) + "......."
            : product.description}
        </p>
        {length > 1 ? (
          <Link to={`/product/` + product.id} className="btn btn-primary">
            Details
          </Link>
        ) : (
          ""
        )}
        {!length ? <p>${product.price}</p> : ""}
      </div>
    </div>
  );
}

export default Product;
