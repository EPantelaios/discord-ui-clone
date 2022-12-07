import { Routes, Route } from 'react-router-dom';

import AuthPage from './components/AuthPage/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

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
