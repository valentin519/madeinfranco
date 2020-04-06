import React from 'react';
import './App.css';
import ReactLoading from 'react-loading';
import Navbar from './component/Navbar';
import Apropos from './component/Apropos';
import Projet from './component/Projet';
import Realisation from './component/Realisation';
import Contact from './component/Contact';
import Parle from './component/Parle';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Apropos/>
      <Realisation/>
      <Projet/>
      <Contact/>
      <Parle/>
    </div>
  );
}

export default App;
