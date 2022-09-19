import React from "react";
import { Link } from "react-router-dom"


function FacilityCard({facility, handleReadMore, handleAddTrip}) {
    
   
    return (
        <div>
                <h1>{facility.name}</h1>
                <button onClick={() => handleAddTrip(facility)}>Add trip</button>
                <div dangerouslySetInnerHTML={{ __html: facility.short_description }}></div>
                <button onClick={() => handleReadMore(facility)} className="read-more">Read more ...</button>
                
                <ul>
                    <h3>All activities:</h3>
                    {facility.all_activities.map(activity => <h5 className="activities-horizontal">{activity.name}</h5>)}
                </ul>
                <h1>&#127794;&#127794;&#127794;&#127794;&#127794;</h1>
        </div>
    )
}

export default FacilityCard
