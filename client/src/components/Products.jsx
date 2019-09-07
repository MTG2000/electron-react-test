import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "./layouts/Loading";
const { ipcRenderer } = window.require("electron");

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const id = document.URL.split("#")[1];
    if (id) {
      // document.getElementById(id).scrollIntoView(true);
    }
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      ipcRenderer.send("getProducts");
      ipcRenderer.addListener("data", (_, data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
    })();

    return () => {
      ipcRenderer.removeAllListeners("data");
    };
  }, []);

  return (
    <div id="products">
      <div className="py-5" />
      <h2
        className="text-center text-primary display-4 mt-5 mb-5"
        data-aos="zoom-in-up"
      >
        Our Products
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="row justify-content-around container mx-auto pb-5 mb-5">
          {products.map(p => (
            <ProductCard value={p} key={p.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
