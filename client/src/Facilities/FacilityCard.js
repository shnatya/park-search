import React from "react";

function FacilityCard({facility}) {

    return (
        <div className="card">
            
                <h2>{facility.name}</h2>
                <p>{facility.short_description}</p>
                <ul>
                    {facility.all_activities.map(activity => <h5>{activity.name}</h5>)}
                </ul>
        </div>
    )
}

export default FacilityCard

