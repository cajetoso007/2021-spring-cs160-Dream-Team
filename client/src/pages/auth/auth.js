import {useContext, useState} from 'react';
import axios from 'axios';

import authcontext from '../../context/user/authcontext';

const Auth = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {setUserTokenHandle} = useContext(authcontext);
    const onSubmitHandle = async(e) => {
        e.preventDefault();
        let formData = {email, password};
        try {
            const {data} = await axios.post('http://localhost:4000/api/user/signin', formData);
            setUserTokenHandle(data.token);
        }catch(e) {
            setError('Email or password is incorrect');
        }
    }
    return (
        <div>
            <h2>Signin</h2>
{error && <div>
                <p>{error}</p><button onClick={() => setError('')}>X</button>
            </div>}
            <div>
                <form onSubmit={onSubmitHandle}>
                    <div>
                        <label>Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="/submit">submit</button>
                </form>
            </div>
            <h2>Sign up</h2>
            <p>Signup form herre</p>
        </div>
    )
}

export default Auth;