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
    width: 100%;
    text-align: center;
`
const InfoDiv2 = styled.div`
    width: 100%;
    text-align: center;
    color: red;
`
const UiDiv1 = styled.div`
    display: flex;
    width: 100%;
    padding-left: 1rem;
`
const UiDiv2 = styled.div`
    width: 50%;
    padding: 1.2rem 0 1.2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const UiDiv3 = styled.div`
    display: flex;
`

const Mud = () => {
    const [room, setRoom] = useState(null)
    const [rooms, setRooms] = useState(null)
    const [currentPlayers, setCurrentPlayers] = useState([])
    console.log('room', room)
    useEffect(() => {
        axiosWithAuth()
        .get('/api/adv/init/')
        .then(res => {
            console.log('init res', res)
            // reverse y for canvas and save rooms to state
            for (let i = 0; i < res.data.all_rooms.length; i++) {
                res.data.all_rooms[i].y *= -1
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

    useEffect(() => {
        let tempCurrentPlayers = []
        if (room && room.players) {
            for (let i = 0; i < room.players.length; i++) {
                tempCurrentPlayers.push(room.players[i])
                setCurrentPlayers(tempCurrentPlayers)
            }
        } else {
            setCurrentPlayers(['You are alone in this room.'])
        }
    }, [room])

    
    return(
        <>
        <LoggedInHeader />
        <TitleDiv>World Map</TitleDiv>
        <UiDiv1 className="uidiv1">
            {rooms ? <Map rooms={rooms}/> : null}
            <UiDiv2 className="uidiv2">
                {room && room.title ? <InfoDiv>Current room: #{room.room_id}, {room.title} <br/> <br/> <br/> {room.description}</InfoDiv> : <InfoDiv> </InfoDiv> }
                <UiDiv3>
                <GameNav setRoom={setRoom}/>
                <div>
                    <InfoDiv>Players Present: </InfoDiv>
                    <ul>
                        {currentPlayers.map((player) => <li key={player}>{player}</li>)}
                    </ul>
                </div>
                </UiDiv3>
                {room && room.error_msg ? <InfoDiv2>Hey! {room.error_msg}</InfoDiv2> : null }
            </UiDiv2>
        </UiDiv1>
        </>
    )
}

export default Mud