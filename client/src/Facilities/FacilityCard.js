import React from "react";

function FacilityCard({facility}) {

    return (
        <div className="card">
            
                <h2>{facility.name}</h2>
                <p>{facility.short_description}</p>

        </div>
    )
}

export default FacilityCard

