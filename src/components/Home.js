import React, { useState } from "react";
import Products from "./Products";
import "../css/Button.css";

function Home() {
  let [api, setApi] = useState("https://fakestoreapi.com/products");
  const handleData = (e) => {
    const type = e.target.id;
    let API_URL = `https://fakestoreapi.com/products/category/${type}`;
    type !== "All" ? setApi(API_URL) : setApi("https://fakestoreapi.com/products");
  };

  return (
    <div>
      <button
        onClick={handleData}
        type="button"
        id="All"
        className=" ms-3  btn-style btn btn-primary"
      >
        {" "}
        All
      </button>
      <button
        onClick={handleData}
        type="button"
        id="men's clothing"
        className=" ms-3  btn-style btn btn-primary"
      >
        men's clothing
      </button>
      <button
        onClick={handleData}
        type="button"
        id="women's clothing"
        className=" ms-3  btn-style btn btn-primary"
      >
        women's clothing
      </button>
      <button
        onClick={handleData}
        type="button"
        id="jewelery"
        className=" ms-3  btn-style btn btn-primary"
      >
        jewelery
      </button>
      <button
        onClick={handleData}
        type="button"
        id="electronics"
        className=" ms-3  btn-style btn btn-primary"
      >
        electronics
      </button>
      <div className="row">
        <Products url={api} />
      </div>
    </div>
  );
}

export default Home;
