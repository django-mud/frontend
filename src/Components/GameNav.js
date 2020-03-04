import React, { useState } from 'react';

const GameNav = props => {
    
    return (
        <div>
            <div>
                <button>North</button>
            </div>
            <div>
                <button>West</button>
                <button>East</button>
            </div>
            <div>
                <button>South</button>
            </div>
        </div>
    )

}

export default GameNav;