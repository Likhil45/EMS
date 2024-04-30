import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"
import React from "react"

const NavbarComp=()=>{
return (
    <div class='container'>
        
    
       
        <div className="links">
            <Link to="/">Get</Link>
            <Link to="/post">Post</Link>
            <Link to="/id">Search</Link>

        </div>
        </div>
)
}
export default NavbarComp;