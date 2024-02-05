import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor = '#36454F';
    }
  }
  return (
   <Routes>

      <Route exact path='/' element={
      <> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <Form mode={mode}/>
      </> 
    } />

      <Route exact path='/about' element={
        <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
        <About/>
        </>
      }>

      </Route>
    </Routes>
  );
}

export default App;
