import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import Auth from './pages/auth/auth';

import AuthContext from './context/user/index';
import AuthRoute from './AuthRoute';

import axios from 'axios';
const token = sessionStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;

function App() {
  return(
    <AuthContext>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <AuthRoute path="/signin" exact component={Auth} />
        </Switch>
      </Router>
    </AuthContext>
  )
}


export default App;
