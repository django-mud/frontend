import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../Components/Auth/AxiosWithAuth';

import { LoggedInHeader } from '../Components/Headers'
import GameNav from '../Components/GameNav'
import Map from '../Components/Map'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`
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
    padding-left: 1rem;
`
const UiDiv2 = styled.div`
    width: 50%;
    padding: 1.2rem 0 1.2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const PlayerList = styled.ul`
    list-style: none;
    padding-inline-start: 0;
`
const NavDiv = styled.div`
    margin: 5rem 0 5rem 0;
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
                if (res.data.all_rooms[i].id === res.data.room_id  || res.data.all_rooms[i].room_id === res.data.room_id) {
                    setRoom(res.data.all_rooms[i])
                }
            }
            setRooms(res.data.all_rooms)
            setCurrentPlayers(res.data.players)
        })
        .catch(err => console.log(err))
    }, [])

    const setCurrentRoom = (roomId) => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].id === roomId) {
                setRoom(rooms[i])
            }
        }
    }
    
    return(
        <Container>
            <LoggedInHeader />
            <TitleDiv>World Map</TitleDiv>
            <UiDiv1 className="uidiv1">
                <div>
                {rooms ? <Map rooms={rooms} currentRoom={room}/> : null}
                </div>
                <UiDiv2 className="uidiv2">
                    {room && room.title ? <InfoDiv>Current room: #{room.id}, {room.title} <br/> <br/> <br/> {room.description}</InfoDiv> : <InfoDiv> </InfoDiv> }
                    <NavDiv>
                        <GameNav setCurrentRoom={setCurrentRoom} setCurrentPlayers={setCurrentPlayers}/>
                    </NavDiv>
                    <div>
                        <InfoDiv>Players Present: </InfoDiv>
                        <PlayerList>
                            {currentPlayers.map((player) => <li key={player}>{player}</li>)}
                        </PlayerList>
                    </div>
                    {room && room.error_msg ? <InfoDiv2>Hey! {room.error_msg}</InfoDiv2> : null }
                </UiDiv2>
            </UiDiv1>
        </Container>
    )
}

export default Mud