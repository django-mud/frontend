import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Components/Auth/AxiosWithAuth';

import { LoggedInHeader } from '../Components/Headers'
import GameNav from '../Components/GameNav'
import Map from '../Components/Map'

const Mud = props => {
    const [room, setRoom] = useState(null)
    const [rooms, setRooms] = useState(null)

    useEffect(() => {
        axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            console.log('init res', res)
            // reverse y for canvas and save rooms to state
            for (let i = 0; i < res.data.all_rooms.length; i++) {
                res.data.all_rooms.y *= -1
            }
            setRooms(res.data.all_rooms)

            // set current room
            let current_room = {}
            current_room.title = res.data.title
            current_room.description = res.data.description
            setRoom(res.data.title)
        })
        .catch(err => console.log(err))
    }, [])

    
    return(
        <>
        <LoggedInHeader />
        <div>World Map</div>
        {rooms ? <Map rooms={rooms}/> : null}
        {room && room.title ? <div>Current room: {room.title} <br/> {room.description}</div> : null}
        <GameNav setRoom={setRoom}/>
        {room && room.error_msg ? <div>Hey! {room.error_msg}</div> : null}
        </>
    )
}

export default Mud