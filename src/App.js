import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import EtsyNavBar from './EtsyNavBar';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';
import Listing from './Listing';
import MarginCalculator from './MarginCalculator';

function App() {
  return (
    <Container>
      <Router>
        <EtsyNavBar />

        <Routes>
          <Route path="/list" element={<InventoryList />} />
          <Route path="/add" element={<InventoryForm />} />
          <Route path="/etsy" element={<Listing />} />
          <Route path="/margins" element={<MarginCalculator />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
