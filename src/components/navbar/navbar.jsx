import React from 'react'
import {NavLink} from 'react-router-dom';

function NavComponent
() {
    return (
    <div className="navbar navbar-expand-lg bg-light mb-5 ">
    <div className="container ">
        <div className="navbar-brand" >Navbar</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/about' >About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/shop'>Shop</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link " to='/count'>Counter</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </div>
    )
}

export default NavComponent;
