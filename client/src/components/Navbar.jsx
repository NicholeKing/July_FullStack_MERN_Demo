import React from 'react';
import { Link } from '@reach/router';

const Navbar = props => {
    return(
        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="navbar-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/add" className="nav-link">Add</Link>
            </div>
        </div>
    );
}

export default Navbar;