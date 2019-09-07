import React from "react";
import { Link } from "react-router-dom";
import "./styles/product-card.scss";

const ProductCard = props => {
  const { image_path, name, id } = props.value;
  return (
    <div className={`product-card mx-3`} data-aos="zoom-out-up">
      <img src={image_path} alt={name} className="w-100" />
      <h3 className="text-primary text-center mt-2 h4">{name}</h3>
      <Link to={`/products/${id}`} className="btn btn-primary">
        See More
      </Link>
    </div>
  );
};

export default ProductCard;
