import React, { useEffect } from 'react';
import './Map.css';

const Map = props => {
  let rooms = props.rooms

  useEffect(() => {
    console.log('rooms in map component', rooms)
    var canvas = document.getElementById('map');
    // A canvas X axis increases as it goes to the right like a normal graph
    // A canvas Y axis increases as it goes to the BOTTOM unlike a normal graph!
    // Top left is 0, 0
    let centerpoint = {
      x: 200,
      y: 200
    }
    const roomWidth = 40;
    const roomHeight = 40;
    
    // Pixels between rooms
    const roomPadding = 10;
    
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
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
  }, [rooms])

    return(
      <canvas id="map" width="900" height="700"></canvas>
    )
}

export default Map