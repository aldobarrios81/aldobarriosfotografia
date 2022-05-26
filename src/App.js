import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ItemCount from './components/ItemCount/ItemCount'
function App() {
  return (
   <div className='App'>
      <BrowserRouter>
     <NavBar /> 
        <Routes>
          <Route path="/"  element={<ItemListContainer/>} />
        </Routes>
     <Footer />
     </BrowserRouter>
    
   </div>
  );
}

export default App;
