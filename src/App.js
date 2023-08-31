// import logo from './logo.svg';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');   // Whether dark mose is enabled or not 
  const [alert, setAlert] = useState(null);   // Whether dark mose is enabled or not 
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'SB-textAPP - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'SB-textAPP is Amazing mode'
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install SB-textAPP immediately'
      // }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'SB-APP - Light Mode';
    }
  }
  return (
    <>
      {/* ... (other components) */}
    {/* <Router> */}
    <Navbar title="SB-APP" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    </div>       
     {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route  exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter to the text analyze below" mode={mode}/>
          {/* </Route> */}
          
     {/* </Switch>       */}
    {/* </Router> */}
    
    </>
  );
}

export default App
