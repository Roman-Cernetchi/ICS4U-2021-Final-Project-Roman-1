import React, { useState } from "react";

const AddObject = ({ addObject }) => {
    const [object, setObject] = useState({
        text: "",
        quantity: "",
        description: "",
        date: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setObject((prevObject) => {
            return {
            ...prevObject,
            [name]: value
        };
      });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!object.text) {
          alert("Please add an object");
        } else {
            addObject({
                text: object.text,
                quantity: object.quantity,
                description: object.description,
                date: object.date,
              });
          
            setObject({
                text: "",
                quantity: "",
                description: "",
                date: ""
            });
        }
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Object</label>
                <input
                    name="text"
                    type="text"
                    placeholder="Add the Object"
                    value={object.text}
                    onChange={handleChange}
                />
            </div>
            <div className="form-control">
                <label>Quantity</label>
                <input
                    type="text"
                    placeholder="Add a Quantity"
                    name="quantity"
                    value={object.quantity}
                    onChange={handleChange}
                />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input
                    name="description"
                    type="text"
                    placeholder="Add a Description"
                    value={object.description}
                    onChange={handleChange}
                />
            </div>
            <div className="form-control">
                <label>Date of Entry</label>
                <input
                    type="text"
                    placeholder="Add Date of Entry"
                    name="date"
                    value={object.date}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Save Object" className="btn btn-block" />
        </form>
    );
};

export default AddObject;
