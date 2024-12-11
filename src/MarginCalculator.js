import React, { useState } from 'react';
import { Form, Card, InputGroup } from 'react-bootstrap';

function MarginCalculator() {
  const [cost, setCost] = useState('');
  const [margin, setMargin] = useState('');
  const [revenue, setRevenue] = useState('');
  const [profit, setProfit] = useState('');

  const calculateFromCostAndMargin = (cost, margin) => {
    if (cost && margin) {
      const numCost = parseFloat(cost);
      const numMargin = parseFloat(margin);
      const revenue = numCost / (1 - numMargin/100);
      const profit = revenue - numCost;
      setRevenue(revenue.toFixed(2));
      setProfit(profit.toFixed(2));
    }
  };

  const calculateFromCostAndRevenue = (cost, revenue) => {
    if (cost && revenue) {
      const numCost = parseFloat(cost);
      const numRevenue = parseFloat(revenue);
      const margin = ((numRevenue - numCost) / numRevenue) * 100;
      const profit = numRevenue - numCost;
      setMargin(margin.toFixed(2));
      setProfit(profit.toFixed(2));
    }
  };

  const handleCostChange = (e) => {
    setCost(e.target.value);
    calculateFromCostAndMargin(e.target.value, margin);
    calculateFromCostAndRevenue(e.target.value, revenue);
  };

  const handleMarginChange = (e) => {
    setMargin(e.target.value);
    calculateFromCostAndMargin(cost, e.target.value);
  };

  const handleRevenueChange = (e) => {
    setRevenue(e.target.value);
    calculateFromCostAndRevenue(cost, e.target.value);
  };

  return (
    <Card style={{ width: '18rem'  }}>
      <Card.Body>
        <h2 className="mb-4">Margin Calculator</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Cost:</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                value={cost}
                onChange={handleCostChange}
                step="0.01"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Margin:</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                value={margin}
                onChange={handleMarginChange}
                step="0.01"
              />
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Revenue:</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                value={revenue}
                onChange={handleRevenueChange}
                step="0.01"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Profit:</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                value={profit}
                readOnly
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default MarginCalculator;
