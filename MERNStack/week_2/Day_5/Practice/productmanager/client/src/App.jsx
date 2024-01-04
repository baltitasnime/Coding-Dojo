import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const nav = useNavigate(); // Correct usage of useNavigate
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const createdProduct = {
      title,
      price,
      description,
    };

    axios
      .post("http://localhost:8000/api/create", createdProduct)
      .then((res) => {
        nav("/"); // Correct spelling of navigate
      })
      .catch((err) => console.log(err));

    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <div className='App'>
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>
        <label>
          Title:
          <input
            name="title"
            value={title} // Associate input with state
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <hr />
        <label>
          Price:
          <input
            name="price"
            value={price} // Associate input with state
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <hr />
        <label>
          Description:
          <input
            name="description"
            value={description} // Associate input with state
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button className='btn btn-primary' type="submit">Create</button>
      </form>
    </div>
  );
}

export default App;
