import React, {useState} from 'react';

const Register = props => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <form>
                <p>Username</p>
                <input type='text' name='user' value={user} placeholder='username' />
                <p>Password</p>
                <input type='password' name='password' value={password} placeholder='password' />
                <p>Email</p>
                <input type='email' name='email' value={email} placeholder='email' />
                <button>Register</button> 
            </form>
        </div>
    )
};

export default Register