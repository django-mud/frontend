import React, {useState} from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth'

const Login = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    const emailHandler = e => {
        setEmail(e.target.value)
    }

    const loginHandler = e => {
        e.preventDefault();

        const credentials = {
            username: user,
            password: pass
        }

        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={loginHandler}>
                <p>Username</p>
                <input type='text' name='username' value={user} onChange={userHandler} placeholder='username' />
                <p>Password</p>
                <input type='password' name='password' value={pass} onChange={passHandler} placeholder='password' />
                <p>Email</p>
                <input type='email' name='email' value={email} onChange={emailHandler} placeholder='email' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login