import React, {useState} from 'react';
import axios from 'axios';
import { LogInHeader } from '../Headers';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`

const Form = styled.form`
    width: 25%;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: lightgray;
`
const Input = styled.input`
    height: 2rem;
    width: 12rem;
    font-family: 'Press Start 2P', cursive;
    margin: .5rem;
    border: 1px solid black;
    outline: 0;
    text-indent: 5px;
`
const Button = styled.button`
    font-family: 'Press Start 2P', cursive;
    width: 8rem;
    height: 2rem;
    margin-top: 1rem;
    border-radius: 5px;
    border: 1px solid black;
    outline: 0;
`
const Or = styled.p`
    margin: 0;
    font-size: .8rem;
    margin-top: 1rem;
`

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
        .catch(err => {
            console.log(err)
            setUser('')
            setPass('')
            alert('Incorrect username/password. Please try again')
        })
    }

    const registerHandler = e => {
        e.preventDefault()
        props.history.push('/register')
    }

    return (
        <>
        <LogInHeader />
        <FormContainer>
            <Form onSubmit={loginHandler}>
                <Input type='text' name='username' value={user} onChange={userHandler} placeholder='username' />
                <Input type='password' name='password' value={pass} onChange={passHandler} placeholder='password' />
                <Button>Login</Button>
                <Or>OR</Or>
                <Button onClick={registerHandler}>Register</Button>
            </Form>
        </FormContainer>
        </>
    )
}

export default Login