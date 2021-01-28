import React from "react";
import './Form.css';

export default function FormList(props) {
  const Hygiene = "Hygiene";
  const Medical = "Medical";
  const Clothing = "Clothing";
  const Funeral = "Funeral";
  const Housing = "Housing"
  return (
    <ul className="list-item">
        <li className="list-categories" >{props.categories} - </li>
        <li className="list-categories"><strong>Price</strong> : {props.price}$</li>
        <li className="list-categories"><strong>Title</strong> : {props.product_title}</li>
        <li className="list-categories"><strong>Description</strong> : {props.description}</li>
    </ul>
  );
};