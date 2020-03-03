import React, {useState} from 'react';

const Login = props => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <form>
                <p>Username</p>
                <input type='text' name='username' value={user} placeholder='username' />
                <p>Password</p>
                <input type='password' name='password' value={password} placeholder='password' />
                <p>Email</p>
                <input type='email' name='email' value={email} placeholder='email' />
            </form>
        </div>
    )
}

export default Login