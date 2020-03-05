import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
`
const HeaderTitle = styled.h1`
    width: 30%;
`
const Logout = styled.button`
    border: none;
    height: 2rem;
    font-size: 1rem;
    font-weight: bold;
    position: absolute;
    right: 2.2rem;
    font-family: 'Press Start 2P', cursive;
    &: hover {
        color: grey;
    }
`

export const LogInHeader = () => {
    

    return (
        <Div>
            <HeaderTitle>Lambda MUD</HeaderTitle>
        </Div>
    )
}

export const LoggedInHeader = props => {
    const history = useHistory();

    const handleQuit = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <Div>
            <HeaderTitle>Lambda MUD</HeaderTitle>
            <Logout onClick={handleQuit}>Quit</Logout>
        </Div>
    )
}