import React from "react";
import { FaTimes } from "react-icons/fa";

const Object = ({ object, handleDelete, toggleReminder }) => {
  return (
    <h3>
        {object.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => handleDelete(task.id)}
        />
    </h3>
  );
};

export default Object;
