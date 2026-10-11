import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../../Utility/CurrencyFormat";
import { useDataValue } from "../../../DataContext/DataContext";
import { Type } from "../../../Utility/action.type";
import "./ProductCard.css";

function ProductCard({ product, flex, renderDesc, renderAdd = true }) {
  const { id, title, image, price, rating, description } = product || {};
  
  const [state, dispatch] = useDataValue();

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        rating,
        description,
      },
    });
  };

  return (
    <div className={`product__card ${flex ? "product__flex" : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="productCard__img" />
      </Link>

      <div className="productCard__info">
        <p className="productCard__title">{title}</p>

        {renderDesc && description && (
          <p className="productCard__description">{description}</p>
        )}

        <div className="productCard__rating">
          <Rating value={rating?.rate || 0} precision={0.5} readOnly />
          <small>({rating?.count || 0})</small>
        </div>

        {/* የዋጋ መግለ */}
        <div className="productCard__price">
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button onClick={addToCart} className="product__button">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;