import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import EtsyNavBar from './EtsyNavBar';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';
import Listing from './Listing';

function App() {
  return (
    <Router>
      <Container className="App">
        <EtsyNavBar />

        <Routes>
          <Route path="/list" element={<InventoryList />} />
          <Route path="/add" element={<InventoryForm />} />
          <Route path="/etsy" element={<Listing />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
