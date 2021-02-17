import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { Home, ContactPage, ProjectsPage } from  './pages/'
import Header from './components/Header';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" exact component={ContactPage}/>
          <Route path="/projects" exact component={ProjectsPage} />
        </Switch>
    </div>
    </Router>
  )
}

export default App
