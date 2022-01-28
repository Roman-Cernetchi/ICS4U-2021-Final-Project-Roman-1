import React from "react";
import Object from "./Objects";

const Objects = ({ objects, onDelete }) => {
  return (
    
    <>
      {objects.map((object) => {
        return (
          <Object
            key={object.id}
            object={object}
            handleDelete={onDelete}
          />
        );
      })}
    </>
  );
}

export default Objects;
