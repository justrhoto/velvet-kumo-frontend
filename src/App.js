import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryList from './InventoryList';
import InventoryForm from './InventoryForm';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav nav-pills">
            <li className="nav-item"><Link to="/list" className="nav-link">Inventory List</Link></li>
            <li className="nav-item"><Link to="/add" className="nav-link">Add Inventory</Link></li>
            <li className="nav-item"><Link to="/etsy" className="nav-link">Etsy Tests</Link></li>
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
