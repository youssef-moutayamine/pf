import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/home/home';
import WelcomePage from './pages/welcome/welcome';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import ErrorPage from './pages/error/error';
import { ThemeProvider } from './context';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation();

  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomePage onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>
      {!showWelcome && (
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
