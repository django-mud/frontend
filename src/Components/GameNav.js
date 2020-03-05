import React from 'react';
import axiosWithAuth from './Auth/AxiosWithAuth'
import styled from 'styled-components';

const NavButton = styled.button`
    height: 3rem;
    width: 6rem;
    margin: .6rem;
    outline: 0;
    border-radius: 5px;
    font-family: 'Press Start 2P', cursive;
    font-size: .8rem;
`

const GameNav = props => {

    const directionHandler = e => {
        const whereto = e.target.textContent[0].toLowerCase()
        const move = {
            direction: whereto
        }

        axiosWithAuth()
        .post('/api/adv/move/', move)
        .then(res => {
            console.log('move endpoint', res)
            props.setRoom(res.data)
        })
        .catch(err => console.log(err))

    }
    
    return (
        <div>
            <div>
                <NavButton onClick={directionHandler}>North</NavButton>
            </div>
            <div>
                <NavButton onClick={directionHandler}>West</NavButton>
                <NavButton onClick={directionHandler}>East</NavButton>
            </div>
            <div>
                <NavButton onClick={directionHandler}>South</NavButton>
            </div>
        </div>
    )

}

export default GameNav;