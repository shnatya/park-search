import React from "react";
import ErrorList from "./Errors/ErrorList";
import { useNavigate} from "react-router-dom"

function Header({user, resetUser, errors, updateErrors}) {
    const navigate = useNavigate()
    //console.log(user.username)

    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            resetUser()
            navigate("/login")
          } })
      }
    
    function handleClickOnSearch() {
        navigate("/search")
    }

    function handleClickOnTrips() {
        navigate("/trips")
    }
    return (
        <div className="div">
            <button onClick={handleLogout} className="button-logout">Log Out</button>
            <h2>Hello {user.username}!</h2>
            <div className="header-buttons">
                <button onClick={handleClickOnTrips} className="btn">My trips</button>
                <button onClick={handleClickOnSearch} className="btn">Search</button>
            </div>
        
    </div>
    )
}

export default Header