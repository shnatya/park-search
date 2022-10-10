import React from "react";
import ErrorList from "./Errors/ErrorList";
import { useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"

function Header({resetUser, errors, updateErrors, handleSwitchButtons}) {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)
    
    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            resetUser()
            navigate("/login")
          } })
      }
    
    function handleClickOnSearch() {
        updateErrors([])
        handleSwitchButtons("search")
        navigate("/search")
    }

    function handleClickOnTrips() {
        updateErrors([])
        handleSwitchButtons("trips")
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
            <ErrorList errors={errors} className="between-text"/>
    </div>
    )
}

export default Header