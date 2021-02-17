import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Home />
    </div>
    </Router>
  )
}

export default App
