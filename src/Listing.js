import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Listing() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchListing = async () => {
      const response = await axios.get('http://localhost:3001/etsy/listing');
      setListing(response.data);
    };

    fetchListing();
  }, []);

  return (
    <div>
      <pre>Title: {listing["title"]}</pre>
    </div>
  );
}

export default Listing;