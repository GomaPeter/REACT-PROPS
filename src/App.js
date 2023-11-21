import React from 'react';
import PlayersList from './component/playerList';

function App() {
    return (
        <div style={{margin:'1cm', backgroundColor:'#D5D5D9', borderRadius:'6px'}}>
            <h1 style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'6px',paddingTop:'18px'}}>FIFA Player Cards</h1>
            <PlayersList />
        </div>
    );
}

export default App;
