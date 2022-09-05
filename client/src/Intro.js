import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div>
            <div className='header-buttons'>
                <Link to="/login" >Log in</Link>
                <Link to="/signup" className='gap'>Sign up</Link>
            </div>
            <h1>Welcome to Park Search!</h1>    
            <img src="https://drive.google.com/uc?export=view&id=1ERVQ44FEdCDMxM7kuxpsAOrpHx_wScHh" alt="Mt.Rainier" width="1400" height="700"></img>
        </div>
    )
}

export default Intro