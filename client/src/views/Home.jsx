import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = props => {
    const [allGames, setAllGames] = useState(null);
    const [reloadAPI, setReloadAPI] = useState(true);
    const [filter, setFilter] = useState("All");
    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then(res => filter == "All" ? setAllGames(res.data) : setAllGames(res.data.filter(game => game.category == filter)))
            .catch(err => console.log(err))
    }, [reloadAPI, filter])
    const update = () => {
        setReloadAPI(!reloadAPI);
    }
    return(
        <div>
            <h4>Filter by category: </h4>
            <select name="filter" className="form-control container" onChange={e => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Strategy">Strategy</option>
                <option value="FPS">FPS</option>
                <option value="RPG">RPG</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Simulator">Simulator</option>
                <option value="E-Sports">E-Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Kids">Kids</option>
                <option value="Horror">Horror</option>
                <option value="Platform">Platform</option>
                <option value="MMO">MMO</option>
            </select>
            <br />
            <div style={{display: "flex"}}>
            {
                allGames ?  
                allGames.map((game, i) => {
                    return <Card game={game} update={update} key={i}/>
                })
                : ""
            }
            </div>
        </div>
    );
}

export default Home;