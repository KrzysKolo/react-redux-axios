import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <Home />
    </div>
    </Router>
  )
}

export default App
