import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
            if (name === 'id') setId(value);
            if (name === 'name') setName(value);
            if (name === 'price') setPrice(value);
            if (name === 'description') setDescription(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && price && description) {
            addProduct({ id, name, price, description });
            setId('');
            setName('');
            setPrice('');
            setDescription('');
        }
    };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Id:
                <input type="number" name="id" value={id} onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
                Price:
                <input type="number" name="price" value={price} onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
                Description:
                <input type="text" name="description" value={description} onChange={handleChange} />
            </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;