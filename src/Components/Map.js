import React, { useEffect } from 'react';
import './Map.css';

const Map = props => {
  let rooms = props.rooms

  useEffect(() => {
    var canvas = document.getElementById('map');

    const roomWidth = 40;
    const roomHeight = 40;
    
    // Pixels between rooms
    const roomPadding = 10;

    // A canvas X axis increases as it goes to the right like a normal graph
    // A canvas Y axis increases as it goes to the BOTTOM unlike a normal graph!
    // Top left is 0, 0
    let centerpoint = {
      x: Math.round(canvas.width/2 - props.currentRoom.x * (roomWidth + roomPadding) - (roomWidth + roomPadding)/2),
      y: Math.round(canvas.height/2 - props.currentRoom.y * (roomHeight + roomPadding) - (roomHeight + roomPadding)/2),
    };
    
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      // Clear existing content 
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Set the outline color
      ctx.strokeStyle = 'black'
      // Set the font size and type
      ctx.font = '12px serif';
      
      // iterate through rooms
      for (var i = 0; i < rooms.length; i++) {
        // Determine location of the room
        const leftOffset = centerpoint.x + rooms[i].x * (roomWidth + roomPadding) + roomPadding/2;
        const topOffset = centerpoint.y + rooms[i].y * (roomHeight + roomPadding) + roomPadding/2;
        // Set the color to fill the room
        ctx.fillStyle = 'blue';
        if (props.currentRoom.id === rooms[i].id || props.currentRoom.room_id === rooms[i].id) {
          ctx.fillStyle = 'red';
        }
        // Fill the room rect
        ctx.fillRect(leftOffset, topOffset, roomWidth, roomHeight);
        // Outline the room rect
        ctx.strokeRect(leftOffset, topOffset, roomWidth, roomHeight);
        // Set the color to draw the room id
        ctx.fillStyle = 'white';
        ctx.fillText(rooms[i].id, leftOffset + 15, topOffset + 20);
        // Draw passages to other rooms
        ctx.fillStyle = 'purple';
        if (rooms[i].n_to > 0) {
          ctx.fillRect(leftOffset + roomWidth/2 - roomPadding/2, topOffset - roomPadding/2, roomPadding, roomPadding/2);
        }
        if (rooms[i].e_to > 0) {
          ctx.fillRect(leftOffset + roomWidth, topOffset + roomHeight/2 - roomPadding/2, roomPadding/2, roomPadding);
        }
        if (rooms[i].s_to > 0) {
          ctx.fillRect(leftOffset + roomWidth/2 - roomPadding/2, topOffset + roomWidth, roomPadding, roomPadding/2);
        }
        if (rooms[i].w_to > 0) {
          ctx.fillRect(leftOffset - roomPadding/2, topOffset + roomHeight/2 - roomPadding/2, roomPadding/2, roomPadding);
        }
      }
    }
  })

    return(
      <canvas id="map" width="600" height="600"></canvas>
    )
}

export default Map