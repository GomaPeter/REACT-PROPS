import React from 'react';
import Player from './player';
import players from './players';

const PlayersList = () => {
    return (
        <div style={{ display: 'flex', mt:'1cm', gap:'10px', alignItems:'center', justifyContent:'center'}}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;
