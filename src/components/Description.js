import React, { useEffect } from "react";
import useDataHoc from "./DataHoc";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Description() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, dataBaseReturn] = useDataHoc(url, {});
  useEffect(() => {
     dataBaseReturn();
  },[]);

  return (
    <>
      <Product  length={product.length} product={product} />
    </>
  );
}

export default Description;
