import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/footer/footer";

function App() {
  return (
   <div className='App'>
     <NavBar />
     <ItemCount />
     <ItemListContainer/>
     <Footer />
   </div>
  );
}

export default App;
