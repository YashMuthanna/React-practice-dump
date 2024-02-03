import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';



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
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Form mode={mode}/>
      

    </div>
  );
}

export default App;
