import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';

function App() {
  return (
    <Router>
      <div className="App">
        <ul class="nav nav-pills">
            <li class="nav-item"><Link to="/list" class="nav-link">Inventory List</Link></li>
            <li class="nav-item"><Link to="/add" class="nav-link">Add Inventory</Link></li>
        </ul>

        <Routes>
          <Route path="/list" element={<InventoryList />} />
          <Route path="/add" element={<InventoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
