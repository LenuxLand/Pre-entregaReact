import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de remeras!" />
    </div>
  );
}

export default App;
