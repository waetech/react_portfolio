import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
   <Nav />
   <Switch>
   <Route path="/" exact component={Home} />
   <Route path="/about" component={About}/>
   <Route path="/projects" component={Projects}/>
   </Switch>
   
      </div>
    </Router>
    
  );
}

const Home = () => (
  <div>
    <h1>Homepage</h1>
  </div>

);
export default App;
