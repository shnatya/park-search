import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Search({activities}) {
    const [chosenActivity, setChosenActivity] = useState("")
    const navigate = useNavigate()
    
    function handleFilter(event){
        setChosenActivity(event.target.value)
        //updateErrors([])
}
console.log(chosenActivity)
    return (
        <div className="div">
            <select onChange={(event) => handleFilter(event)} value={chosenActivity} >  
                {activities.map((activity, index) => <option key={index} value={activity.name}>{activity.name}</option>)}
            </select>
        </div>
    )
}

export default Search