import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    <div>
      <Home />
    </div>
    </Router>
  )
}

export default App
