import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

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
    <Card>
      <Card.Body>
        <Card.Title>{listing["title"]}</Card.Title>
      </Card.Body>
    </Card> 
  );
}

export default Listing;