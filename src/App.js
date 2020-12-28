import React from 'react'
;import './App.css';
import Navbar from './Navbar';
import Lab from './Lab';
import ThinkSpace from './ThinkSpace';
// import Login from './Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';

const USERS = [
  {
    id: 1,
    username: 'jpormentilla',
    password: 'pass123',
    email: 'julian.pormentilla@gmail.com'
  }
]

class App extends React.Component {
  state = {  
    users: []
  }

  render() { 

  return (
    <Router>
      <React.Fragment>
        <Switch>
          <div className="App">
            <Sticky context={this.contextRef}>
              <Navbar loggedIn={this.state.loggedIn} setLogin={this.setLogin}/>
            </Sticky>
            {/* <Route path='/login' render={(props) => (<Login {...props} />)}></Route> */}
            <Route path='/lab' render={(props) => (<Lab {...props} />)}></Route>
            <Route path='/thinkspace' render={(props) => (<ThinkSpace {...props} />)}></Route>
          </div>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
}
export default App;