import React from 'react'
import MailProvider from './Context/MailContext';
import Home from "./Pages/Home"
import Spam from './Pages/Spam';
import Trash from './Pages/Trash';
import NavBar from './Pages/NavBar';
import {Routes , Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className='App'>
     <MailProvider>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/spam" element = {<Spam/>}/>
        <Route path = "/trash" element = {<Trash/>}/>
      </Routes>

     </MailProvider>
    </div>
  );
}

export default App;
