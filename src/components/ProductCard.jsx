import { useState } from "react";

const ProductCard = (props) => {
  return (
    <div className="flex w-full flex-col items-center border border-black bg-slate-600">
      <img className="aspect-square w-1/5" src={props.image} alt="" />
      <h3>Name: {props.title}</h3>
      <h3>Price : {props.price}</h3>
      <h3>Category: {props.category}</h3>
    </div>
  );
};

export default ProductCard;
