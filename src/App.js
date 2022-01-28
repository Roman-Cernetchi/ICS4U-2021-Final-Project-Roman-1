import React, { useState, useEffect } from "react";
import AddObject from "./components/AddObject";
import Header from "./components/Header";
import Objects from "./components/Objects";
import "./styles.css";

const getLocalStorage = () => {
  let objects = localStorage.getItem("myObjects");
  if (objects) {
    return JSON.parse(localStorage.getItem("myObjects"));
  } else {
    return [];
  }
};

export default function App() {
  const [showAddObject, setShowAddObject] = useState(false);
  const [objects, setObjects] = useState(getLocalStorage());
  // "inventory": [
  //  {
  //    "object": "Chair",
  //    "quantity": 15,
  //    "description": "4 legs with arm rests and green backrest",
  //    "date of entry": "Jan 2nd, 2022"
  // },
  //  {
  //    "object": "Table",
  //    "quantity": 3,
  //    "description": "Foldable grey table",
  //    "date of entry": "Jan 13th, 2022"
  //  },
  //  {
  //    "object": "Phone",
  //    "quantity": 4,
  //    "description": "IPhone X",
  //   "date of entry": "Jan 23rd, 2022"
  //  }
  // ]

  // Add Task
  const addObject = (object) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newObject = {
      id: id,
      ...object
    };

    setObjects([...objects, newObject]);
  };

  // Delete object
  const deleteObject = (id) => {
    setObjects(objects.filter((object) => object.id !== id));
  };

  // Show Form
  const showObjectForm = () => {
    setShowAddObject(!showAddObject);
  };

  useEffect(() => {
    localStorage.setItem("myObjects", JSON.stringify(objects));
  }, [objects]);

  return (
    <div className="container">
      <Header onAdd={showObjectForm} title="Inventory Tracker" showAdd={showAddObject} />
      {showAddObject && <AddObject addObject={addObject} />}
      {objects.length > 0 ? (
        <Objects
        objects={objects}
          onDelete={deleteObject}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No more objects"
      )}
    </div>
  );
}
