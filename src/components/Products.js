import React, { useEffect } from "react";
import Product from "./Product";
import useDataHoc from "../components/DataHoc";
function Products(props) {
  const url = props.url;
  let [product, dataBaseReturn] = useDataHoc(url, []);
  useEffect(() => {
    const fetchData = async () => {
      await dataBaseReturn();
    };
    fetchData();
  }, [url]);

  return (
    <>
      {product.map((productItem) => (
        <div key={productItem.id} className="col-xl-3 col-lg-6 col-12 mt-5">
          <Product length={product.length} product={productItem} />
        </div>
      ))}
    </>
  );
}
export default Products;
