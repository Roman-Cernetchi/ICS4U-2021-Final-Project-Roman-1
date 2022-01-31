import React from "react";
import Object from "./Object";
 
const Objects = ({ objects, onDelete }) => {
 return (
   <h1>
     {objects.map((object) => {
       return (
         <Object
           key={object.id}
           object={object}
           handleDelete={onDelete}
         />
       );
     })}
   </h1>
 );
};
 
export default Objects;
