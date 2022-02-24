import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(()  => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {

      }
      
    })

  }, []);
  return (
    <div className="app">
    <Router>
      {!user ? ( 
      <LoginScreen />
      ): (
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/test" element={<h1>WOW WHATS UP</h1>} />
      </Routes>
      )}
    </Router>
    </div>
  );
}

export default App;
