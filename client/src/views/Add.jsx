import Form from '../components/Form';
import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Add = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        art: "",
        rating: "RP",
        category: "Strategy",
        description: "",
        minPlayers: 1,
        maxPlayers: null
    })
    const [errors, setErrors] = useState({});
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/games/create", myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There were errors!");
                    setErrors(res.data.err.errors)
                } else {
                    console.log("It worked!!");
                    navigate("/");
                }
            })
            .catch(err => console.log("Something went wrong with the post request!", err))
    }
    return(
        <div>
            <h1>This is the Add page</h1>
            <Form handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
    );
}

export default Add;