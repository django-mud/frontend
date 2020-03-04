import React, {useState} from 'react'
import axios from 'axios';

const Login = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    const loginHandler = e => {
        e.preventDefault();

        const credentials = {
            username: user,
            password: pass
        }

        axios
        .post('https://mudgame-cs26.herokuapp.com/api/login/', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.key)
            props.history.push('/mud')
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
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login