import React from "react";

function FacilityCard({facility}) {

    return (
        <div className="card">
            
                <h2>{facility.name}</h2>
                <p>{facility.description}</p>

        </div>
    )
}

export default FacilityCard

