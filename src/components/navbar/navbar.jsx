import React from 'react'
import {NavLink} from 'react-router-dom';

function NavComponent
() {
    return (
    <div className="navbar navbar-expand-lg bg-light mb-5 ">
    <div className="container ">
        <div className="navbar-brand" >Portofolio</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <NavLink className="nav-link " style={{color:"black"}} aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={{color:"black"}} to='/shop'>E-Commerce</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link " style={{color:"black"}} to='/todo'>Todo-List</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link " style={{color:"black"}} to='/count'>Subbort</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link " style={{color:"black"}} to='/register'>Register</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </div>
    )
}

export default NavComponent;
