import React from "react";
import Object from "./Objects";

const Objects = ({ objects, onDelete }) => {
    return (
        <>
            {objects.map((object) => {
                return (
                    <Object
                        key={objects.id}
                        object={object}
                        handleDelete={onDelete} />
                );
            })}
        </>
    );
}

export default Objects;
