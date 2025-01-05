import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewOrder from './components/NewOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-order" element={<NewOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;