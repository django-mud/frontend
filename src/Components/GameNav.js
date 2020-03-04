import React, { useState } from 'react';
import axiosWithAuth from './Auth/AxiosWithAuth'

const GameNav = props => {

    const directionHandler = e => {
        const whereto = e.target.textContent[0].toLowerCase()
        const move = {
            direction: whereto
        }

        axiosWithAuth()
        .post('/api/adv/move/', move)
        .then(res => props.setRoom(res.data))
        .catch(err => console.log(err))

    }
    
    return (
        <div>
            <div>
                <button onClick={directionHandler}>North</button>
            </div>
            <div>
                <button onClick={directionHandler}>West</button>
                <button onClick={directionHandler}>East</button>
            </div>
            <div>
                <button onClick={directionHandler}>South</button>
            </div>
        </div>
    )

}

export default GameNav;