import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
import authcontext from '../../context/user/authcontext';

const Home = () => {
    const {userToken, logout, userData} = useContext(authcontext);
    
    return (
      <div className="App">
        <h2>Home Page</h2> 
        {userToken && (
          <div>
            <h1>Welcome {userData.name}</h1>
            <p>email: {userData.email}</p>
          </div>
        )}
        {!userToken && (
        <Link to="/signin">
            <button>Got to login</button>
        </Link>
        )}
        {userToken && (
          <button onClick={() => logout()}>
            Logout
          </button>
        )}

      </div>
    );
  }
  
  export default Home;