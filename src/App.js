import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';

import EtsyNavBar from './EtsyNavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <EtsyNavBar />

        <Routes>
          <Route path="/list" element={<InventoryList />} />
          <Route path="/add" element={<InventoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
