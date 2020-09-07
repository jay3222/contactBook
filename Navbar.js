import React from 'react'
import {NavLink} from "react-router-dom";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

function Navbar() {
    return (
        <div>
            <>
            <nav className="navbar shadow fixed-top navabr-expand-sm navabr-dak bg-primary ">
                <div className="container">
                    <div className="d-flex flex-column justify-content-around">
                        
                    <NavLink to="#"className="navbar-brand text-white"><span className="mr-2"><ImportContactsIcon style={{fontSize:"45px"}}/></span>CONTACT BOOK</NavLink>

                </div>
                <div className="">
                    <NavLink to="/addContact" className="btn btn-light shadow-none"style={{fontSize:"14px"}}>CREATE CONTACT</NavLink>
                    
                </div></div>
            </nav>
            </>
        </div>
    )
}

export default Navbar;
