import React, {useState} from 'react';
import axios from 'axios'
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
const RegisterButton = styled.button`
    font-family: 'Press Start 2P', cursive;
    width: 8rem;
    height: 2rem;
    margin-top: 1.3rem;
    border-radius: 5px;
    border: 1px solid black;
    outline: 0;
`
const BackButton = styled.button`
    font-family: 'Press Start 2P', cursive;
    width: 6rem;
    height: 2rem;
    margin-top: 1.3rem;
    border-radius: 5px;
    border: 1px solid black;
    outline: 0;
`

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

        if (pass1 !== pass2) {
            setPass1('')
            setPass2('')
            alert('Passwords don\'t match. Try again!')
            return
        }

        const credentials = {
            username: user,
            password1: pass1,
            password2: pass2
        }

        axios
        .post('https://mudgame-cs26.herokuapp.com/api/registration/', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.key)
            props.history.push('mud')
        })
        .catch(err => {
            console.log(err)
            alert('There was a problem while creating your character. This character name may already be taken. Please try again.')
        })
    }

    const backHandler = e => {
        e.preventDefault()
        props.history.push('/')

    }

    return (
        <>
        <LogInHeader />
        <FormContainer>
            <Form onSubmit={registerHandler}>
                <Input type='text' name='user' value={user} onChange={userHandler} placeholder='username' />
                <Input type='password' name='password' value={pass1} onChange={pass1Handler} placeholder='password' />
                <Input type='password' name='re-type password' value={pass2} onChange={pass2Handler} placeholder='re-type password' />
                <RegisterButton>Register</RegisterButton>
                <BackButton onClick={backHandler}>Back to Login</BackButton>
            </Form>
        </FormContainer>
        </>
    )
};

export default Register