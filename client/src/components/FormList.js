import React from "react";


export default function FormList(props) {
  return (
    <tr className="list-item">
        <td>{props.categories}</td>
        <td>{props.price}</td>
        <td>{props.product_title}</td>
        <td>{props.description}</td>
    </tr>
  );
};