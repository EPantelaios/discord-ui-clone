import { Routes, Route } from 'react-router-dom';

import AuthPage from './components/AuthPage/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<AuthPage login />} />
        <Route path="/register" element={<AuthPage register />} />
      </Routes>
    </>
  );
}

export default App;
