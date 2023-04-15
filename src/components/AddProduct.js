import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  // 9991816034

  const addProduct = async () => {
    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:8000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="product">
      <h1>Add Product</h1>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && !name && (
        <span className="invalid-input">Enter Valid Name</span>
      )}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {error && !price && (
        <span className="invalid-input">Enter Valid Price</span>
      )}

      <input
        className="inputBox"
        type="text"
        value={category}
        placeholder="Enter Product Catogery"
        onChange={(e) => setCategory(e.target.value)}
      />

      {error && !category && (
        <span className="invalid-input">Enter Valid Category</span>
      )}

      <input
        className="inputBox"
        type="text"
        value={company}
        placeholder="Enter Product Company"
        onChange={(e) => setCompany(e.target.value)}
      />

      {error && !company && (
        <span className="invalid-input">Enter Company Name</span>
      )}

      <button className="appButton" type="submit" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;

/*

FRIDAY SPECIAL

08-09-60-27-82
37-63-40-93-43
48-80-90-06-72
28-73-36-04-39
34-84


SINGLE JODI

52-54

TOP JODI

02-07-57-04-09-59

SPORT JODI

26-12-17

HURF 

4444(location = GB)
*/
