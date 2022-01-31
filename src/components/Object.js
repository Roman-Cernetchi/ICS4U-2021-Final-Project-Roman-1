import React from "react";
import { FaTimes } from "react-icons/fa";

const Object = ({ object, handleDelete, toggleReminder }) => {
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
      <p>{object.date}</p>
    </div>
  );
};

export default Object;
