//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//import { useState } from 'react';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';






import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'grey';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>

        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to Analyze" mode={mode} />

            </Route>
          </Switch> */}
          <Routes>
            {/* exact should be used to avoid any future problems */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>


          {/*<About />*/}

        </div>
      </Router>


    </>

  );
}

export default App;

