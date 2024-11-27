import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get('http://localhost:3001/');
      setInventory(response.data);
    };

    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map(item => (
          <li key={item._id}>
            {item.name} - {item.quantity} - {item.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;