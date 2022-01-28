import React from "react";
import Objects from "./Objects";

const Objects = ({ objects, onDelete, toggleReminder }) => {
  return (
    <>
      {objects.map((objects) => {
        return (
          <Objects
            key={objects.id}
            objects={objects}
            handleDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default Objects;
