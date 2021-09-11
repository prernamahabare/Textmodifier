import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  //to set mode defalut mode is light
  const [mode, setmode] = useState('light');

  //to set alert after clicking any button
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  //to change mode to dark or light
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#39373c";
      showalert("The Dark Mode Enable", "success");
      //document.title = "TextModifier - Dark Mode"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white";
      showalert("The Light Mode Enable", "success");
      //document.title = "TextModifier - Light Mode"
    }
  }

  return (
     <>
       <Router>
        {/* Declear a props here */}
        <Navbar title="TextModifier" about="About us" mode={mode} togglemode={togglemode} />
        {/* Here props are automatic generated becaues we give function of defualtprops in navbar.js */}
        {/* <Navbar /> */}

        {/* to view alert in application  */}
        <Alert alert={alert} />
        
        {/* to use functionality of router in application */}
        <Switch>
          <Route path="/about">
            <div className="container">
              <About  mode={mode} className="Active"/>
            </div>
          </Route>
          <Route path="/">
            <div className="container" mode={mode}>
              <Textform showalert={showalert} heading="Enter your text" mode={mode} className="Active" />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
