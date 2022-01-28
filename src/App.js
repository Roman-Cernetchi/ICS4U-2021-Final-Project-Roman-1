import React, { useState, useEffect } from "react";
import AddObject from "./components/AddObjects";
import Header from "./components/Header";
import Objects from "./components/Objects";
import "./App.css";

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

  // Add Object
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
    <div className="Container">
      <Header onAdd={showObjectForm} title="Inventory Tracker" showAdd={showAddObject} />
      {showAddObject && <AddObject addObject={addObject} />}
      {objects.length > 0 ? (
        <Objects
          objects={objects}
          onDelete={deleteObject}
        />
      ) : (
        "Welcome to the Inventory tracking website, to start press Add Object."
      )}
    </div>
  );
}
