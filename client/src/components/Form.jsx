import React from 'react';

const Form = props => {
    const {handleSubmit, onChangeHandler, myForm, errors} = props;
    return(
        <form onSubmit={handleSubmit} className="container text-left">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" onChange={onChangeHandler} value={myForm.title}/>
                {
                    errors.title ? <span className="text-danger">{errors.title.message}</span> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="art">Cover Art</label>
                <input type="text" name="art" className="form-control" onChange={onChangeHandler} value={myForm.art}/>
                {
                    errors.art ? <span className="text-danger">{errors.art.message}</span> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select name="rating" className="form-control" onChange={onChangeHandler} value={myForm.rating}>
                    <option value="RP">RP</option>
                    <option value="E">E</option>
                    <option value="E10+">E10+</option>
                    <option value="T">T</option>
                    <option value="M">M</option>
                    <option value="AO">AO</option>
                </select>
                {
                    errors.rating ? <span className="text-danger">{errors.rating.message}</span> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" className="form-control" onChange={onChangeHandler} value={myForm.category}>
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
                {
                    errors.category ? <span className="text-danger">{errors.category.message}</span> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name="description" className="form-control" onChange={onChangeHandler} value={myForm.description}>{myForm.description}</textarea>
                {
                    errors.description ? <span className="text-danger">{errors.description.message}</span> : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="Players"># of Players</label>
                <div className="row">
                    <input type="number" name="minPlayers" className="form-control col-sm-1" onChange={onChangeHandler} value={myForm.minPlayers}/>
                    <span> to </span>
                    <input type="number" name="maxPlayers" className="form-control col-sm-1" onChange={onChangeHandler} value={myForm.maxPlayers}/>
                </div>
                {
                    errors.minPlayers ? <span className="text-danger">{errors.minPlayers.message}</span> : ""
                }
                {
                    errors.maxPlayers ? <span className="text-danger">{errors.maxPlayers.message}</span> : ""
                }
            </div>
            <input type="submit" value="Submit" className="btn btn-info" />
        </form>
    );
}

export default Form;