import React, { useState } from 'react';
import './App.css';
import Header from './Layout/Header';
import HomePage from './Main/HomePage';
import Footer from './Layout/Footer';
import {createContext, useContext } from "react";
export const UserContext = createContext<any>(undefined);

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  return (
    <UserContext.Provider value={history}>
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
