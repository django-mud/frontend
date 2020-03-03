import React, {useState} from 'react';

const Register = props => {
    const [user, setUser] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <form>
                <p>Username</p>
                <input type='text' name='user' value={user} placeholder='username' />
                <p>Password</p>
                <input type='password' name='password' value={pass1} placeholder='password' />
                <p>Re-type Password</p>
                <input type='re-type password' name='re-type password' value={pass2} placeholder='re-type password' />
                <p>Email</p>
                <input type='email' name='email' value={email} placeholder='email' />
                <button>Register</button> 
            </form>
        </div>
    )
};

export default Register