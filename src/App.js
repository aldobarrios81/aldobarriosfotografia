import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/footer/footer";

function App() {
  return (
   <div className='App'>
     <NavBar />
     
     <ItemListContainer greetings="Hola"/>
     <Footer />
   </div>
  );
}

export default App;
