import React from "react";
import { FaTimes } from "react-icons/fa";

const Object = ({ object, handleDelete, }) => {
  return (
    <h3>
        {object.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(object.id)}
        />
    </h3>
  );
};

export default Object;
