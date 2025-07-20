import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
//import {
//  BrowserRouter as Router,
 // Routes,
 // Route,
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [page, setPage] = useState('home');


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
   {/* <Router>*/}
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
  {page === 'about' ? (
    <About />
  ) : (
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
  )}
</div>
   {/* </Router>*/}
   </>
  );
}

export default App;
