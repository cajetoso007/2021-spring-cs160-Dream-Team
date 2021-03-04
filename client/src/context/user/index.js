import {useState, useEffect, useCallback} from 'react';
import authcontext from './authcontext';
import axios from 'axios';
const API = 'http://localhost:4000/api/user';

const AuthContext = ({children}) => {
    const [userToken, setUserToken] = useState('');
    const [userData, setUserData]= useState({});
    useEffect(() => {
        axios.get(`${API}/account`).then(({data}) => {
            setUserData(data.data); 
            }).catch(err => {
            setUserToken('')
            console.log(err)
        })

    }, [userToken]);

    const setUserTokenHandle = (token) => {
        setUserToken(token);
        localStorage.setItem('token', token);
        
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUserToken('');
    }


    return (
        <authcontext.Provider
            value={{
                userData,
                userToken,
                setUserTokenHandle,
                logout
            }}
        >
            {children}
        </authcontext.Provider>
    )
}

export default AuthContext; 