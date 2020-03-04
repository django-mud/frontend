import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Components/Auth/AxiosWithAuth';

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
        <div>UI will go here</div>
        <GameNav />
        </>
    )
}

export default Mud