import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Image } from 'react-bootstrap';

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
        <Col>
            <Card.Body>
                <Card.Title>{listing["title"]}</Card.Title>
                <Card.Text>{listing["description"]}</Card.Text>
            </Card.Body>
        </Col>
    </Card> 
  );
}

export default Listing;