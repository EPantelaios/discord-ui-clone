import { Routes, Route } from 'react-router-dom';

import Footer from './components/Homepage/Footer/Footer';
import Header from './components/Homepage/Layout/Header/Header';
import MainContent from './components/Homepage/MainContent/MainContent';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainContent />
              <Footer />
            </>
          }
        />

        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
