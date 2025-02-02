import { useState, useEffect } from 'react';
import './App.css';
import Executives from './components/Executives';
import Footer from './components/Footer';
import Home from './components/Home';
import Mission from './components/Mission';
import ProgramsMobile from './components/ProgramsMobile';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import SignUp from './components/SignUp';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <SignUp />
      <Executives />
      <Mission />
      {isMobile ? <ProgramsMobile /> : <Programs />}
      <Footer />
    </>
  );
}

export default App;
