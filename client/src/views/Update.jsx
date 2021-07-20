import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = props => {
    const [myForm, setMyForm] = useState({})
    const [errors, setErrors] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/games/${props._id}`)
            .then(res => setMyForm(res.data))
            .catch(err => console.log(err))
    }, [])
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/games/update/${props._id}`, myForm)
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
            <h1>This is the update page</h1>
            <Form handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors}/>
        </div>
    );
}

export default Update;