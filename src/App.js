import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import EtsyNavBar from './EtsyNavBar';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';

function App() {
  return (
    <Router>
      <Container className="App">
        <EtsyNavBar />

        <Routes>
          <Route path="/list" element={<InventoryList />} />
          <Route path="/add" element={<InventoryForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
