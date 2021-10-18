import React from "react";
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <header>
            <Link to="/Home" style={{paddingLeft: '15px'}}>Home</Link>
            <Link to="/Listo" style={{paddingLeft: '15px'}}>Receipe</Link>
            <Link to="/ListoCopy" style={{paddingLeft: '15px'}}>List-Receipe</Link>
        </header>

    );
}

export default Navbar;