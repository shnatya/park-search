import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Search({resetUser}) {
    const [chosenActivity, setChosenActivity] = useState("")
    const navigate = useNavigate()

    
    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            resetUser()
            navigate("/login")
          } })
      }

    return (
        <div className="div">
            <button onClick={handleLogout} className="button-logout">Log Out</button>
            <h2>Park Search</h2>
            
        </div>
    )
}

export default Search