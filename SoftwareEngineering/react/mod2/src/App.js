import './App.css';
import LogIn1 from './LogIn1'

// import Nav from './Nav'
// import Saved from './Saved'
// import Home from './Home'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home}></Route>
          <Route path = "/Home" exact component = {Home}></Route>
          <Route path = "/Saved" component = {Saved}></Route>
          <Route path = "/LogIn1" component = {LogIn1}></Route>
          <LogIn1/>
        </Switch>
      </Router> */}
      {/* <Router>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home}></Route>
          <Route path = "/Home" exact component = {Home}></Route>
          <Route path = "/Saved" component = {Saved}></Route>
          <Route path = "/LogIn1" component = {LogIn1}></Route> */}
          <LogIn1/>
        {/* </Switch>
      </Router> */}
      
      
    </div>
  );
}

export default App;
