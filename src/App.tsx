import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio/Portfolio';
import MyOldSpace from './pages/MyOldSpace/MyOldSpace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/myoldspace" element={<MyOldSpace />} />
      </Routes>
    </Router>
  );
}

export default App;
