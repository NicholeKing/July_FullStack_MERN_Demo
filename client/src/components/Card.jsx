import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Card = props => {
    const deleteGame = _id => {
        // axios call to delete here
        axios.delete(`http://localhost:8000/api/games/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }
    return(
        <div className="card cardStyle">
            <Link to={`/game/${props.game._id}`}><img src={props.game.art} alt={props.game.title} style={{width: "18rem"}} /></Link>
            <div className="card-body">
                <h5 className="card-title"><Link to={`/game/${props.game._id}`}>{props.game.title}</Link> ({props.game.rating})</h5>
                <h6>{props.game.category}</h6>
                <p className="card-text">{props.game.description}</p>
                <small># of Players: {props.game.minPlayers} { props.game.maxPlayers ? "to " + props.game.maxPlayers : ""}</small><br/>
                <button className="btn btn-danger" onClick={() => deleteGame(props.game._id)}>Delete</button><Link to={`/game/update/${props.game._id}`}><button className="btn btn-info ml-2">Edit</button></Link>
            </div>
        </div>
    );
}

export default Card;