import React from "react";



function NewFormTrip({facility}) {

    return (
        <div>
            <h3>Add new trip</h3>
            <h5>{facility.name}</h5>
        </div>
    )
}

export default NewFormTrip