import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Components/Auth/AxiosWithAuth';

import { LoggedInHeader } from '../Components/Headers'
import GameNav from '../Components/GameNav'
import Map from '../Components/Map'
import styled from 'styled-components';

const TitleDiv = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
`
const InfoDiv = styled.div`
    margin: 2rem;
    width: 800px;
    height: 70px;
    text-align: center;
`

const Mud = () => {
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
        <TitleDiv>World Map</TitleDiv>
        {rooms ? <Map rooms={rooms}/> : null}
        <div>
            {room && room.title ? <InfoDiv>Current room: {room.title} <br/> {room.description}</InfoDiv> : <InfoDiv> </InfoDiv>}
            <GameNav setRoom={setRoom}/>
            {room && room.error_msg ? <InfoDiv>Hey! {room.error_msg}</InfoDiv> : <InfoDiv> </InfoDiv>}
        </div>
        </>
    )
}

export default Mud