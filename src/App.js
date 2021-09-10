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
  const [mode, setmode] = useState('light');

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


  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#39373c";
      showalert("The Dark Mode Enable", "success");
      document.title = "TextModifier - Dark Mode"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white";
      showalert("The Light Mode Enable", "success");
      document.title = "TextModifier - Light Mode"
    }
  }
  return (
     <>
       <Router>
        {/* Declear a props here */}
        <Navbar title="TextModifier" about="About us" mode={mode} togglemode={togglemode} />
        {/* Here props are automatic generated becaues we give function of defualtprops in navbar.js */}
        {/* <Navbar /> */}

        <Alert alert={alert} />


        {/* <div className="container" mode={mode}>
          <Textform showalert={showalert} heading="Enter your text" mode={mode} />
        </div> */}

        {/* <div className="container">
        <About/>
      </div> */}

        <Switch>
          <Route path="/about">
            <div className="container">
              <About  mode={mode}/>
            </div>
          </Route>
          <Route path="/">
            <div className="container" mode={mode}>
              <Textform showalert={showalert} heading="Enter your text" mode={mode} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
