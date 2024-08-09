import  { useState } from "react";

function DataHoc(url, init) {
  const [product, setProduct] = useState(init);
  const API_URL = url;
  const dataBaseReturn = async () => {
    let res = await fetch(API_URL);
    let data = await res.json();
    setProduct(data);
  };
  return [product, dataBaseReturn];
}

export default DataHoc;
