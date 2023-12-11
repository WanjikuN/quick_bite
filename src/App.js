import './App.css';
import LandingPage from './components/landingpage';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import { useState, useEffect } from 'react';
function App() {
  const [type, setType] = useState(false);
  const setTypeCallback = (newType) => {
    setType(newType); 
  };
  useEffect(() => {
    document.title = 'Quick Bite';
  }, []);
 
  return (
    <div id="app-container">
      <Navbar setType={setTypeCallback}/>
     <Routes >

     <Route exact path="/" element={<LandingPage />} />
 
    <Route path="/login" element={<Authentication setType={setTypeCallback} type={type}/>} />
    </Routes>
    
    
    </div>
  );
}

export default App;
