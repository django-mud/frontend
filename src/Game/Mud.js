import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Components/Auth/AxiosWithAuth';

import { LoggedInHeader } from '../Components/Headers'
import GameNav from '../Components/GameNav'

const Mud = props => {
    const [room, setRoom] = useState(null)

    useEffect(() => {
        axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    })
    return(
        <>
        <LoggedInHeader />
        <div>UI will go here</div>
        <GameNav setRoom={setRoom}/>
        </>
    )
}

export default Mud