import React, { useState } from 'react';
import axios from 'axios';

function InventoryForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      location
    };

    try {
      const response = await axios.post('http://localhost:3001/inventory', newItem);
      console.log('Item created:', response.data);
      // Handle success, e.g., clear form fields, show success message
    } catch (err) {
      console.error(err);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default InventoryForm;