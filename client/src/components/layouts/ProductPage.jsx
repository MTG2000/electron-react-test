import React, { useState, useEffect } from "react";
import "./styles/product.scss";
import Loading from "./Loading";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(null);
  document.title = (product && product.title) || "Products";

  useEffect(() => {
    (async () => {
      const result = await fetch(`/Api/Categories/${match.params.id}`);
      const data = await result.json();
      setProduct(data[0]);
    })();
  });

  if (!product) return <Loading />;
  return (
    <div className={`productPage container py-5`}>
      <div className={`imageWrapper mx-auto rounded mt-5`}>
        <img src={product.image_path} alt={product.name} />
      </div>
      <h2
        className="text-primary mb-5 mt-6 text-center h1"
        data-aos="flip-up"
        data-aos-duration="1100"
      >
        {product.name}
      </h2>
      <p
        style={{ whiteSpace: "pre-line" }}
        className="mb-5"
        data-aos="fade-right"
      >
        {product.details}
      </p>
      <div data-aos="fade-up">
        {product.products.map((product, index) => {
          return (
            <div className="d-flex" key={index}>
              <div
                className="bg-primary text-white border-bottom text-break  px-4 py-3"
                style={{ width: "30%", minWidth: "150px" }}
              >
                {product.name}
              </div>
              <div className=" w-100 border-bottom border-primary px-4 py-3">
                {product.details}
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-5" />
    </div>
  );
};

export default ProductPage;
