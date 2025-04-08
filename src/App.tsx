import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio/Portfolio';
import MyOldSpace from './pages/MyOldSpace/MyOldSpace';
import BillGOConsole from './pages/MyOldSpace/Blogs/BillGOConsole/BillGOConsole';
import BillGOExperience from './pages/MyOldSpace/Blogs/BillGOExperience/BillGOExperience';
import SailPointDesign from './pages/MyOldSpace/Blogs/SailPointDesign/SailPointDesign';
import { ThemeProvider } from './pages/MyOldSpace/context/ThemeContext';
import MagicCanvas from './pages/MagicCanvas/MagicCanvas';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/magic" element={<MagicCanvas />} />
          <Route path="/myoldspace" element={<MyOldSpace />} />
          <Route path="/blog/billgo-console" element={<BillGOConsole />} />
          <Route path="/blog/sailpoint-design" element={<SailPointDesign />} />
          <Route
            path="/blog/billgo-experience"
            element={<BillGOExperience />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
