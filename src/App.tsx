import { Routes, Route } from 'react-router-dom';

import AuthPage from './components/AuthPage/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

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
