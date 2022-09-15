import React, { useState } from "react"
import Facilities from './Facilities/Facilities'
import { useNavigate } from "react-router-dom"

function Search({activities, filterFacilitiesBy, facilitiesToDisplay}) {
    const [chosenActivity, setChosenActivity] = useState("")
    const navigate = useNavigate()

    console.log(facilitiesToDisplay)
    
    function handleFilter(event){
        setChosenActivity(event.target.value)
        filterFacilitiesBy(event.target.value)
}

    return (
        <div className="div">
            <h1>PARK SEARCH</h1>
            <select onChange={(event) => handleFilter(event)} value={chosenActivity} placeholder="Choose activity">  
                <option value="" disabled defaultValue hidden>Please choose activity...</option>
                {activities.map((activity, index) => <option key={index} value={activity.name}>{activity.name}</option>)}
            </select>
            <h2>We have found {facilitiesToDisplay.length} facility(-ies) for you.</h2>
            {facilitiesToDisplay === [] ? null : <Facilities facilitiesToDisplay={facilitiesToDisplay}/>}
        </div>
    )
}

export default Search