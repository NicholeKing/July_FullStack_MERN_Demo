import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OneGame = props => {
    const [oneGame, setOneGame] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/games/${props._id}`)
            .then(res => setOneGame(res.data))
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            {
                oneGame ? <>
                <div className="row">
                    <img className="col-4" src={oneGame.art} alt={oneGame.title} />
                    <div className="col-6 text-left">
                        <h2>{oneGame.title}</h2>
                        <h4>Rating: {oneGame.rating}</h4>
                        <h4>Category: {oneGame.category}</h4>
                        <h4># of Players: {oneGame.minPlayers} { oneGame.maxPlayers ? "to " + oneGame.maxPlayers : ""}</h4>
                        <h4>Description: {oneGame.description}</h4>
                    </div>
                </div>
                </> : ""
            }
        </div>
    );
}

export default OneGame;