import React, {useState} from 'react';

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
            <form>
                <p>Username</p>
                <input type='text' name='user' value={user} placeholder='username' />
                <p>Password</p>
                <input type='password' name='password' value={pass1} placeholder='password' />
                <p>Re-type Password</p>
                <input type='re-type password' name='re-type password' value={pass2} placeholder='re-type password' />
                <button>Register</button> 
            </form>
        </div>
    )
};

export default Register