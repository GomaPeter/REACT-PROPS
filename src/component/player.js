import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
    return (<div >
        <Card style={{ width: '18rem', marginBottom: '20px'}}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Team: {team}
                    <br />
                    Nationality: {nationality}
                    <br />
                    Jersey Number: {jerseyNumber}
                    <br />
                    Age: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
};

export default Player;
