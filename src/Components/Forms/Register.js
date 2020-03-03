import React, {useState} from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth'

const Register = props => {
    const [user, setUser] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    }

    const pass1Handler = e => {
        setPass1(e.target.value)
    }

    const pass2Handler = e => {
        setPass2(e.target.value)
    }

    const registerHandler = e => {
        e.preventDefault();

        const credentials = {
            username: user,
            password1: pass1,
            password2: pass2
        }

        axiosWithAuth()
        .post('/api/registration/', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.key)
            props.history.push('mud')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={registerHandler}>
                <p>Username</p>
                <input type='text' name='user' value={user} onChange={userHandler} placeholder='username' />
                <p>Password</p>
                <input type='password' name='password' value={pass1} onChange={pass1Handler} placeholder='password' />
                <p>Re-type Password</p>
                <input type='password' name='re-type password' value={pass2} onChange={pass2Handler} placeholder='re-type password' />
                <button>Register</button> 
            </form>
        </div>
    )
};

export default Register