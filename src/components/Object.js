import React from "react";
import { FaTimes } from "react-icons/fa";

const Object = ({ object, handleDelete, }) => {
  return (
    <div class="Container2"
      >
      <h3>
        {object.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(object.id)}
        />
      </h3>
      <table>
        <thead>
          <th>Quantity</th>
          <th>Description</th>
          <th>DOE</th>
        </thead>
        <tbody>
          <td>{object.quantity}</td>
          <td>{object.description}</td>
          <td>{object.date}</td>
        </tbody>
      </table>
    </div>
  );
};

export default Object;
